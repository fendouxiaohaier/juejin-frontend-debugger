import ageDefault, { showAge } from "./age";

import nameDefault, { showName } from "./name";

const showUser = () => {
  nameDefault.showName()
  showAge();
  showName();
  ageDefault.showAge2();
};

showUser();

export { showUser };