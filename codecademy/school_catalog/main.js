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
school1.quickFacts();
let substitutes = ['Johnny', 'Rachel', 'Marie', 'Anthony', 'Laura', 'Charles'];
console.log(School.pickSubstituteTeacher(substitutes));
*/