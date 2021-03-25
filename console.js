const readLineSync = require('readline-sync')
const { readFileSync } = require('fs')
const vm = require('vm')

while (true) {
  const text = readLineSync.question()
  if (text[0] === '/') { doCommand(text) }
  else { console.log(text) }
}


function doCommand(command) {
  const commandList = ['/help', '/cp', '/mkdir', '/rmdir', '/write', '/unlink', '/exit']
  switch (command) {
    case '/help': console.log(`List of all command: ${commandList.join(', ')}`)
      break
    case '/cp': vm.runInThisContext(readFileSync(__dirname + "/cp.js"))
      break
    case '/mkdir': vm.runInThisContext('mkdir.js')
      break
    case '/rmdir': vm.runInThisContext('rmdir.js')
      break
    case '/write': vm.runInThisContext('write.js')
      break
    case '/unlink': vm.runInThisContext('unlink.js')
      break
    case '/exit': process.exit(1)
    default: console.log('Not a valid command, type /help for help')
  }
}
