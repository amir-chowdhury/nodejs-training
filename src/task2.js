const { pipeline } = require('stream/promises');
const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

const filePath = "./csv/test.csv";
const writePath = "./converted-csv-to-json.txt";

async function run() {
  const ac = new AbortController();
  const options = {
    signal: ac.signal,
  };

  await pipeline(
    fs.createReadStream(path.join(__dirname, filePath)),
    csv(),
    fs.createWriteStream(path.join(__dirname, writePath)),
    options
  );
  ac.abort();
  console.log('Pipeline succeeded.');
}

run().catch(console.error);
