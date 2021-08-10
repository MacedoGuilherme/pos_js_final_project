const gameRep = require("../repository/game.repository")();

module.exports = () => {
  const games = {};

  games.registerGame = (req, res, callback) => {
    const game = req.body;

    gameRep.registerGame(game, (games, err) => {
      if (err) {
        return callback(err);
      }
      res.status(200).json('Deu certo!');
    });



  };

  games.changeGame = (req, res, callback) => {
    const game = req.body;

    gameRep.changeGame(game, (callback2, err) => {
      if (err) {
        return callback(err);
      }

      res.status(200).json(callback);

    });
  };

  return games;
};
