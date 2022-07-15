

const numberArray = [1 ,20, 23, 45, 5, 61, 85, 12, 41, 59, 83];
const stringArray = [];

function multiplo(number, mult){
  let valor = number % mult;
   if(valor == 0){
      return true;
    } 
    else return false;
};

function newArray() {
  numberArray.map(element => {
   if(multiplo(element, 3) && multiplo(element, 5)){
      stringArray.push('FizzBuzz');
    }else{
      if(multiplo(element, 3) || (element.toString()).includes('3')){
        stringArray.push('Fizz');
      };
      if(multiplo(element, 5) || (element.toString()).includes('5')){
        stringArray.push('Buzz');
      };
    }
    }
  )
};

newArray();
console.log(stringArray);