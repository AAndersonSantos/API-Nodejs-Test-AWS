const express = require('express');
const router = express.Router();
const controller = require("../controllers/userController");

router.get('/usuarios', controller.returnUsers);

module.exports = router;