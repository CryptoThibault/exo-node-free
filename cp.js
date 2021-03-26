const { readFileSync, writeFileSync } = require('fs')
const text = readFileSync(process.argv[2], 'utf-8')
writeFileSync(process.argv[3], text)