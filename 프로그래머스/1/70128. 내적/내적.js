function solution(a, b) {
    return a.map((val, idx) => val * b[idx])
            .reduce((acc, cur) => acc + cur, 0);
}