const { rmdirSync } = require('fs')

if (process.argv.length != 3) {
  console.log('usage: node rmdir file')
  process.exit(1)
}
if (!existsSync(process.argv[2])) {
  console.log('This file don\'t exist')
  process.exit(1)
}
rmdirSync(process.argv[2])