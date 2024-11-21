//1
function sum() {
    return [...arguments].reduce((a,b) => a + b, 0)
}

console.log(sum(1,2,3,4,5))
console.log(sum())

//2
function evenNumArray() {
    return [...arguments].filter(el => el % 2 === 0)
}

console.log(evenNumArray(1,2,3,4,5,6,7,8))
console.log(evenNumArray(1,3,5,7,9))
console.log(evenNumArray())


//3
// Выведет undefined. Исправленный код:
const obj = { 
    name: 'Object', 
    getName: function () { 
      return this.name; 
    } 
} 

const getName = obj.getName; 
console.log(getName.call(obj)); 
  
//4
const person = { name: 'Alice'};  

function greet() {
    console.log(`hello, ${this.name}`)
}

greet.call(person)
greet.apply(person)

const bindGreet = greet.bind(person)
bindGreet()

//5
const sumTwoNum = (a,b) => a + b;

console.log(sumTwoNum(1,2))

//6
const doubledArray = arr => arr.map(el => 2 * el);

console.log(doubledArray([1,2,3,4,5]))

//7
const lengthArray = stringArr => stringArr.map(string => string.length);

console.log(lengthArray(["1","21","12345","abcd"]))
