// School class
class School {
// properties
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
// getter/setter
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return  this._numberOfStudents;
    }

    set newName(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            console.log('New name needs to be in a string format.');
        };
    }
    set newLevel(newLevel) {
        switch(newLevel) {
            case 'primary':
                this._level = newLevel;    
                break;
            case 'middle':
                this._level = newLevel;
                break;
            case 'high':
                this._level = newLevel;
                break;
            default:
                console.log('Invalid option! Choose one from "primary","middle" or "high".');
                break;
        }
    }
    set newNumberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            this._numberOfStudents = newNumberOfStudents;
        } else {
            console.log('New number of students needs to be a number.');
        }; 
    }
// Methods
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
       let i =  Math.floor(Math.random() * (substituteTeachers.length -1))
        return substituteTeachers[i];
    }
}
/* Unit test for School class
let school1 = new School('Horacio Bento Gouveia', 'middle', 600);
console.log(school1);
school1.newName = 1;
school1.newName = 'Jupiter';
console.log(school1.name);
school1.newLevel = 'University';
school1.newLevel = 'high';
console.log(school1.level);
school1.newNumberOfStudents = 700;
console.log(school1.numberOfStudents);
school1.quickFacts();
let substitutes = ['Johnny', 'Rachel', 'Marie', 'Anthony', 'Laura', 'Charles'];
console.log(School.pickSubstituteTeacher(substitutes));
*/

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;  
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
    set newPickupPolicy(newPickupPolicy) {
        if (typeof newPickupPolicy === 'string') {
            this._pickupPolicy = newPickupPolicy;
        } else {
            console.log('Invalid choice! Pickup Policy must be a string!');
        }
    }
}

/* Unit test for PrimarySchool class
let primary1 = new PrimarySchool('Joao Dinis', 50, 'Parents should pre-determine time of pick up and students to await in the classroom doing their homework');
console.log(primary1);
primary1.newName = 1;
primary1.newName = 'Jupiter';
console.log(primary1.name);
primary1.newLevel = 'University';
primary1.newLevel = 'high';
console.log(primary1.level);
primary1.newNumberOfStudents = 700;
console.log(primary1.numberOfStudents);
primary1.quickFacts();
primary1.newPickupPolicy = 'Take them at any time!';
console.log(primary1.pickupPolicy); 
*/

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents)
    }
}
/* unit test for MiddleSchool
let middle1 = new MiddleSchool('Band Camp', 100);
console.log(middle1);
middle1.newName = 1;
middle1.newName = 'Mars Middle School';
console.log(middle1.name);
middle1.newLevel = 'University';
middle1.newLevel = 'high';
console.log(middle1.level);
middle1.newNumberOfStudents = 200;
console.log(middle1.numberOfStudents);
middle1.quickFacts();
*/

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents)
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
    set newSportsTeams(newSportsTeams) {
        if (Array.isArray(newSportsTeams)) {
            this._sportsTeams = newSportsTeams;
        } else {
            console.log('The new Sports Teams list must be presented in a Array format.');
        }
    }
}
/*
let high1 = new HighSchool('Hero Academia', 3000, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(high1);
high1.newName = 1;
high1.newName = 'HiddenLeaf Village High';
console.log(high1.name);
high1.newLevel = 'University';
high1.newLevel = 'middle';
console.log(high1.level);
high1.newNumberOfStudents = 4000;
console.log(high1.numberOfStudents);
high1.quickFacts();
high1.newSportsTeams = 'Super duper TEam';
high1.newSportsTeams = ['FootBall', 'WarHammer 40k', 'Chess'];
console.log(high1.sportsTeams);
*/