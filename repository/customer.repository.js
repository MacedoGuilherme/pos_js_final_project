const registerCustomer = require("../services/customer/registerCustomer");
const changeCustomer = require("../services/customer/changeCustomer");
const IsCpfAlreadyRegistered = require("../services/customer/IsCpfAlreadyRegistered");

module.exports = () => {
  const repository = {};

  repository.registerCustomer = registerCustomer;
  repository.changeCustomer = changeCustomer;
  repository.IsCpfAlreadyRegistered = IsCpfAlreadyRegistered;

  return repository;
};
