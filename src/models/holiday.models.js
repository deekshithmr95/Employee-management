module.exports = (sequelize, Sequelize) => {
  const holidays_main = sequelize.define('holidays_main', {
    holiday_name: {
      type: Sequelize.STRING,
    },

    valid_from: {
      type: Sequelize.DATE,
    },

    valid_to: {
      type: Sequelize.DATE,
    },

    is_optional: {
      type: Sequelize.BOOLEAN,
    },
  });

  return holidays_main;
};
