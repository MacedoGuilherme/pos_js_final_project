const registerLease = require("../services/lease/registerLease");
const customerLease = require("../services/lease/customerLease");
const deleteLease = require("../services/lease/deleteLease");

module.exports = () => {
  const repository = {};

  repository.registerLease = registerLease;
  repository.customerLease = customerLease;
  repository.deleteLease = deleteLease;

  return repository;
};
