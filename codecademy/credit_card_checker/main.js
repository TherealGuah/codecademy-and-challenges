// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];

const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];

const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

// 3
const validateCred = arr => {
  // newArr holds the SUM of the conditional
  let sum = 0;
  // iterates from the digit before the last backwards
  for (let i = arr.length - 2; i > -1; i--) {
  // console.log(i); // test OK! 

    if (i%2 === 0) {
      // console.log(i + 'index');// - OK
      // console.log(arr[i] + 'index'); // -OK
      let doubleValue = arr[i] * 2;
      if (doubleValue > 9) {
        doubleValue -= 9;
        sum += doubleValue;
         // console.log(doubleValue); // - ok
      } else {
        sum += doubleValue;
        // console.log(doubleValue); - ok
      }
      // console.log(doubleValue);
    } else {
      // console.log(i);  //- OK
      // console.log(arr[i]); //- ok
      sum += arr[i];
      // console.log(arr[i]) - ok
    }   
  };
    // console.log(sum); // - OK
    // checking validity of last digit with (10 - sum%10)
    if (10 - sum%10 === arr[arr.length-1]) {
      return true;
    } else {
      return false;
    }; 
};
// arrays used as reference
// console.log(validateCred(valid1));
// console.log(validateCred(invalid1));


// 4.
const findInvalidCards = arr => {
  let invalidBatch = [];
  arr.forEach( el => {
    if (!validateCred(el)) {
      invalidBatch.push(el);
    }
   });
   return invalidBatch;
  };
// test 
let invalidCards = findInvalidCards(batch);
// console.log(invalidCards);// - OK

// 5 
// arr[i][0]
const idInvalidCardCompanies = arr => {
    let listOfCompanies = [];
    function listIncludes(string) {
      if (listOfCompanies.indexOf(string) === -1) {
        return listOfCompanies.push(string);
      }
    };
  // console.log(arr)
  for (let i = 0;  i < arr.length; i++) {
    // console.log(i);
    // console.log(arr[i][0]);
    switch (true) {
      case arr[i][0] === 3:
        listIncludes('Amex');
        break;
      case arr[i][0] === 4:
        listIncludes('Visa');
        break;
      case arr[i][0] === 5:
        listIncludes('Mastercard');
        break;
      case arr[i][0] === 6:
        listIncludes('Discover');
        break;
      default:
        return 'Company not found'
        break;
    }
  }
  return listOfCompanies;
  
  };
  
  let x = idInvalidCardCompanies(invalidCards);
  console.log(x);
// tested on my cards
let myDebitCard = [4,9,2,1,7,1,7,3,9,7,7,4,8,5,1,3];
let myCreditCard = [5,4,2,1,5,7,3,0,3,3,8,0,6,7,0,9];
 let myInvalid = [myDebitCard,myCreditCard];

console.log(idInvalidCardCompanies(myInvalid));






