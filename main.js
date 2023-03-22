const fs = require('fs');

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!fs.existsSync(inputFile)) {
  console.error(`Input file "${inputFile}" does not exist`);
  process.exit(1);
}

if (fs.existsSync(outputFile)) {
  console.error(`Output file "${outputFile}" already exists`);
  process.exit(1);
}

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  fs.writeFile(outputFile, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Contents of "${inputFile}" have been written to "${outputFile}"`);
  });
});
