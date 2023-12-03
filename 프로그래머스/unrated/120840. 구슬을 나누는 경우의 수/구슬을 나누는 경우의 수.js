function solution(balls, share) {
    return factorial(balls) / (factorial(balls - share) * factorial(share));
}

function factorial(num) {
    let bigIntNum = 1n;
    
    for (let i = num; i >= 1; i--){
        bigIntNum *= BigInt(i);
    }
    
    return bigIntNum;
}