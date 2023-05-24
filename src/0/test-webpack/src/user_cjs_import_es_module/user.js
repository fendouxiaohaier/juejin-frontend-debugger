const ageDefault = require("./age");

const showUser = () => {
  ageDefault();
  ageDefault.showAge2();
};

showUser();

export { showUser };
