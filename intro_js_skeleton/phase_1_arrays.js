// save only once instance of each value
Array.prototype.uniq = function() {
    let output = [];
    const check = function(element) {
        if(!output.includes(element)) {
            output.push(element);
        }
    }
    this.forEach(element => check(element) );
    // console.log(this);
    return output;
}

// save indexes
Array.prototype.twoSum = function() {
    let pairs = [];
    for(let i = 0; i < this.length; i++) {
        for(let j = i; j < this.length; j++) {
            if(this[i] + this[j] === 0) {
                pairs.push([i, j]);
            }
        }
    }
    return pairs;
}

// transpose 2D array
Array.prototype.transpose = function() {
    let outer = [];

    for(let i = 0; i < this.length; i++) {
        let inner = [];
        for(let j = 0; j < this[0].length; j++) {
            inner.push(this[j][i]);
        }
        outer.push(inner);
    }
    return outer;
}