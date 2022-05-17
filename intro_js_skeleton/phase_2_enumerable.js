Array.prototype.myEach = function(callback) {
    for(let i=0; i<this.length; i++) {
        callback(this[i]);
    }
}

function times_two(x) {
    return x*2;
}

// Array.prototype.myMap = function(callback) {
//     let array = []
//     for(let i=0; i<this.length; i++) {
//         array.push(callback(this[i]));
//     }
//     return array;
// }

Array.prototype.myMap = function(callback) {
    let array = []
    this.myEach( num => array.push(callback(num)));
    return array;
}

Array.prototype.myReduce = function(callback, initialValue=0) {
    let acc = initialValue || 0;
    for(let i=0; i<this.length; i++) {
        acc += callback(this[i])
    }
    return acc
}