const _ = {
    /* .clamp() my solution
    
    clamp(num, lowBound, upperBound) {
        if (num <= lowBound) {
            return lowBound;
        } else if (num >= upperBound) {
            return upperBound;
        } else {
            return num;
        }; 
    },  */  

    // built-in obj method
    
    clamp(num, lowBound, upperBound) {
        const lowerClampedValue = Math.max(num, lowBound);
        const clampedValue = Math.min(lowerClampedValue, upperBound);
        return clampedValue;
    },
    /* .inRange() my solution

    inRange(num, start, end) {
        const startValue = Math.min(start, end);
        const endValue =  Math.max(start, end);
        if (num < startValue || num >= endValue) {
          return false;
        } else {
          return true;
        };
    },   */

    inRange(num, start, end) {
        if (typeof end === 'undefined'){
             end = start;
             start = 0;
        };
        if (start > end) {
            const temp = end;
            end = start;
            start = temp;
        };
          const isInRange = start <= num && num < end;
          return isInRange;
    },

    //11 my solution
    words(string) {
        const words = string.split(' ');
        if (typeof string !== 'string') {
            console.log('Wrong parameter. Please select a string parameter')
        } else {
            return words;
        };
    },
     //15
  pad(string, length) {
    if (string.length >= length) {
      return string;
    };
    const startPadd = Math.floor((length - string.length) / 2);
    const endPadd = length - string.length - startPadd;
    const paddString = ' '.repeat(startPadd) + string + ' '.repeat(endPadd);
    return paddString;
  },

   //19
   has(obj, key) {  
    const hasValue = obj[key] !== undefined;
    return hasValue;
  },
  //23
  invert(object) {
    let invertedObject = {
      };
    
    for (let key in object) {
      let originalValue = object[key];
      invertedObject.originalValue = key;
    };

    return invertedObject;
  },
  //27
  findKey(object, predicate) {
    
    for (let key in object) {
      let value = object[key];
      const predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
        return key;
      };   
    };
    return undefined;
  },
  //31
  drop(arr, number) {
    if (number === undefined) {
      number = 1;
    };
    const slicedArr = arr.slice(number);
    return slicedArr;
  },
  //35
  dropWhile(arr, predicate) {
      
    const dropNumber = arr.findIndex( (element, index) => !predicate(element, index, arr));

    const droppedArray = this.drop(arr, dropNumber);

    return droppedArray;
  },
  //39
  chunk(arr, size) {

    if (size === undefined) {
      size = 1;
    }; // 1 if not defined condition

    const arrayChunks = []; //chunks taken from the array inside loop

    for (let i = 0; i < arr.length; i += size) {
      const arrChunk = arr.slice(i, i + size); // empty array to store chunks cut
      
      arrayChunks.push(arrChunk);// pushing chunk into final array of arrays

    }; // loops through array and pushes chunks into final array


    return arrayChunks; //chunked array returned
  },

};

// Do not write or modify code below this line.
module.exports = _;