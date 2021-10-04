import { pipeline } from 'stream/promises'
import { createReadStream, createWriteStream } from 'fs'
import { resolve } from 'path'
import csv from 'csvtojson'

const filePath = './src/homework_task1/csv/test.csv'
const writePath = './src/homework_task1/converted-csv-to-json.txt'

async function run () {
  const ac = new AbortController()
  const options = {
    signal: ac.signal,
  }

  await pipeline(
    createReadStream(resolve(filePath)),
    csv(),
    createWriteStream(resolve(writePath)),
    options,
  )
  ac.abort()
  console.log('Pipeline succeeded.')
}

run().catch(console.error)
