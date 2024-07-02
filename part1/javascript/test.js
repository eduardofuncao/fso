const t = [1,5,6,10]

t.forEach((value,index) => {console.log("O valor da linha " + index + " é "+ value)})

m = t.map(value => value*5)
console.log(m)