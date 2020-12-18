let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// 1. array with individual words from story
const storyWords = story.split(' ');


// 2. number of words in storyWords
// console.log(storyWords.length);


// 3. creates a array with the words that are not included in unnecessaryWords from storyWords
const betterWords = storyWords.filter( word => {
  return !unnecessaryWords.includes(word);
});
// console.log(betterWords);
// test
//console.log(betterWords.indexOf('literally')); // should print "-1"


// 4.
// creates array with over used words 
const overusedArray = betterWords.filter(word => { return overusedWords.includes(word)});
// length of the array =  umber of times used
 const timesOverused = overusedArray.length;
// test
// console.log(timesOverused); // should print 9
      

// 5.
let paragraphCounter = 0;

betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    paragraphCounter += 1;
  }
});
// test
// console.log(paragraphCounter);


// 6. function that logs all 3 stats
const log = () => {
  console.log('The story has a total of '+ storyWords.length + ' words!');
  console.log(`There are a total of ${paragraphCounter} paragraphs!`);
  console.log(`The text could be improved! Some words have been over used ${timesOverused} times.`);
};
// log();

// 7. 
const betterStory = betterWords.join(' ');
// test
// console.log(betterStory);

// 8.
// 8.1.
let reallyNumber = 0;
let veryNumber = 0;
let basicallyNumber = 0;
const evenBetterWords = betterWords.map(word => {
  switch(true) {
    case word === 'really' && reallyNumber%2 === 0:
      reallyNumber += 1;
      return word;
      break;
    case word === 'really' && reallyNumber%2 !== 0:
      reallyNumber += 1;
      return 'indeed';
      break;
    case word === 'very' && veryNumber%2 === 0:
      veryNumber += 1;
      return word;
    case word === 'very' && veryNumber%2 !== 0:
      veryNumber += 1;
      return 'vastly';
    case word ==='basically' && basicallyNumber%2 === 0:
      basicallyNumber += 1;
      return word;
    case word === 'basically' && basicallyNumber%2 !== 0:
      basicallyNumber += 1;
      return 'essentially';
    default:
      return word;
      break;
  }
});
//test
// console.log(evenBetterWords);
//let test = evenBetterWords.includes('indeed');
//console.log(test);

// 8.2
// this function doesn't work stand alone as the this. will reference to the windows object. 
function findUnique (word) {
  if (!this.includes(word)) {
    this.push(word);
  }
}
// array to store the unique words
let uniqueWords = [];
// checks uniqueWords for the word from betterWords and if doesn't exist stores in it.

// needs work... altough the data is unique ponctuation needs to be removed before.
betterWords.forEach(findUnique, uniqueWords);

// console.log(uniqueWords);



// 8.3
// 8.3.1 while 'really' exits in betterWords it will do 8.3.2
while(betterWords.indexOf('really') != -1) {
//8.3.2 replaces the word on index where really is with 'OMG'
  betterWords.splice(betterWords.indexOf('really'), 1, 'OMG');

}

while(betterWords.indexOf('very') != -1) {

  betterWords.splice(betterWords.indexOf('very'), 1, 'OMG2');

}

while(betterWords.indexOf('basically') != -1) {

  betterWords.splice(betterWords.indexOf('basically'), 1, 'OMG3');

}
//test
// console.log(betterWords.join(' '));

