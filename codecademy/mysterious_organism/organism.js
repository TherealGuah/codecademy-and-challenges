// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    // 4.
    mutate() {
      let newDNA = [];
      let arrA = ['T','C','G'];
      let arrT = ['A','C','G'];
      let arrC = ['A','T','G'];
      let arrG = ['A','T','C'];
       // generates random between 0 and 2
      dna.forEach(dnaBase => { 
        if(dnaBase === 'A') {
          newDNA.push(arrA[Math.floor(Math.random()*3)]);   
        } else if (dnaBase === 'T') {
          newDNA.push(arrT[Math.floor(Math.random()*3)]);
        } else if (dnaBase === 'C') {
          newDNA.push(arrC[Math.floor(Math.random()*3)]);
        } else {
          newDNA.push(arrG[Math.floor(Math.random()*3)]);
        }
      });
    return this.dna = newDNA;
    },
// 5. 
    compareDNA(obj) {
      let isEqual = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === obj.dna[i]) {
          isEqual += 1;
        }
      }
      let percentage = Math.floor(isEqual / 15 * 100);

    return `specimen ${this.specimenNum} and specimen ${obj.specimenNum} have ${percentage}% DNA in common`
    },
// 6.
    willLikelySurvive() {
      let dnaCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
        dnaCount += 1;
        }
      }
      let percentage = dnaCount / 15 * 100;
      if (percentage >= 60) {
        return true;
      } else {
        return false;
      };
    },
  };
};

// 7.
//stores all the true cases 
let survivors = [];
// iteration until survivors has 30 true cases
let i = 0;
while (survivors.length <= 30) {
  // creates a temporary sample to test if true or false
  let test = pAequorFactory(i, mockUpStrand()); 
  if (test.willLikelySurvive() === true) {
    survivors.push(test); 
  }
  i += 1;
}






// Test section
// let x = mockUpStrand();
// let y = mockUpStrand(); 
// const pAequor1 = pAequorFactory(11, x);
// const pAequor2 = pAequorFactory(22, y);
// console.log(pAequor1.dna);
// pAequor1.mutate();
//console.log(pAequor2.dna);
//console.log(pAequor1.compareDNA(pAequor2));
// console.log(pAequor1.willLikelySurvive());


// console.log(survivors);