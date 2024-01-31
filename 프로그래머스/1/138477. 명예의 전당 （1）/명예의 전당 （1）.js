// 최하위 점수
function solution(k, score) {
    let topScores = [];
    
    return score.map((val) => {
        if(topScores.length < k) {
            topScores.push(val);
            topScores.sort((a, b) => b - a);
            return topScores[topScores.length - 1];
        } else {
            topScores.push(val);
            topScores.sort((a, b) => b - a);
            topScores.pop();
            return topScores[topScores.length - 1];
        }
    })
}