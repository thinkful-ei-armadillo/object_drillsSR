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


  function createCharacter(name, nickname, race, origin, attack, defense){
    return{
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe: function(){
        console.log(`${this.name} is a ${this.race} from ${this.origin} and uses ${this.equip}.`)
        },
        evaluateFight: function(character){
            if( this.defense > this.attack){
                return `take zero damage`;
            }
            return `Your opponet takes ${this.attack} damage and you receive ${this.defense} damage.`;
        },   
    }
  }


  const character1 = new createCharacter('Gandolf', 'Gandolf', 'wizard', 'Middle Earth', 10, 6);
  console.log(character1);
  
  const character2 = new createCharacter('Bilbo', 'Bilbo', 'hobbit', 'The Shire', 2, 1);


const character3= new createCharacter('Arwen Undomiel', 'Arwen', 'half-elf', 'Rivendell', 1, 9);


const charactersArr = [character1, character2, character3];
console.log(charactersArr);

charactersArr.find(function(arr){
    if( arr.nickname === 'Bilbo' ){
        return arr.describe();
    }
})
const newArray = charactersArr.filter(function(array){
    return array.race === 'hobbit'
    });
console.log(newArray);

createCharacter.prototype.equip= function(...weapon){
    return {weapon};
}

createCharacter.prototype.describe= function(){
    return `${this.name} is from ${this.origin} and uses .`
}

character1.equip = 'sword';
character2.equip = 'rock';
character3.equip = 'water';
console.log(character1);
character1.describe();
console.log(character3);
character3.describe();
console.log(character2);