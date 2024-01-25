// 짝수 -> 나누기 2
// 홀수 -> 곱하기 3 더하기 1
// 1이 될때까지 반복
function solution(num) {
    if(num === 1) return 0;
    
    let loopCount = 0;
    while(num > 1) {
        if(num % 2 === 0) {
            num /= 2;
        } else if(num % 2 === 1) {
            num = num * 3 + 1;
        }
        
        loopCount++;
        
        if(loopCount === 500) return -1;
        if(num === 1) return loopCount;
    }
}