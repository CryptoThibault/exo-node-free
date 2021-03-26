const { writeFileSync, existsSync } = require('fs')
if (process.argv.length != 4) {
  console.log('usage: node cp name text')
  process.exit(1)
}
if (existsSync(process.argv[2])) {
  console.log('This file already exist')
  process.exit(1)
}
writeFileSync(process.argv[2], process.argv[3])