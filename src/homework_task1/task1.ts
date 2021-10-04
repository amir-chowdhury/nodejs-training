function reverseString (str: string): string {
  if (str === '') {
    return ''
  }
  return str.split('').reverse().join('')
}

/* eslint-disable @typescript-eslint/no-var-requires */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const getInput = (): void => {
  readline.question('Reverse string: ', (entered: string) => {
    if (entered === '') {
      console.log('Nothing entered!')
    } else if (entered === 'exit') {
      return readline.close()
    }
    console.log(reverseString(entered))
    getInput()
  })
}

getInput()
