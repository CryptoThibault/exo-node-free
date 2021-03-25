const readLineSync = require('readline-sync')
const { rmdirSync } = require('fs')
rmdirSync(readLineSync.question('Name of directory : '))