Array.prototype.bubbleSort = function() {
    let sorted = false;
    while(sorted === false) {
        sorted = true;
        for(let i = 0; i < this.length - 1; i++) {
            if(this[i] > this[i + 1]) {
                let curr = this[i];
                let next = this[i + 1];
                this[i] = next;
                this[i + 1] = curr;
                sorted = false;
            }
        }
    }
    return this;
}

String.prototype.substrings = function() {
    let output = [];
    for(let i = 0; i < this.length; i++) {
        for(let j = i; j < this.length; j++) {
            output.push(this.slice(i, j +1));
        }
    }
    return output;
}