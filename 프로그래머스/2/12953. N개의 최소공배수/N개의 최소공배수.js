function solution(arr) {
    let lcmNum = arr[0];
    for(let i = 1; i < arr.length; i++) {
        lcmNum = lcm(lcmNum, arr[i]);
    }
    
    return lcmNum;
}

function gcb(a, b) {
    if(a % b === 0) return b;
    return gcb(b, a % b);
}

function lcm(a, b) {
    return a * b / gcb(a, b);
}