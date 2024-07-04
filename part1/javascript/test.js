const t = [1,5,6,10]

t.forEach((value,index) => {console.log("O valor da linha " + index + " é "+ value)})

m = t.map(value => value*5)
console.log(m)



props = {name: 'John', age:15}

const {name, age} = props

console.log(name, age)