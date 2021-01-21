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

// Book Class

class Book extends Media {
    constructor(author, title,  pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

// Movie class

class Movie extends Media {
    constructor(director ,title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

// CD class

class CD extends Media {
    constructor(artist ,title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
}

/* unit test for CD class
let media4 = new CD('Michael Jackson', 'Thriller', ['Thriller','Bad','Beat it','Black or White']);
 console.log(media4);
 media4.addRating(3.4);
 media4.addRating(4.7);
 media4.addRating(3.2);
 media4.addRating(2);
console.log(media4.ratings);
console.log(media4.getAverageRating());
console.log(media4.artist);
console.log(media4.songs);
*/

/* unit test for Movie class
let media3 = new Movie('Quentin Tarantino', 'O senhor BoBo!', 120);
 console.log(media3);
 media3.addRating(2.33);
 media3.addRating(3.7);
 media3.addRating(5.2);
 media3.addRating(7);
console.log(media3.ratings);
console.log(media3.getAverageRating());
*/

/* unit test for Book class
let media2 = new Book('Herman Jose', 'A minha vida!', 300);
 console.log(media2);
 media2.addRating(2);
 media2.addRating(3.2);
 media2.addRating(5.1);
 media2.addRating(1.2);
console.log(media2.ratings);
console.log(media2.getAverageRating());
*/

/* Unit test for Media
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

/*
let book1 =  new Book('Senrah','100 years from now',235);
let movie1 = new Movie('Albert Ruah','Bien vennu Marie', 125);
let cd1 = new CD('Joseph Joestar','It\'s Show Time', ['Give me baby','O\'Right!!','Hamon Overdrive']);

console.log(book1);
console.log(movie1);
console.log(cd1);
*/


