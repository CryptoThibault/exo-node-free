const readLineSync = require('readline-sync')
const { unlinkSync } = require('fs')
unlinkSync(readLineSync.question('Name of file : '))