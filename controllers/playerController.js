const db = require("../models");
const { Op } = require("sequelize");
const { getDistance } = require("../services/services");

const Players = db.players;

const getPlayer = async () => {};

const getAllPlayers = async (req, res) => {
	const players = await Players.findAll({
		order: [["id", "DESC"]],
	});

	if (!players) {
		res.json({ status: "error", message: "failed no workers found" });
		return;
	}

	if (players) {
		res.json({ status: "success", players: players });
	}
};

const getFilteredPlayer = async (req, res) => {
	const days = req.body.days;
	const sports = req.body.sports;
	const startDate = req.body._from;
	const endDate = req.body._to;
	const lat = req.body.lat;
	const lng = req.body.lng;
	const distance = req.body.distance ? req.body.distance : 5;
	console.log("request body", days);

	// Post.findAll({
	// 	where: {
	// 		[Op.or]: [{ authorId: 12 }, { authorId: 13 }],
	// 	},
	// });

	const searchObjDays = days.map((value, index) => {
		return {
			avail_day: { [Op.like]: `%${value}%` },
		};
	});
	const searchObjSports = sports.map((value, index) => {
		return {
			sport: { [Op.like]: `%${value}%` },
		};
	});

	const searchObjTime = [
		{
			_from: {
				[Op.between]: [startDate, endDate],
			},
		},
		{
			_to: {
				[Op.between]: [startDate, endDate],
			},
		},
	];
	const allplayers = await Players.findAll({
		where: {
			[Op.and]: [
				{
					[Op.or]: searchObjDays,
				},
				{
					[Op.or]: searchObjSports,
				},
				{
					[Op.or]: searchObjTime,
				},
			],
		},
		order: [["id", "DESC"]],
	});

	if (!allplayers) {
		res.json({ status: "error", message: "failed no workers found" });
		return;
	}

	//calculate distance
	let filteredPlayers = allplayers.filter((it) => {
		return getDistance(it.lat, it.lng, lat, lng) <= distance;
	});

	console.log("All Players:", JSON.stringify(allplayers, null, 2));

	if (filteredPlayers) {
		res.json({ status: "success", players: filteredPlayers });
	}
};

module.exports = {
	getPlayer,
	getAllPlayers,
	getFilteredPlayer,
};
