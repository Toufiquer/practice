let newArray = []
for (let i = 1; i <= 5; i++) {
    newArray[i] = {
        name: 'Name ',
        roll: 44
    }
}

let oldArray = { newArray }
console.log(oldArray, 'test')