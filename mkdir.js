const { mkdirSync } = require('fs')

if (process.argv.length != 3) {
  console.log('usage: node mkdir directory')
  process.exit(1)
}
if (!existsSync(process.argv[2])) {
  console.log('This file don\'t exist')
  process.exit(1)
}
mkdirSync(process.argv[2])