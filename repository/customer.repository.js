const totalLeases = require("../services/totalLeases");
const findUser = require("../services/findUser");
const registerCustomer = require("../services/registerCustomer");
const changeEmail = require("../services/changeEmail");
const deleteLease = require("../services/deleteLease");

module.exports = () => {
  const repository = {};

  repository.totalLeases = totalLeases;
  repository.findUser = findUser;
  repository.registerCustomer = registerCustomer;
  repository.changeEmail = changeEmail;
  repository.deleteLease = deleteLease;

  return repository;
};
