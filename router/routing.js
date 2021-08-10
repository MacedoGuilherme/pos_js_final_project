const routing = require("express").Router();
const customer = require("../controller/customer")();
const game = require("../controller/game")();
const lease = require("../controller/lease")();

routing.get('/list', customer.list)
routing.get('/finduser', customer.finduser)
routing.get('/totalleases', customer.totalleases)
routing.post('/registercustomer', customer.registerCustomer)
routing.put('/changeemail', customer.changeemail)
routing.delete('/deletelease/:id', customer.deletelease)

routing.post('/registergame', game.registerGame)
routing.put('/changegame', game.changeGame)

routing.post('/registerlease', lease.registerLease)
routing.get('/customerlease', lease.customerLease)

module.exports = routing;
