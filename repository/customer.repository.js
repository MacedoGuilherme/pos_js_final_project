const registerCustomer = require("../services/customer/registerCustomer");
const changeCustomer = require("../services/customer/changeCustomer");

module.exports = () => {
  const repository = {};

  repository.registerCustomer = registerCustomer;
  repository.changeCustomer = changeCustomer;

  return repository;
};
