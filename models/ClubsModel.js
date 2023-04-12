module.exports = (sequelize, DataTypes) => {
	const Clubs = sequelize.define(
		"sport_center",
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
			days: {
				type: DataTypes.STRING,
			},
			_from: {
				type: DataTypes.STRING,
			},
			_to: {
				type: DataTypes.STRING,
			},
			city: {
				type: DataTypes.STRING,
			},
			fee: {
				type: DataTypes.STRING,
			},
		},
		{
			createdAt: "created_at",
			updatedAt: "updated_at",
		}
	);

	return Clubs;
};
