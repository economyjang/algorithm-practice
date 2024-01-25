function solution(n) {
    return n % 2 === 0 
            ? Array(n / 2).fill('수박').join('') 
            : Array(Math.floor(n / 2)).fill('수박').join('') + '수';
}