const registerGame = require("../services/game/registerGame");
const changeGame = require("../services/game/changeGame");
const listGameByGenre = require("../services/game/listGameByGenre");
const listGameByPlatform = require("../services/game/listGameByPlatform");
const deleteGame = require("../services/game/deleteGame");

module.exports = () => {
  const repository = {};

  repository.registerGame = registerGame;
  repository.changeGame = changeGame;
  repository.listGameByGenre = listGameByGenre;
  repository.listGameByPlatform = listGameByPlatform;
  repository.deleteGame = deleteGame;

  return repository;
};
