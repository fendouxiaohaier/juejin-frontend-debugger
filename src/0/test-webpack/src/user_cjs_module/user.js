const { showAge } = require("./age");

const { showName } = require("./name");

const showUser = () => {
  showAge();
  showName();
};

showUser();

module.export = { showUser };
