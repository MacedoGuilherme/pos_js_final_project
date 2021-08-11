const conectar = require("../../repository/config");

module.exports = (genre, callback) => {
  const connection = conectar((connection, err) => {
    if (err) {
      const error = new Error();
      error.message = "Could not connect to database";
      error.httpStatusCode = 500;
      return callback(null, error);
    }

    connection.query(
      `SELECT NAME, GENRE, PLATFORM FROM GAME WHERE GENRE = ?`,
      genre,
      function (err, res) {
        if (err) {
          console.log(err);
          return;
        }

        if (res.length == 0) {
          const error = new Error();
          error.message = "Register not found";
          error.httpStatusCode = 404;
          return callback(null, error);
        }

        return callback(res);
      }
    );
  });
};
