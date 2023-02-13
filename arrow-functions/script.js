let double = arr => {
    arr.map(val => val * 2)
}

let squareAndFindEvens = numbers => {
    var squares = numbers.map(num => num ** 2);
    var evens = squares.filter(square => square % 2 === 0);
    return evens;
}
// Solution Correction 
const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)