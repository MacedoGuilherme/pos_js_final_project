const conectar = require("../../database/db");

module.exports = (lease, callback) => {
  const connection = conectar((connection, err) => {
    const { id_customer, id_game, lease_dt, return_dt, lease_value } = lease;

    if (err) {
      const error = new Error();
      error.message = "Could not connect to database";
      error.httpStatusCode = 500;
      return callback(null, error);
    }

    connection.query(
      `SELECT * FROM LEASE WHERE ID_CUSTOMER = ? && ID_GAME = ? && LEASE_DT = ? && RETURN_DT = ? && LEASE_VALUE = ?`,
      [id_customer, id_game, lease_dt, return_dt, lease_value],
      function (err, res) {
        if (err) {
          console.log(err);
          return;
        }
        if (res.length != 0) {
          const error = new Error();
          error.message = "Lease is already registered";
          error.httpStatusCode = 422;
          return callback(null, error);
        } else {
          connection.query(
            `INSERT INTO LEASE SET ?`,
            lease,
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
