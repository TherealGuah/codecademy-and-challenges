const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
    } 
    // getter method
    get field() {
        return this._field;
    }
// to print out
    print() {
        this._field.forEach(x => {
            console.log(x.join(''))
        });   
    }
}

// testing
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  
  //console.log(myField.field);
  //myField.print();

