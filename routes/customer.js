const express = require("express");
let router = express.Router();
var db = require("../models");

var custCtrl = require("../controllers/custController");

router.post("/", custCtrl.registerCustomer);
router.get("/customers", custCtrl.getCustomers);
router.get("/customer/:id", custCtrl.getCustomer);
router.put("/editCustomer/:id", custCtrl.editCustomer);
router.delete("/deleteCustomer/:id", custCtrl.deleteCustomer);

module.exports = router;