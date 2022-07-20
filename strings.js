function ucFirst(strToChange) {
    let changedStr = strToChange[0].toUpperCase() + strToChange.slice(1);
    console.log (changedStr);
    return changedStr;
}
ucFirst("вася"); //== "Вася";

// another solution

function ucFirst1(strToChange1) {
    let changedStr = Array.from(strToChange1);
    console.log(changedStr);
    for (let i = 0; i < changedStr.length; i++) {
        console.log('works for loop');
        if ((changedStr[i - 1] == " ")||(i == 0)) {
            console.log("*** works if");
            changedStr[i] = changedStr[i].toUpperCase();
        }
    
    }
    console.log (changedStr.join(''));
    return changedStr.join('');
}
ucFirst1("вася строка для теста");

/* ****************************************************** */

function checkSpam(strToCheck) {
    let wordCal = /(viagra)|(xxx)/i;
    return wordCal.test(strToCheck);
}
console.log( checkSpam('buy ViAgRA now') ); 

// another solution

function checkSpam1(strToCheck1) {
    if (strToCheck1.toLowerCase().includes('viagra')) return true;
    if (strToCheck1.toLowerCase().includes('xxx')) return true;
    return false;
}
console.log( checkSpam1('innocent rabbit') );

/* ****************************************************** */

function truncate(str, maxlength) {
    // if no need to change str 
    if (str.length <= maxlength) return str;
    //if need to change str
    let changedStr = Array.from(str);
    //console.log (changedStr);
    let strToReturn = '';
    for (let i = 0; i < maxlength-1; i ++){
        strToReturn += changedStr[i];
        //console.log(changedStr[i]);
    }
    strToReturn += "…"
    //console.log(strToReturn);
    return strToReturn;
}
console.log( truncate("Всем привет!", 20));
console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// another solution

function truncate1(str, maxlength) {
    if (str.length <= maxlength) return str;
    let strToReturn = str.slice(0, maxlength-1) + "…";
    //console.log (strToReturn);
    return strToReturn;
}
console.log( truncate1("Всем привет!", 20));
console.log( truncate1("Вот, что мне хотелось бы сказать на эту тему:", 20));

/* ****************************************************** */