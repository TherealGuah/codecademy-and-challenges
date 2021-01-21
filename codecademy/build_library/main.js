// Media Class Parent of Book, Movie and CD
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    // getters methods for the properties
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }

    // methods
    getAverageRating() {
        let total = 0;
        // add all the ratings in the array
            this._ratings.forEach( rating => {
            total += rating;
        });
        let average = total / this._ratings.length;
        return average;
    }

    toggleCheckOutStatus() {
        if (this._isCheckedOut === false) {
            this._isCheckedOut = true;
        } else {
            this._isCheckedOut = false;
        }
    }

    addRating(rating) {
        this._ratings.push(rating);
    }
}
/* 
let media1 = new Media('RoboCop');
console.log(media1.title);
console.log(media1.isCheckedOut);
console.log(media1.ratings);
// addRating test
media1.addRating(2.5);
media1.addRating(3.1);
media1.addRating(1.4);
media1.addRating(2.3);
media1.addRating(2.2);
console.log(media1.ratings);
// toggleCheckOutStatus test
media1.toggleCheckOutStatus();
console.log(media1.isCheckedOut);
media1.toggleCheckOutStatus();
console.log(media1.isCheckedOut);
// getAverageRating test
console.log(media1.getAverageRating());
*/