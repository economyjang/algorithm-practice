function solution(n) {
    let result = fibo(n);
    return result;
}

function fibo(n) {
    if(n === 2) return 1;
    
    let dp = Array(n).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567 ;
    }
    
    return dp[n];
}