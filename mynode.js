const readLineSync = require('readline-sync')
const commandList = ['.help', '.editor', '.exit']
const commandEditList = ['/cp', '/mkdir', '/rmdir', '/write', '/unlink']
const commandText = [
  '.help: Display the command list.',
  '.editor: Open the editor mode.',
  '.exit: Close the program.'
]
const commandEditText = [
  '/cp: Copy a file to another',
  '/mkdir: Create a directory',
  '/rmdir: Remove a directory',
  '/write: Write a file',
  '/unlink: Remove a file'
]
var editorMode = false

console.log('Welcome to myNode.js v1.0\nType ".help" for more information.')

while (true) {
  const type = readLineSync.question('> ')
  if (type[0] === '.') { useCommand(type) }
  else { console.log('Not a command, type ".help" for more information.') }
}

function useCommand(command) {
  const tab = command.split(' ')
  switch (tab[0]) {
    case '.help': console.log(commandText.join('\n')); break
    case '.editor': editorMode = true; console.log('You open editor mode, type "/help" for more information.'); break
    case '.exit': process.exit(1)
    default: console.log('Command invalid, type ".help" for more information.')
  }
  while (editorMode) {
    const typeEdit = readLineSync.question('>> ').split(' ')
    switch (typeEdit[0]) {
      case '/help': console.log(commandEditText.join('\n')); break
      case '/cp':
      case '/mkdir':
      case '/rmdir':
      case '/write':
      case '/unlink':
      case '/exit': editorMode = false; console.log('You close editor mode.'); break
      default: console.log('Command invalid, type ".help" for more information.')
    }
  }
}
