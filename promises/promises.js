const getPromise = require('./get');

//getPromise('./animals.txt').then(value => console.log(value))

Promise.all([
    getPromise('./animals.txt'),
    getPromise('./people.txt')
]).then(value => {
    const animals = value[0]
    const people = value[1]
    console.log(animals, people)
})


