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
// asks  user if he wanst to initiate the game y/n and if invalid request input again.
    gameStart() {
        let gameStart = prompt('Hello, welcome to the "Find your Hat" game! Would you like to play? (y/n) ');
        gameStart = String(gameStart);
        if (gameStart === 'n') {
            console.log('Maybe next time! To restart the game please key in "node main.js" in the console. Have a good day!');
        } else if (gameStart === 'y') {
            return this.gameRules();
        } else {
            console.log('Invalid input! Please choose "y" to start the game or "n" leave!');
            this.gameStart();
        }
    }
// game explanation and rules
    // story
    story() {
        console.log('You were casually walking on your way to a dinner party and wind took your hat...You can see where it went my you need to reach for it. There are several Holes in the way and you can\'t  afford to leave the street and get your feet dirty of mud. To navigate to the hat you need to choose where to go! Choose "r"(right), "l"(left), "d"(down) or "u"(up).');
    }
    understood() {
        console.log('Choose "r" to move right, "l" to move left, "d" to move down or "u" to move up. Your starting position is represented by the "*" sign');
        let explanation = prompt('Do you understand the rules? (y/n): ');
            explanation = String(explanation);
            if (explanation === 'n') {
                this.understood();
            } else if(explanation === 'y') {
                return ;
            } else {
                console.log('Invalid input! Please choose "y" to start the game or "n".') 
                this.understood();
            }
    }
    gameRules() {
        this.story();
        let explanation = prompt('Do you understand the rules? (y/n): ');
            explanation = String(explanation);
        if (explanation === 'n') {
            this.understood();
        } else if (explanation === 'y') {
            return ;
        } else {
            console.log('Invalid input! Please choose "y" to start the game or "n".'); 
            this.understood();
        }
    }


// to create a map the user can use aas reference during the game
    print() {
        this._field.forEach(x => {
            console.log(x.join(''))
        });   
    }
// prompt user choice
userChoice() {
    let direction = prompt('Where would you like to move to? ');
    direction = String(direction);
}


}
// considering win/loss condition
let winCondition = false;

// user input and variable to hold the input value

// console.log(direction); // tested




// testing
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  
  //console.log(myField.field);
  //myField.print();
  //myField.userChoice();
  myField.gameStart();

