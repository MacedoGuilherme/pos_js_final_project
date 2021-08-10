const registerLease = require("../services/registerLease");
const customerLease = require("../services/customerLease");

module.exports = () => {
  const repository = {};

  repository.registerLease = registerLease;
  repository.customerLease = customerLease;

  return repository;
};
