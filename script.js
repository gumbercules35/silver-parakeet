function doubler (num) {

    return num * 2;

}

console.log("Doubler says: " + doubler(2));
console.log("Doubler says: " + doubler(7));
console.log("Doubler says: " + doubler(10));

let factAns = 1;

const fact = (x) => {
    
    if (x === 0) {
        return 1;
    } else return fact(x-1) * factAns;
} 

console.log(fact(3));