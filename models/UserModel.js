module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define(
		"users",
		{
			name: {
				type: DataTypes.STRING,
			},
			email: {
				type: DataTypes.STRING,
			},
			password: {
				type: DataTypes.STRING,
			},
			role: {
				type: DataTypes.STRING,
			},
		},
		{
			createdAt: "created_at",
			updatedAt: "updated_at",
		}
	);

	return Users;
};
