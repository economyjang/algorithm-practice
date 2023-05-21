function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    var denom = denom1 * denom2;
    var numer = (denom2 * numer1) + (denom1 * numer2);

    var greatestCommonNum = greatest(numer, denom);

    answer.push(numer / greatestCommonNum);
    answer.push(denom / greatestCommonNum);
    
    return answer;
}

function greatest(a, b) {
    if (b === 0) return a;
    return greatest(b, a % b);
}