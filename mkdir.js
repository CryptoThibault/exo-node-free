const readLineSync = require('readline-sync')
const { mkdirSync } = require('fs')
mkdirSync(readLineSync.question('Name of directory : '))