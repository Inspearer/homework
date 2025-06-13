// console.log (`==================================`)
// function helloUser (userName) {
//   return `hello, ${userName}!`
// }

// console.log(helloUser('Inspearer'))


// console.log (`==================================`)
// let arrayNumbers = [5, 11, 25, 5, 4, 21, 1, 54, 58]

// function numbersFinder(arrayNumbers) {
//   for (let i = 0; i < arrayNumbers.length; i++) {
//     if (arrayNumbers[i] > 10) {
//       console.log(arrayNumbers[i])
//     }
//   }
// }

// numbersFinder(arrayNumbers)
// console.log (`==================================`)

// result = null
// function calculate(firstNumber, desigion, secondNumber) {
//   if (desigion === 'minus') {
//     result = firstNumber - secondNumber
//     return `Your answer is ${result}!` 
//   } if (desigion === 'multiplication') {
//     result = firstNumber * secondNumber
//     return `Your answer is ${result}`
//   } if (desigion === 'to share') {
//     result = firstNumber / secondNumber
//     return result
//   }
// }
// console.log(calculate(8, 'to share', 4))
// console.log (`==================================`)

// const userInformation = {
//   firstName: 'Inspearer',
//   age: 20,
//   weight: 80,
//   greeting(name) {
//     console.log(`Hello, ${name}!`)
//   }
// }

// console.log(userInformation.greeting('Inspearer'))

const usersList = [
  {
    firstName: 'Roberto',
    lastName: 'Petrovich',
    age: 43,
    weight: 94,
    isAdmin: false
  },
  {
    firstName: 'Maks',
    lastName: 'Goncharov',
    age: 25,
    weight: 92,
    isAdmin: false
  },
  {
    firstName: 'Mihail',
    lastName: 'Vrottedam',
    age: 52,
    weight: 52,
    isAdmin: true
  },
  {
    firstName: 'Ya',
    lastName: 'Byoudetei',
    age: 62,
    weight: 78,
    isAdmin: true
  },
  {
    firstName: 'Afanasiy',
    lastName: 'Gnomikov',
    age: 10,
    weight: 61,
    isAdmin: false
  }
]

let commonUsers = 0

for (let i = 0; i < usersList.length; i++) {
  if (usersList[i].isAdmin == false) {
    commonUsers += 1
  }
}

console.log(`Users without admin is ${commonUsers}`)

