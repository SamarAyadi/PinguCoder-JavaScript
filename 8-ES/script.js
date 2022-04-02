//Rest Operator
// const calcul = (a, b, ...numbers) => {

//     console.log(a, b)
//     return numbers.map(number => number * 2)
// };

//  let result = calcul(7, 4, 10, 4, 7, 8, 47)
// console.log(result)

// let [a, b, c, ...d] = result; 

// console.log(a, b, c, d)



//Spread Operator
//let names = ['Basma' ,'Khaoula' ,'Amani', "Hanen",'Khaoula']

// let people = ['kamal', 'aymane', ...names];



//Add new element in array

// people = ['khadija', ...people]
//console.log(people);

// let person = {
//     name: "PinguCoder",
//     age: "10"
// }

// let personClone = {
//     address: 'Tunis',
//     ...person,
// }

// console.log(person, personClone);


// Set
//let names = ['Basma' ,'Khaoula' ,'Amani', "Hanen",'Khaoula']
// let mySet = new Set(names);

// // names.add('Walid');
// // names.add('Basma').add('Kamal');

// // names.add('Latifa')

// mySet.delete('Yasine')
// console.log(mySet.has('Yassine'))
// console.log(mySet.size)
// console.log(mySet)



let person = null


// if(person) {
//     return true
// }else {
//     return false
// }

let result = !!person;

console.log(result)





// Set

let mySet = new Set(names);


// names.add('Coder').add('elearning')
// names.add('Pingu');
// names.add('Pingu');

//mySet.delete('Khaoula')
console.log(mySet.has("Basma"))
console.log(mySet.size)
//mySet.clear()
console.log(mySet)