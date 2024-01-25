function solution(absolutes, signs) {
    return absolutes.map((val, idx) => signs[idx] ? val : -(val))
                    .reduce((acc, cur) => acc + cur, 0);
}