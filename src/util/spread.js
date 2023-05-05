// spread operator 

const person = {
  name: 'Samuel',
  surname: 'samuelfsd',
  age: 21,
}
//para o JS, a variável person aponta para o primeiro espaço de memória,
// onde o objeto foi criado.

console.log('person'+ person)
const personUpdated = {
  ...person,
  age: 23,
}

const personWithBirthYear = {
  ...person,
  birthYear: 1984,
}

console.log('person: after updated '+ personUpdated)
console.log('person: '+ person)
console.log('person: with birth year' + personWithBirthYear)


// Spread de arrays 
const arr = [10,22,33]

const arrToMultiply = [...arr, 2]

console.log('arr: '+ arr) // [10,22,33]
console.log('arrToMultiply: '+ arrToMultiply) // [10,22,33,2]

// Spread de strings

const str = 'faz o L'
const arrSrt = [...str] 
console.log('str: '+ str) // faz o L
console.log('arrSrt: '+ arrSrt) // [f,a,z, ,o, ,L]

// utilização com destructuring assignment
// pegando todas as props e passandopara um novo obj newPerson 
const { age,...newPerson} = personWithBirthYear  

console.log(newPerson) // { name: 'Samuel', surname: 'samuelfsd', birthYear: 1984 }

//rest syntax em funções 
function sum(...args){
  //pego todos os argumentos e faço um MAP multiplicando cada um por 2
  return args.map((item) => item * 2)
}

console.log('sum: ', sum(10,20,30,40,50))// [20,40,60,80,100]