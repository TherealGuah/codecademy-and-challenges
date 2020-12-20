const groceries = arr => {
   
    let initialString = '';
    let endString = '';
    
    if (arr.length > 2) {
      for (let i = 0; i < arr.length - 2; i++) {
        initialString += `${arr[i].item}, `;
        }
        endString += `${(arr.length-2).item} and ${(arr.length -1).item}`;
      } else if (arr.length === 2) {
        endString+= `${(arr.length-2).item} and ${(arr.length -1).item}`
      } else {
      endString += arr[0].item; 
    }
    
    return initialString + endString;
    
    
  };