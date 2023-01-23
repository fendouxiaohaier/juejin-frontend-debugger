const { ESLint } = require("eslint");

const engine = new ESLint({
    fix: false
});

(async function main() {
    const results = await engine.lintFiles(['./index.js']);
  
    console.log(results);
  
    const formatter = await engine.loadFormatter("stylish");
    const resultText = formatter.format(results);
    console.log("resultText:",resultText);
  })();