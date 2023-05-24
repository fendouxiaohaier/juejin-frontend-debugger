import age2, { showAge } from "./age";

import { showName } from "./name";

const showUser = () => {
  showAge();
  showName();
  console.log('age2:', age2);
};

showUser();

export { showUser };