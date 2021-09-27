const { pipeline } = require('stream/promises');
const { createReadStream, createWriteStream } = require('fs');
const { join } = require('path');
const csv = require('csvtojson');

const filePath = "./csv/test.csv";
const writePath = "./converted-csv-to-json.txt";

async function run() {
  const ac = new AbortController();
  const options = {
    signal: ac.signal,
  };

  await pipeline(
    createReadStream(join(__dirname, filePath)),
    csv(),
    createWriteStream(join(__dirname, writePath)),
    options
  );
  ac.abort();
  console.log('Pipeline succeeded.');
}

run().catch(console.error);
