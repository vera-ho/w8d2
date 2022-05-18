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

function sumRecc(arr) {
    if(arr.length === 1) {
        return arr[0];
    }
    if(arr.length ===0) {
        return 0;
    }
    let sum = arr[0] + sumRecc(arr.slice(1,arr.length))
    return sum;
}

function exponent_version1(base, exp) {
    return (base**(exp))
}
function exponent_version2(base, exp) {
    if (exp ===1) {
        return base;
    }
    if (exp===0) {
        return 1;
    }
    let result = 0
    if (exp%2===0) {
        return base**(exp/2)**2;
    }
    else{
        result = base*(exponent_version2(base, (exp-1)/2)**2);
        return result;
    }
}

function fibonacci(n) {
    if (n===1) {
        return [1];
    }
    if (n===2) {
        return [1,1];
    }
    let prev = fibonacci(n-1)
    prev.push(prev[prev.length-1] + prev[prev.length-2] )
    return prev;
}


function deepDup(arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    let dup = []
    arr.forEach(ele => {
        dup.push(deepDup(ele))
    }

    )
    return dup
}

function bsearch(arr, target){
    // return -1 if not found
    if(arr.length === 0 || (arr.length === 1 && arr[0] != target)) {
        return -1;
    }

    let mid = Math.floor(arr.length / 2);
    if(arr[mid] === target) {
        return mid;
    } else if(arr[mid] > target) { // search lower half
        let idx = bsearch(arr.slice(0, mid), target);
        return idx;
    } else { // arr[mid] < target
        let idx = bsearch(arr.slice(mid + 1), target);
        return idx === -1 ? -1 : (idx + 1 + mid);
    }
}