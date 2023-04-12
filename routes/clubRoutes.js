const express = require("express");
const {
	getClub,
	getAllClubs,
	getClubsByDistance,
} = require("../controllers/clubController");
const router = express.Router();

router.post("getClub", getClub);
router.post("getAllClubs", getAllClubs);
router.post("getClubByDistance", getClubsByDistance);

module.exports = router;
