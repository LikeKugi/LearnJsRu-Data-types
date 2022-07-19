function Calculator() {

    this.read = function() {
        this.a = +prompt('a = ', 4); 
        this.b = +prompt('b = ', 5); 
        /* need '+prompt' or it will be string */
    },

    this.sum = function() {
        return(this.a + this.b).toFixed(2);
    }

}

let calculator = new Calculator();
calculator.read();
alert('sum = ' + calculator.sum());

/* ***************************************** */

console.log(1.35.toFixed(1));

// 6.35 not equals 6.35 in computer memory. so need to transform

let numToRoud = 6.35;
numToRoud *= 10;
numToRoud = numToRoud.toFixed();
numToRoud = numToRoud / 10;
console.log(numToRoud);

// or

let numToRouding = 6.35;
console.log((numToRouding*10).toFixed()/10);

/* ***************************************** */

function readNumber() {

    this.read = function() {
        this.a = prompt('a = ', 4); 
        this.checkingForValid();
    },

    this.checkingForValid = function() {
        if ((this.a === null) || (this.a === ' ')) {
            return this.number = null;
        }
        if (isFinite(this.a)) {
            console.log (this.number);
            return this.number = +this.a;
        } else this.read();
    }

}

let readingNumber = new readNumber();
readingNumber.read();
alert('number = ' + readingNumber.number);

/* ***************************************** */

let i = 0;
while (i != 10) {
    i += 0.2;
/* 
*   9.999999999999996
*   10.199999999999996 
*/
    console.log (i);
    if (i > 12) break;
}

let j = 0;
while (j != 10) {
    j = +(j + 0.2).toFixed(1);
    console.log(j);
    if (j > 12) break;  // in case of I don't understand what i'm doing
}

let k = 0;
while (k != 10) {
    k += 0.2;
    console.log (typeof k);
    k = Number(k.toFixed(1)); // хз чо за ёбань, но просто j.toFixed(1) не работает
    console.log(k);
    if (k > 12) break; // in case of I don't understand what i'm doing
}

/* ***************************************** */

function random(){
    let min = 1;
    let max = 5;
    let randNumber = min;
    for (let i = 1; i < 20; i++){        
        randNumber = Math.random() * (max - min) + min;
        console.log (`min = ${min}, max = ${max} random = ${randNumber}`);
    }
    return randNumber;
}
console.log(random());

/* ***************************************** */

function randomInteger(){
    let min = 2;
    let max = 10;
    let randNumber = min;
    for (let i = 1; i < 20; i++){        
        randNumber = Math.round(Math.random() * (max - min) + min);
        console.log (`min = ${min}, max = ${max} random = ${randNumber}`);
    }
    return randNumber;
}
console.log(randomInteger());