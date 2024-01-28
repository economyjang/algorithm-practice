function solution(n) {
    let bettery = 0;
    
    while(true) {
        if(n % 2 === 0) {
            n /= 2;
        } else if(n % 2 === 1) {
            n -= 1;
            bettery++;
        }
        
        if(n === 0) return bettery;
    }
}