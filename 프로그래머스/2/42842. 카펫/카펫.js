// 카펫의 가로, 세로 크기 순서 배열 리턴
function solution(brown, yellow) {
    let answer = [];
    
    // 가로 길이 + 2
    // 세로 길이 + 2
    
    let yellowDivisor = [];
    for(let i = 1; i <= Math.floor(Math.sqrt(yellow)); i++) {
        if(yellow % i === 0) {
            yellowDivisor.push([yellow / i, i]);
        }
    }
    
    // (가로 길이 + 2) * 2 + 세로 길이 * 2 = brown
    yellowDivisor.forEach((val) => {
        const [row, col] = val;
        
        let calcRow = (row + 2) * 2;
        let calcCol = col * 2;
        
        if(calcRow + calcCol === brown) {
            answer.push(row + 2);
            answer.push(col + 2);
            return;
        }
    });
    
    return answer;
}