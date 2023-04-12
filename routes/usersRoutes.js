const { application } = require("express");
const express = require("express");
const router = express.Router();
const { addUser, adminLogin } = require("../controllers/userController");
const { formValidator } = require("../utils/util");

router.post("/signup", formValidator, addUser);
router.post("/signin", adminLogin);
module.exports = router;
