const conectar = require("../../repository/config");

module.exports = (genre, callback) => {
  const connection = conectar((connection, err) => {
    if (err) {
      const error = new Error();
      error.message = "Não foi possível conectar ao banco de dados";
      error.httpStatusCode = 500;
      error.code = "ERR003";
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
          error.message = "Registro não encontrado";
          error.httpStatusCode = 404;
          return callback(null, error);
        }

        return callback(res);
      }
    );
  });
};
