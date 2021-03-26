const readLineSync = require('readline-sync')
const chalk = require('chalk')
const { readFileSync, writeFileSync, existsSync, mkdirSync, rmdirSync, unlinkSync } = require('fs')

const commandList = ['.help', '.editor', '.chat', '.exit']
const commandEditList = ['/cp', '/mkdir', '/rmdir', '/write', '/unlink']
const commandChatList = ['/help', '-b', '-y', '-r', '-g', '-m', '-c', '/exit']
const commandText = [
  '.help: Display the command list.',
  '.editor: Open the editor mode.',
  '.chat: Open the chat mode.',
  '.exit: Close the program.'
]
const commandEditText = [
  '/help: Display the editor command list.',
  '/cp: Copy a file to another',
  '/mkdir: Create a directory',
  '/rmdir: Remove a directory',
  '/write: Write a file',
  '/unlink: Remove a file',
  '/exit: Close the editor mode.'
]
const commandChatText = [
  '/help: Display the chat command list.',
  '-b: Write following text in blue.',
  '-y: Write following text in yellow.',
  '-r: Write following text in red.',
  '-g: Write following text in green.',
  '-m: Write following text in magenta.',
  '-c: Write following text in cyan.',
  '/exit: Close the editor mode.'
]
var editorMode = false
var chatMode = false

console.log('Welcome to myNode.js v1.0\nType ".help" for more information.')

//Main:
while (true) {
  const type = readLineSync.question('> ')
  if (type[0] === '.') { useCommand(type) }
  else { console.log('Not a command, type ".help" for more information.') }
}

//Functions:
function useCommand(command) {
  const tab = command.split(' ')
  switch (tab[0]) {
    case '.help': console.log(commandText.join('\n')); break
    case '.editor': editorMode = true; console.log('You open editor mode, type "/help" for more information.'); break
    case '.chat': chatMode = true; console.log('You open chat mode, you can write what you want.'); break
    case '.exit': console.log('Goodbye from myNode.js.'); process.exit(1)
    default: console.log('Command invalid, type ".help" for more information.')
  }
  while (editorMode) {
    const typeEdit = readLineSync.question('>> ').split(' ')
    switch (typeEdit[0]) {
      case '/help': console.log(commandEditText.join('\n')); break
      case '/cp': cp(typeEdit[1], typeEdit[2], typeEdit.length); break
      case '/mkdir': mkdir(typeEdit[1], typeEdit.length); break
      case '/rmdir': rmdir(typeEdit[1], typeEdit.length); break
      case '/write': write(typeEdit[1], typeEdit[2], typeEdit.length); break
      case '/unlink': unlink(typeEdit[1], typeEdit.length); break
      case '/exit': editorMode = false; console.log('You close editor mode.'); break
      default: console.log('Command invalid, type ".help" for more information.')
    }
  }
  while (chatMode) {
    const typeChat = readLineSync.question('>> ').split(' ')
    switch (typeChat[0]) {
      case '/help': console.log(commandChatText.join('\n')); break
      case '-b': console.log(chalk.blue(typeChat.join(' '))); break
      case '-y': console.log(chalk.yellow(typeChat.join(' '))); break
      case '-r': console.log(chalk.red(typeChat.join(' '))); break
      case '-g': console.log(chalk.green(typeChat.join(' '))); break
      case '-m': console.log(chalk.magenta(typeChat.join(' '))); break
      case '-c': console.log(chalk.cyan(typeChat.join(' '))); break
      case '/exit': chatMode = false; console.log('You close chat mode.'); break
      default: console.log(typeChat)
    }
  }
}

function cp(origin, copy, length) {
  if (length != 3) {
    return console.log('usage: /cp origin copy')
  }
  if (!existsSync(origin)) {
    return console.log('This file don\'t exist')
  }
  const text = readFileSync(origin, 'utf-8')
  writeFileSync(copy, text)
  return console.log(chalk.green('Your file has been copied.'))
}

function mkdir(directory, length) {
  if (length != 2) {
    return console.log('usage: /mkdir directory')
  }
  if (existsSync(directory)) {
    return console.log('This directory already exist')
  }
  mkdirSync(directory)
  return console.log(chalk.green('Your directory has been created.'))
}

function rmdir(directory, length) {
  if (length != 2) {
    return console.log('usage: /rmdir directory')
  }
  if (!existsSync(directory)) {
    return console.log('This directory don\'t exist')
  }
  rmdirSync(directory)
  return console.log(chalk.green('Your directory has been removed.'))
}

function write(file, content, length) {
  if (length != 3) {
    return console.log('usage: /write file content')
  }
  if (existsSync(file)) {
    return console.log('This file already exist')
  }
  writeFileSync(file, content)
  return console.log(chalk.green('Your file has been writed.'))
}

function unlink(file, length) {
  if (length != 2) {
    return console.log('usage: /unlink file')
  }
  if (!existsSync(file)) {
    return console.log('This file don\'t exist')
  }
  unlinkSync(file)
  return console.log(chalk.green('Your file has been removed.'))
}