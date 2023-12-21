const jsonTest = require("./reports/mochawesome.json");
const fs = require("fs");
module.exports = jsonTest;

let testTotales = 0;
let testPasados = 0;
let testFallados = 0;
let testSkipped = 0;

let data = "";

console.log("POST PROCESAMIENTO de Reporte JSON");

jsonTest.results[0].suites.forEach((suite, idSuite) => {
  console.log(`SUITE ${idSuite + 1} - ${suite.title} \n`);
  data += `SUITE ${idSuite + 1} - ${suite.title}`;
  suite.tests.forEach((test, idTests) => {
    console.log(`TEST ${idTests + 1} - ${test.title} - ${test.state} \n`);
    data += `TEST ${idTests} - ${test.title}`;
    switch (test.state) {
      case "passed":
        testPasados++;
        break;
      case "failed":
        testFallados++;
        break;
      case "pending":
        testSkipped++;
        break;
    }
  });
});
testTotales = testFallados + testPasados + testSkipped;
console.log(`TESTS TOTALES: ${testTotales}`);
console.log(`TESTS PASSADOS: ${testPasados}`);
console.log(`TESTS FALLADOS: ${testFallados}`);
console.log(`TESTS SKIPPEADOS: ${testSkipped}`);

data += `TESTS TOTALES: ${testTotales} \n`;
data += `TESTS PASSADOS: ${testPasados} \n`;
data += `TESTS FALLADOS: ${testFallados} \n`;
data += `TESTS SKIPPEADOS: ${testSkipped} \n`;

fs.writeFileSync("reports/testResume.txt", data);
