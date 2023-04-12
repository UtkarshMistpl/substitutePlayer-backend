module.exports = (sequelize, DataTypes) => {
	const Players = sequelize.define(
		"players",
		{
			name: {
				type: DataTypes.STRING,
			},
			lname: {
				type: DataTypes.STRING,
			},
			phone: {
				type: DataTypes.STRING,
			},
			email: {
				type: DataTypes.STRING,
			},
			address: {
				type: DataTypes.STRING,
			},
			lat: {
				type: DataTypes.STRING,
			},
			lng: {
				type: DataTypes.STRING,
			},
			sport: {
				type: DataTypes.STRING,
			},
			skill: {
				type: DataTypes.STRING,
			},
			avail_day: {
				type: DataTypes.STRING,
			},
			_from: {
				type: DataTypes.STRING,
			},
			_to: {
				type: DataTypes.STRING,
			},
			distance: {
				type: DataTypes.STRING,
			},
			professional: {
				type: DataTypes.STRING,
			},
			hourly_rate: {
				type: DataTypes.STRING,
			},
		},
		{
			createdAt: "created_at",
			updatedAt: "updated_at",
		}
	);

	return Players;
};
