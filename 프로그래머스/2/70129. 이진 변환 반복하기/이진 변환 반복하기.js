// 모든 0 제거
// 길이 c => c를 2진법으로
// 1만 남을 때까지
// 0의 개수?
function solution(s) {
    let convertCount = 0;
    let zeroCount = 0;
    
    while(true) {
        zeroCount += s.match(/0/g) ? s.match(/0/g).length : 0;
        s = s.replace(/0/g, '').length.toString(2);
        convertCount++;
        
        if(/^1$/g.test(s)) return [convertCount, zeroCount];;
    }
    
    return [0, 0];
}