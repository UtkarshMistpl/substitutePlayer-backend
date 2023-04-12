const express = require("express");
const {
	getPlayer,
	getAllPlayers,
	getFilteredPlayer,
} = require("../controllers/playerController");
const router = express.Router();

router.post("/getPlayer", getPlayer);
router.get("/getAllPlayer", getAllPlayers);
router.post("/getFilteredPlayers", getFilteredPlayer);
module.exports = router;
