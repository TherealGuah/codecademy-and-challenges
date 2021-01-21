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

### Book
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