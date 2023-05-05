// destructuring de objetos
const person = {
  name: 'Samuel',
  age: 21,
}

const { name, age } = person

console.log('Person: ', name, age) // Person: Samuel 21


const doors = 4
const color = 'red'

const car = {doors, color}

console.log('Car: ', car) // Car: 4 red


// destructuring de arrays

const coords = [100,200]

const [x, y] = coords

console.log('X: ' + x,'Y: ', y)