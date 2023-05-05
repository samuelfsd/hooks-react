

// explicando melhor o uso da arrow function => 

function soma(a, b) {
    return a + b;
} 

// agora com arrow 
const sum = (a,b) => {return (a+b)}

console.log(soma(5, 5)) // 10
console.log(sum(10,10)) // 20


// retorno implicito

const mult = (a,b) => a * b

console.log(mult(5,5)) // 25

// retorno com um argumento só

const plusOne = a => a + 1

console.log(plusOne(5)) // 6

// retorno implicito com objeto

const getObj = () => ({name: 'José', age: 20})

console.log(getObj()) // { name: 'José', age: 20 }