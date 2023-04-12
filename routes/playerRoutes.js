const express = require("express");
const {
	getPlayer,
	getAllPlayers,
	getFilteredPlayer,
} = require("../controllers/playerController");
const router = express.Router();

router.post("/getPlayer", getPlayer);
router.post("/getAllPlayers", getAllPlayers);
router.post("/getFilteredPlayers", getFilteredPlayer);
module.exports = router;
