const fs = require('fs')

const { readFileSync, writeFileSync } = require('fs')
const txt = readFileSync(process.argv[2], 'utf-8')
writeFileSync(process.argv[3], txt)