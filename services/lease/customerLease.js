const conectar = require("../../repository/config");

module.exports = (req, callback) => {
  const { cpf } = req;

  const connection = conectar((connection, err) => {
    if (err) {
      const error = new Error();
      error.message = "Could not connect to database";
      error.httpStatusCode = 500;
      return callback(null, error);
    }

    connection.query(
      `SELECT C.NAME FROM LEASE L LEFT JOIN CUSTOMER C ON C.ID = L.ID_CUSTOMER WHERE C.CPF = "${cpf}";`,
      function (err, rows) {
        if (err) {
          console.log(err);
          return;
        }

        if (rows.length != 0) {
          connection.query(
            `SELECT C.NAME, SUM(L.LEASE_VALUE) AS TOTAL FROM LEASE L LEFT JOIN CUSTOMER C ON C.ID = L.ID_CUSTOMER WHERE C.CPF = "${cpf}";`,
            function (err, rows) {
              if (err) {
                console.log(err);
                return;
              }

              return callback(rows);
            }
          );
        } else {
          const error = new Error();
          error.message = "Register not found";
          error.httpStatusCode = 404;
          return callback(null, error);
        }
      }
    );
  });
};
