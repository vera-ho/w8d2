function range(start, end) {
    // base case
    if(end - start === 0){
        return [start];
    }
    let array = range(start, end - 1);
    array.push(end);
    return array;
}

// console.log(range(1, 10));
