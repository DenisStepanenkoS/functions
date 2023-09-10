function isWorkingAgePerson(age){
    return ((age > 16) && (age<65))? true : false;
}

function isPrimeNumber(number){
    for(let i = 2; i < number; i++){
        if((number % i) === 0){
            return true;
        }
    }
    return false;
}

function checkMultiplicity(number1, number2){
    return !(number1 % number2);
}
/**
 * 
 * @param {int} a side a
 * @param {int} b side b
 * @param {int} c side c
 * @returns {boolean} can be or no
 */
let checkBeTriangle = function (a, b, c){
    if(((a+b) <= c)||((a+c) <= b) || (((b+c) <= a))){
        return false;
    }
    return true;
}
/**
 * 
 * @param {int} a 
 * @param {int} b 
 */
let calcS = function (a, b){
    return a*b;
}