# Reference sheet for properties and getter/methods

## Inheratance Tree

 
<ol>
    <li>Media(Parent)</li>
    <ul>
        <li>Book(child)</li>
        <li>Movie(child)</li>
        <li>CD(child)</li>
    </ul>
</ol>

### Media
...All properties/Getters/Methods to be Inherited by children

    Properties:
        title (string),
        isCheckedOut (boolean, initially false),
        ratings (array, initially empty)

    Getters: all properties have getter

    Methods:
        .getAverageRating(),
        .toggleCheckOutStatus(),
        .addRating()    

### Book
...Unless stated properties/Getters/Methods are Inhereted from Media

    Properties: 
        author (string), // Unique to Book 
        title (string),
        pages (number), // Unique to Book
        isCheckedOut (boolean, initially false),
        ratings (array, initially empty)

    Getters: all properties have a getter

    Methods:
        .getAverageRating(),
        .toggleCheckOutStatus(),
        .addRating() 

### Movie
...Unless stated properties/Getters/Methods are Inhereted from Media

    Properties: 
        director (string), // Unique to Movie
        title (string),
        runTime (number), // Unique to Movie 
        isCheckedOut (boolean, initially false), 
        ratings (array, initially empty)

    Getters: all properties have a getter

    Methods:
        .getAverageRating(),
        .toggleCheckOutStatus(),
        .addRating()
    
### CD
...Unless stated properties/Getters/Methods are Inhereted from Media

    Properties:
        artist (string), // Unique to CD
        title (string),
        isCheckedOut (boolean, initially false),
        ratings (array, initially empty),
        songs (array of strings) // Unique to CD

    Getters: all properties have a getter

    Methods: 
        .getAverageRating(), 
        .toggleCheckOutStatus(),
        .addRating()