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

