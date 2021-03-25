const readLineSync = require('readline-sync')

while (true) {
  const text = readLineSync.question()
  if (text[0] === '/') { doCommand(text) }
  else { console.log(text) }
}


function doCommand(command) {
  const commandList = ['/help', '/exit', '/cp', '/mkdir', '/write',]
  switch (command) {
    case '/help': console.log(`List of all command: ${commandList.join(', ')}`)
      break
    case '/exit': process.exit(1)
    case '/cp': 'node cp.js origin copy'
    case '/mkdir': 'node mkdir.js name'
    case '/write': 'node write.js name content'
    default: console.log('Not a valid command, type /help for help')
  }
}
