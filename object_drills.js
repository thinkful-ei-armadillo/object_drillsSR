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