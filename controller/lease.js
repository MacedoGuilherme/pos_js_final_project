const leaseRep = require("../repository/lease.repository")();

module.exports = () => {
  const leases = {};

  leases.registerLease = (req, res, callback) => {
    const lease = req.body;
    const { id_customer, id_game, lease_dt, return_dt, lease_value } = lease;

    if (!id_customer || !id_game || !lease_dt || !return_dt || !lease_value) {
      throw {
        httpStatusCode: 400,
        message: "param is missing or the value is empty: lease",
      };
    }

    leaseRep.registerLease(lease, (leases, err) => {
      if (err) {
        return callback(err);
      }
      res.status(200).json();
    });
  };

  leases.customerLease = (req, res, callback) => {
    const customer = req.body;

    leaseRep.customerLease(customer, (customers, err) => {
      if (err) {
        return callback(err);
      }
      res.status(200).json(customers);
    });
  };

  leases.deleteLease = (req, res, callback) => {
    const id = req.params.id;

    leaseRep.deleteLease(id, (callback2, err) => {
      if (err) {
        return callback(err);
      }

      res.status(200).json(callback2);
    });
  };

  return leases;
};
