// Media Class Parent of Book, Movie and CD
class Media {
    constructor(title, isCheckedOut, ratings) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
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

    }
    toggleCheckOutStatus() {

    }
    addRating() {
        
    }
}