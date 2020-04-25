module.exports = (sequelize, Sequelize) => {
  const leaves_main = sequelize.define('leave_types_main', {
    leave_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    leave_type: {
      type: Sequelize.STRING,
    },
  });

  return leaves_main;
};
