const fs = require('fs/promises');
const path = require('path');

(async function () {
  const content = await fs.readFile(path.resolve(__dirname, './test.jsonc'), { encoding: 'utf-8' });
content;
  console.log(content);

  fs.writeFile(path.resolve(__dirname, './test.jsonc'), content, { encoding: 'utf-8' });
})();
