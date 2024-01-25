// 최대공약수, 최소공배수
function solution(n, m) {
    let min = Math.min(n, m);
    let max = Math.max(n ,m);
    
    return [gcd(max, min), lcm(max, min)];
}

function gcd(a, b) {
    // 유클리드 알고리즘을 이용한 최대공약수 계산
    if (a % b === 0) return b;
    return gcd(b, a % b);
}

function lcm(a, b) {
    // 최소공배수 계산
    return a * b / gcd(a, b);
}