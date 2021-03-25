const readLineSync = require('readline-sync')
const { writeFileSync } = require('fs')
writeFileSync(readLineSync.question('Name of file : '), readLineSync.question('Enter your text : \n'))