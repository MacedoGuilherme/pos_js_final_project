const conectar = require("../../repository/config");

module.exports = (customer, callback) => {
  const { cpf } = customer;

  const connection = conectar((connection, err) => {
    if (err) {
      const error = new Error();
      error.message = "Could not connect to database";
      error.httpStatusCode = 500;
      return callback(null, error);
    }

    connection.query(
      `SELECT CPF FROM CUSTOMER WHERE CPF = ?`,
      cpf,
      function (err, res) {
        if (err) {
          console.log(err);
          return;
        }

        const isCpfAlreadyRegistered = res.length >= 1 ? true : false;

        if (isCpfAlreadyRegistered) {
          const error = new Error();
          error.message = "CPF already registered!";
          error.httpStatusCode = 422;
          return callback(null, error);
        } else {
          connection.query(
            `INSERT INTO CUSTOMER SET ?`,
            customer,
            function (err, res) {
              if (err) {
                console.log(err);
                return;
              }
              return callback();
            }
          );
        }
      }
    );
  });
};
