const request = require("request");
const customerRep = require("../repository/customer.repository")();

module.exports = () => {
  const customers = {};

  customers.registerCustomer = (req, res, callback) => {
    const customer = req.body;
    const { name, cpf, email, phone } = customer;

    if (!name || !cpf || !email || !phone) {
      throw {
        httpStatusCode: 400,
        message: "param is missing or the value is empty: customer",
      };
    }

    // IsCpfAlreadyRegistered(cpf);

    const requestCpf = `https://robsonalves-net-br-document-generator-srvapp.azurewebsites.net/api/CPF/isvalid/${cpf}`;

    request(requestCpf, (error, response, body) => {
      if (body !== '"CPF inválido"') {
        customerRep.registerCustomer(customer, (leases, err) => {
          if (err) {
            return callback(err);
          }
          res.status(200).json();
        });
      } else {
        res.status(401).json({ message: 'CPF is not valid' });
      }
    });
  };

  customers.changeCustomer = (req, res, callback) => {
    const customer = req.body;
    const { name, cpf, email, phone } = customer;

    if (!name || !cpf || !email || !phone) {
      throw {
        httpStatusCode: 400,
        message: "param is missing or the value is empty: customer",
      };
    }

    customerRep.changeCustomer(customer, (callback2, err) => {
      if (err) {
        return callback(err);
      }

      res.status(200).json();
    });
  };

  return customers;
};
