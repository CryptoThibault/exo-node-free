const readLineSync = require('readline-sync')
const commandList = ['.help', '.exit']

console.log('Welcome to myNode.js v1.0\nType ".help" for more information.')

while (true) {
  const type = readLineSync.question('>')
  if (type[0] === '.') { useCommand(type) }
  else { console.log('Not a command, type ".help" for more information. ') }
}

function useCommand(command) {
  const tab = command.split(' ')
  if (commandList.includes(tab[0]))
    switch (tab[0]) {
      case '.help': console.log(commandList.join(', ')); break
      case '.exit': process.exit(1)
    }
}