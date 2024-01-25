function solution(s) {
    let arr = s.split(' ').map(v => Number(v));
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return `${min} ${max}`
}