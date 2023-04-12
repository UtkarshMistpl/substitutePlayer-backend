const { Sequelize, DataTypes } = require("sequelize");
const database = require("../config/database");
const config = require("../config/constant");

const sequelize = new Sequelize(config.DB, config.USER_DB, config.PASSWORD_DB, {
	host: "localhost",
	dialect: "mysql",
	pool: { min: 0, max: 10, idle: 10000 },
});

sequelize
	.authenticate()
	.then(() => {
		console.log("connected");
	})
	.catch((err) => {
		console.log("err " + err);
	});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.users = require("./UserModel")(sequelize, DataTypes);
// db.Output = require("./OutPutModel")(sequelize, DataTypes);
db.users = require("./UserModel")(sequelize, DataTypes);
db.clubs = require("./ClubsModel")(sequelize, DataTypes);
db.players = require("./PlayerModel")(sequelize, DataTypes);
db.sequelize.sync().then(() => {
	console.log("yes sync");
});

module.exports = db;
