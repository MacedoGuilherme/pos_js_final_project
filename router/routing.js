const routing = require("express").Router();
const leaseController = require("../controller/leaseController")();
const game = require("../controller/game")();

routing.get('/list', leaseController.list)
routing.get('/finduser', leaseController.finduser)
routing.get('/totalleases', leaseController.totalleases)
routing.post('/registercustomer', leaseController.registerCustomer)
routing.put('/changeemail', leaseController.changeemail)
routing.delete('/deletelease/:id', leaseController.deletelease)

routing.post('/registergame', game.registerGame)
routing.put('/changegame', game.changeGame)

module.exports = routing;
