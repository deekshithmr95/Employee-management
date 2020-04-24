module.exports = (sequelize, Sequelize) => {
  const employee_main = sequelize.define('employee_main', {
    emp_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      autoIncrement: false,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    mobile: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    dob: {
      type: Sequelize.DATE,
    },
    gender: {
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.STRING,
    },
    designation: {
      type: Sequelize.STRING,
    },
    blood_group: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return employee_main;
};
