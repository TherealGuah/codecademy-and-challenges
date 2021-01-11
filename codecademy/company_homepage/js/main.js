// array to store images to display in loop
let employeeImage = [
    "./resources/images/employees/Michaella.jpg",
    "./resources/images/employees/Sandra.jpg",
    "./resources/images/employees/Tadeusz.jpg",
    "./resources/images/employees/Tamara.jpg",
    "./resources/images/employees/Ricardo.jpg"
];

// array to store figcaptions to match the images
let figCaption = [
    "Michaella is responsible for our reception.",
    "Sandra is also one of our founders.",
    "Tadeusz  is our in-house vet.",
    "Tamara is a volunteer during the week.",
    "Ricardo is  our founder."
];

// image object to target its src attribute
const empImage = document.getElementById('empImg');
const caption = document.getElementById('empCaption');
// var to establish thge index number of the picture to use
let index = 0;
// function that changes the picture to the next in the array
const changePicture = () => {
    empImage.setAttribute("src", employeeImage[index]);
    caption.textContent = figCaption[index];
    index++;
    if (index >= employeeImage.length) {
        index = 0;
    }
}

// function that changes the picture to the previous in the array
/* const changePicturePrevious = () => {
        
        empImage.setAttribute('src', employeeImage[index]);
        index--;
        if (index < 0) {
            index = employeeImage.length - 1;
        }
    }
    
}*/


// Store Previous and Next elements into Variables
const nextElement = document.getElementById('right');
//const previousElement = document.getElementById('left');

// event listeners for both elements
nextElement.addEventListener('click', changePicture);
setInterval(changePicture, 10000);
//previousElement.addEventListener('click',changePicture);