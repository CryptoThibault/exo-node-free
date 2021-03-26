const { unlinkSync, existsSync } = require('fs')
if (process.argv.length != 3) {
  console.log('usage: node unlink file')
  process.exit(1)
}
if (!existsSync(process.argv[2])) {
  console.log('This file don\'t exist')
  process.exit(1)
}
unlinkSync(process.argv[2])