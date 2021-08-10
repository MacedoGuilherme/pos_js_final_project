const request = require("request");
const customerRep = require("../repository/customer.repository")();

module.exports = () => {
  const customers = {};

  customers.list = (req, res, callback) => {
    customerRep.list((leases, err) => {
      if (err) {
        return callback(err);
      }
      res.status(200).json(leases);
    });
  };

  customers.finduser = (req, res, callback) => {
    const cpf = req.body.cpf;

    if (!cpf) {
      throw { httpStatusCode: 400, code: 'ERR001', message: 'CPF é obrigatório' };
    }

    customerRep.findUser(cpf, (user, err) => {
      // if (callback.length !== 0) {
      //   res.status(200).json(callback);
      // } else {
      //   res.status(200).send("Usuário não encontrado!");
      // }
      if (err) {
        return callback(err);
      }
      res.status(200).json(user);
    });
  };

  customers.totalleases = (req, res, callback) => {
    const customer = req.body.customer;

    customerRep.totalLeases(customer, (total, err) => {
      if (err) {
        return callback(err);
      }
      res.status(200).json(total);
    });
  };

  customers.registerCustomer = (req, res, callback) => {
    const lease = req.body;
    const { cpf } = lease;

    if (!cpf) {
      throw {
        httpStatusCode: 400,
        code: "ERR001",
        message: "CPF é obrigatório",
      };
    }

    const requestCpf = `https://robsonalves-net-br-document-generator-srvapp.azurewebsites.net/api/CPF/isvalid/${cpf}`;

    request(requestCpf, (error, response, body) => {
      if (body !== '"CPF inválido"') {
        customerRep.registerCustomer(lease, (leases, err) => {
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

  customers.changeemail = (req, res, callback) => {
    const customer = req.body;

    customerRep.changeEmail(customer, (callback2, err) => {
      if (err) {
        return callback(err);
      }

      if (callback2 === 0) {
        res.status(200).send("CPF não encontrado!");
      } else {
        res.status(200).send("Email alterado com sucesso!");
      }
    });
  };

  customers.deletelease = (req, res, callback) => {
    const id = req.params.id;

    customerRep.deleteLease(id, (callback2, err) => {
      if (err) {
        return callback(err);
      }

      res.status(200).res.send();
    });
  };

  return customers;
};
