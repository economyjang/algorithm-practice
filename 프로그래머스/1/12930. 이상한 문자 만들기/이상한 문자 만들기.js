// 짝수 -> 대문자
// 홀수 -> 소문자
function solution(s) {
    return s.split(' ')
            .map(v => v.split('').map((v, i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()).join(''))
            .join(' ');
}