const { readFileSync, writeFileSync, existsSync } = require('fs')

if (process.argv.length != 4) {
  console.log('usage: node cp origin copy')
  process.exit(1)
}
if (!existsSync(process.argv[2])) {
  console.log('This file don\'t exist')
  process.exit(1)
}

const text = readFileSync(process.argv[2], 'utf-8')
writeFileSync(process.argv[3], text)