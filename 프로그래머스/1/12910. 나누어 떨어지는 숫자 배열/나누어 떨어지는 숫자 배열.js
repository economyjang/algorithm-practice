function solution(arr, divisor) {
    let divisorArr = arr.filter((val) => val % divisor === 0).sort((a, b) => a - b);
    
    return divisorArr.length > 0 ? divisorArr : [-1];
}