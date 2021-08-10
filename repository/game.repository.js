const registerGame = require("../services/registerGame");
const changeGame = require("../services/changeGame");

module.exports = () => {
  const repository = {};

  repository.registerGame = registerGame;
  repository.changeGame = changeGame;

  return repository;
};
