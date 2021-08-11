const conectar = require("../../repository/config");

module.exports = (req, callback) => {
  const { id } = req;

  const connection = conectar((connection, err) => {
    if (err) {
      const error = new Error();
      error.message = "Não foi possível conectar ao banco de dados";
      error.httpStatusCode = 500;
      error.code = "ERR003";
      return callback(null, error);
    }

    connection.query(
      "SELECT C.NAME, SUM(L.LEASE_VALUE) FROM LEASE L LEFT JOIN CUSTOMER C ON C.ID = L.ID_CUSTOMER WHERE C.ID = ?;", id ,
      function (err, rows) {
        if (err) {
          console.log(err);
          return;
        }

        return callback(rows);
      }
    );
  });
};
