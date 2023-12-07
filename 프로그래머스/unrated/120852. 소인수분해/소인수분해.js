function solution(n) {
    let answer = [];
    
    for(let i = 0; i <= n; i++){
        if(isPrimeNum(i)){
            while(true){
                if(n % i === 0) {
                    n /= i;
                    answer.push(i);
                } else {
                    break;
                }
            }
        }
    }
    
    return Array.from(new Set(answer));
}

function isPrimeNum(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};