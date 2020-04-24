module.exports = (sequelize, Sequelize) => {
  const roles_main = sequelize.define('roles_main', {
    role_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
      type: Sequelize.STRING,
    },
  });
  return roles_main;
};
