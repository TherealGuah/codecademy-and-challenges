const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
        this._currLoc = [0,0];
        this._rows = field.length;
        this._columns = field[0].length;
        this._move = '';
        this._inGame = true;
        this._victoryMessage = "Congrats You got your Hat Back!!";
    } 
    // getter method
    get field() {
        return this._field;
    }

    // to create a map the user can use aas reference during the game
    print() {
        this._field.forEach(x => {
            console.log(x.join(''))
        });   
    }
    
    // prompt user choice and validates it
    prompUser() {
        // requests user input
        let dir = prompt('Where would you like to move to? ');
        
        //validation
        switch (dir) {
            case 'r':
                dir = String(dir);
                break;
                case 'l':
                    dir = String(dir);
                    break;
                case 'l':
                    dir = String(dir);
                    break;
                case 'd':
                    dir = String(dir);
                    break;
                case 'u':
                    dir = String(dir);
                    break;
                default:
                    console.log('Chose either "u" for up, "d" for down, "r" for right or "l" for left.');
                    this.prompUser();
                    break;               
        }

        // updating user location
        this._move = dir;   
    }

    // checking if the move is valid
    validMove() {
        if (this._move === 'r' && this._currLoc[1] === (this._columns-1)) {
            return false;
        } else if (this._move === 'l' && this._currLoc[1] === 0) {
            return false;
        } else if (this._move === 'd' && this._currLoc[0] === (this._rows-1)) {
            return false;
        } else if (this._move === 'u' && this._currLoc[0] === 0) {
            return false;
        } else {
            return true;
        } 
    }

    //moving the position
    move() {
        switch (true) {
            case this._move === 'r' && this.validMove() === true:
                this._currLoc[1]++;
                return true;
            case this._move === 'l' && this.validMove() === true:
                this._currLoc[1]--;
                return true;
            case this._move === 'd' && this.validMove() === true:
                this._currLoc[0]++;
                return true;
            case this._move === 'u' && this.validMove() === true:
                this._currLoc[0]--;
                return true;
            default:
                return false;
        }
    }
    
    // asks  user if he wanst to initiate the game y/n and if invalid request input again.
    gameStart() {
        const instructions = '\nNavigate to the hat symbol "^" to win using they keys r(right), l(left), u(up) or d(down).\nAvoid falling down to hole or moving out of the playing field.\nYour position is marked by the "*".'
        console.log(instructions)
        let answer = prompt('\nDo you want to play ? Type y(yes) or n(no): ')
        if (answer === 'y') {
            return true
        } else if (answer === 'n') {
            console.log('Maybe later! if you would like to try again type "node main.js" in the console. Bye!')
            return false;
        } else { console.log('Type y or n')}
    }

    // initiating game with map for user reference and prompting input
    playGame() {
        if (this.gameStart() === false) {
            this._inGame = false;
        }
        while (this._inGame === true) {
            console.log('\n');
            this.print();
            this._move = prompt('Where would you like to move to? ');
            if (this.move()) {
                const fieldPosition = this._field[this._currLoc[0]][this._currLoc[1]];
                if (fieldPosition === 'O') {
                    console.log('Sorry you fell down a hole');
                    break;
                } else if (fieldPosition === '^') {
                    console.log(this._victoryMessage);
                    break;
                } else {
                    this.field[this._currLoc[0]][this._currLoc[1]] = '*';
                    this._inGame = true;
                }
            } else {
                console.log('Out of bounds move. You lose');
                break
            }
        }
    }

    // field generator
    static generateField(height,width,percentage) {
        let field = new Array(height).fill(0).map(element => new Array(width));
        for (let i=0; i < field.length; i++) {
            for (let j=0; j < field[i].length; j++) {
            field[i][j] = fieldCharacter;
            }
        }
        const fieldSize = height*width;
        const numOfHoles = Math.floor(fieldSize*(percentage/100));
        let countHoles = 0;
        while (countHoles <= numOfHoles) {
          const randomRow = Math.floor(Math.random()*height);
          const randomColumn = Math.floor(Math.random()*width);
          if (field[randomRow][randomColumn] === '░') {
            field[randomRow][randomColumn] = 'O';
            countHoles++;
          }

        }
        field[Math.floor(Math.random()*height)][Math.floor(Math.random()*width)] = '^';
        field[0][0] = pathCharacter;
        return field;
    }
    
}


// testing
let x = Field.generateField(10,10,20);

let myField = new Field(x);

  

myField.playGame();

