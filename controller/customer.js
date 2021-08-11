const request = require("request");
const customerRep = require("../repository/customer.repository")();

module.exports = () => {
  const customers = {};

  function IsCpfAlreadyRegistered(cpf) {
    customerRep.IsCpfAlreadyRegistered(cpf, (callback, err) => {
      if (err) {
        return callback(err);
      }

      if (callback) {
        throw {
          httpStatusCode: 400,
          code: "ERR001",
          message: "CPF já cadastrado",
        };
      }
    });
  }

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
        res.status(400).json(body);
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
