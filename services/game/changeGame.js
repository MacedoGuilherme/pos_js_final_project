const conectar = require("../../repository/config");

module.exports = (game, callback) => {
  const { id, name, genre, platform, price } = game;

  const connection = conectar((connection, err) => {
    if (err) {
      const error = new Error();
      error.message = "Could not connect to database";
      error.httpStatusCode = 500;
      return callback(null, error);
    }

    connection.query(
      `UPDATE GAME SET NAME = ?, GENRE = ?, PLATFORM = ? WHERE ID = ${id}`,
      [name, genre, platform, price],
      function (err, res) {
        if (err) {
          console.log(err);
          return;
        }

        if (res.affectedRows === 0) {
          const error = new Error();
          error.message = "Register not found";
          error.httpStatusCode = 404;
          return callback(null, error);
        }
        return callback();
      }
    );
  });
};
