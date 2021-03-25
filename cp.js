const readLineSync = require('readline-sync')
const { readFileSync, writeFileSync } = require('fs')
const text = readFileSync(readLineSync.question('Where copy ? '), 'utf-8')
writeFileSync(readLineSync.question('Where paste ? '), text)