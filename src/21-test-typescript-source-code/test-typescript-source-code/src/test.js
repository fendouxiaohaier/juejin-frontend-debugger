const ts = require("../TypeScript/built/local/typescript");
const path = require('path');

console.log('ts:',ts);

const filename = "./input.ts";
const program = ts.createProgram([filename], {
    allowJs: false,
    strictNullChecks: true
});

const sourceFile = program.getSourceFile(filename);
const typeChecker = program.getTypeChecker();

function visitNode(node) {
    if (node.kind === ts.SyntaxKind.TypeAliasDeclaration && node.name.escapedText === 'res')  {
        const type = typeChecker.getTypeFromTypeNode(node.name);

        console.log(type);
    }

    node.forEachChild(child =>
        visitNode(child)
    );
}

visitNode(sourceFile);