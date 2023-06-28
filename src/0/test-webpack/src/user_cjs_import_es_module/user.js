const ageDefault = require("./age");

const showUser = () => {
  ageDefault();
  ageDefault.showAge2();
};

showUser();

module.exports = { showUser };
