//loaf
const loaf={
    flour: 300,
    water: 210,
    hydration: function(){
        return (this.water/ this.flour) *100;
    }
}
console.log(loaf.flour , loaf.water);
console.log(loaf.hydration())

//iterating over an objet prop
const obj = {
    foo: 'asdfd',
    bar: 'bar',
    fum: 'fum',
    quux: 'quux',
    spam: 'spam'
}
function loop (obj){
    for (let key in obj){
        console.log(`${key} = ${obj[key]}`)
    } 
}

loop(obj);

//

const food ={
    meals: ['breakfast', 'second breakfast', 'elevenses', 
    'lunch', 'afternoon tea', 
    'dinner', 'supper']
}

console.log(food.meals[3]);

const person1= {
    name: 'John',
    jobTitle: 'Plumber'

}
const person2= {
    name: 'Sandra',
    jobTitle: 'Fire fighter'

}
const person3= {
    name: 'Deb',
    jobTitle: 'Engineer'
}

const personArr =[person1, person2, person3];

for(let i=0; i< personArr.length; i++){
    console.log(`${personArr[i].name}: ${personArr[i].jobTitle}`);
}