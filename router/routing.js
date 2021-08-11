const routing = require("express").Router();
const customer = require("../controller/customer")();
const game = require("../controller/game")();
const lease = require("../controller/lease")();

routing.post("/registercustomer", customer.registerCustomer);
routing.put("/changecustomer", customer.changeCustomer);

routing.post("/registergame", game.registerGame);
routing.get("/listgamegenre/:genre", game.listGameByGenre);
routing.get("/listgameplatform/:platform", game.listGameByPlatform);
routing.put("/changegame", game.changeGame);
routing.delete("/deletegame/:id", game.deleteGame);

routing.post("/registerlease", lease.registerLease);
routing.get("/customerlease", lease.customerLease);
routing.delete("/deletelease/:id", lease.deleteLease);

module.exports = routing;
