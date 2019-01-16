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
    jobTitle: 'Pumber',
    boss: "Sandra"
}
const person2= {
    name: 'Sandra',
    jobTitle: 'Fire fighter',
    boss: "Deb"
}
const person3= {
    name: 'Deb',
    jobTitle: 'Engineer',
}

const personArr =[person1, person2, person3];

for(let i=0; i< personArr.length; i++){
    console.log(`${personArr[i].name}: ${personArr[i].jobTitle}`);
}

//"${title} ${name} reports to ${boss}."

for(let i=0; i< personArr.length; i++){
    if (personArr[i].boss !== undefined) {
        console.log(`${personArr[i].jobTitle} ${personArr[i].name} resports to ${personArr[i].boss}`);
    }  else {
        console.log(`${personArr[i].name} reports to nobody`);
    }
}

const words = 'craft block argon meter bells brown croon droop';
const cipher= {
    a: 2,
    b: 3,
    c: 4,
    d: 5
}
// function decode(str, cipher){
//     switch(str) {
//         case 'a':
//           decodedWords += splitWords[i][cipher.a -1];
//           break;
//         case 'b':
//          decodedWords += splitWords[i][cipher.b -1];
//          break;
//         case 'c':
//          decodedWords += splitWords[i][cipher.c -1];
//          break;
//         case 'd':
//          decodedWords += splitWords[i][cipher.d -1];
//          break;
//         default:
//           decodedWords += ' ';
//       }
// }

 function decodeWords(words, cipher) {
    let decodedWords= '';
    const splitWords = words.split(' ');
    for( let i =0; i < splitWords.length; i++){
        switch(splitWords[i][0]) {
            case 'a':
              decodedWords += splitWords[i][cipher.a -1];
              break;
            case 'b':
             decodedWords += splitWords[i][cipher.b -1];
             break;
            case 'c':
             decodedWords += splitWords[i][cipher.c -1];
             break;
            case 'd':
             decodedWords += splitWords[i][cipher.d -1];
             break;
            default:
              decodedWords += ' ';
          }
    }
    return decodedWords;
}

  console.log(decodeWords(words, cipher));