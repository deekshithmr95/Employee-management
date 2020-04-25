const dbconfig = require('../../config/db.config');

const Sequqlize = require('sequelize');

const sequelize = new Sequqlize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acquire,
    idle: dbconfig.pool.idle,
  },
});

const db = {};

db.Sequqlize = Sequqlize;
db.sequelize = sequelize;

db.emp_main = require('./employee.models.js')(sequelize, Sequqlize);
db.roles_main = require('./roles.models.js')(sequelize, Sequqlize);
db.emp_roles = require('./emp_roles.models')(sequelize, Sequqlize);
db.holiday_main = require('./holiday.models.js')(sequelize, Sequqlize);
db.leave_main = require('./leave.models.js')(sequelize, Sequqlize);

db.emp_main.belongsToMany(db.roles_main, {as:'Roles', through: {model: db.emp_roles, unique: false}, foreignKey:'emp_id'});
db.roles_main.belongsToMany(db.emp_main, {as:'Uers', through: {model: db.emp_roles, unique: false}, foreignKey:'role_id'});

module.exports = db;