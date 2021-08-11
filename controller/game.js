const gameRep = require("../repository/game.repository")();

module.exports = () => {
  const games = {};

  games.registerGame = (req, res, callback) => {
    const game = req.body;

    const { name, genre, platform } = game;

    if (!name || !genre || !platform) {
      throw {
        httpStatusCode: 400,
        message: "param is missing or the value is empty: game",
      };
    }

    gameRep.registerGame(game, (games, err) => {
      if (err) {
        return callback(err);
      }

      res.status(200).json(games);
    });
  };

  games.changeGame = (req, res, callback) => {
    const game = req.body;

    const { id, name, genre, platform } = game;

    if (!id || !name || !genre || !platform) {
      throw {
        httpStatusCode: 400,
        message: "param is missing or the value is empty: game",
      };
    }

    gameRep.changeGame(game, (callback2, err) => {
      if (err) {
        return callback(err);
      }

      res.status(200).json();
    });
  };

  games.listGameByGenre = (req, res, callback) => {
    const genre = req.params.genre;

    gameRep.listGameByGenre(genre, (callback2, err) => {
      if (err) {
        return callback(err);
      }

      res.status(200).json(callback2);
    });
  };

  games.listGameByPlatform = (req, res, callback) => {
    const platform = req.params;

    gameRep.listGameByPlatform(platform, (callback2, err) => {
      if (err) {
        return callback(err);
      }

      res.status(200).json(callback2);
    });
  };

  games.deleteGame = (req, res, callback) => {
    const id = req.params.id;

    gameRep.deleteGame(id, (callback2, err) => {
      if (err) {
        return callback(err);
      }

      res.status(200).json(callback2);
    });
  };

  return games;
};
