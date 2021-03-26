const readLineSync = require('readline-sync')
const chalk = require('chalk')
const commandList = ['/help', '/cp', '/mkdir', '/rmdir', '/write', '/unlink', '/exit']

Chat()

function Chat() {
  while (true) {
    const chat = readLineSync.question()
    const tab = chat.split(' ')
    if (commandList.includes(tab[0])) {
      switch (chat) {
        case '/help': console.log(commandList.join(', '))
          break
        case '/cp': cp(tab[1], tab[2])
          break
        case '/mkdir': '/mkdir.js'
        case '/exit': process.exit(1)
      }
    } else { console.log(chalk.cyan(chat)) }
  }
}

function cp(copytxt, pastetxt) {
  const { readFileSync, writeFileSync } = require('fs')
  const text = readFileSync(copytxt, 'utf-8')
  writeFileSync(pastetxt, text)
}