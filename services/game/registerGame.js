const conectar = require("../../database/db");

module.exports = (game, callback) => {
  const { name, genre, platform } = game;

  const connection = conectar((connection, err) => {
    if (err) {
      const error = new Error();
      error.message = "Could not connect to database";
      error.httpStatusCode = 500;
      return callback(null, error);
    }

    connection.query(
      `SELECT * FROM GAME WHERE NAME = ? && GENRE = ? && PLATFORM = ?`,
      [name, genre, platform],
      function (err, res) {
        if (err) {
          console.log(err);
          return;
        }
        if (res.length != 0) {
          const error = new Error();
          error.message = "Game is already registered";
          error.httpStatusCode = 422;
          return callback(null, error);
        } else {
          connection.query(`INSERT INTO GAME SET ?`, game, function (err, res) {
            if (err) {
              console.log(err);
              return;
            }
            return callback();
          });
        }
      }
    );
  });
};
