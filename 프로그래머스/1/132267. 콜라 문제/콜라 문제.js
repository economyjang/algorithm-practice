function solution(a, b, n) {
    let total = 0;
    
    while (n >= a) {
        let recycle = Math.floor(n / a) * b;
        total += recycle;
        n = (n % a) + recycle;
    }
    
    return total;
}