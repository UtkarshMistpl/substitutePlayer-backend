const { hash } = require("bcrypt");
const db = require("../models");
const { createToken, verifyPassword, createHash } = require("../utils/util");
const { validationResult } = require("express-validator");

const Users = db.users;

const addUser = async (req, res) => {};

const adminLogin = async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	console.log("email");
	if (!email) {
		res.send({ status: "error", message: "email missing" });
		return;
	}
	console.log("password");

	if (!password) {
		res.json({ status: "error", message: "password missing" });
		return;
	}

	let userCheck = await Users.findOne({
		where: { email: email, password: password },
	});

	if (!userCheck) {
		res.json({ status: "error", message: "invalid credentials" });
		return;
	}
	const token = createToken(userCheck);

	res.json({ status: "success", token: token, user: userCheck });
};

module.exports = {
	addUser,
	adminLogin,
};
