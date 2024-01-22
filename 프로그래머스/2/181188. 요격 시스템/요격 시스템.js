// 2차원 공간
// (s, e)로 표현되는 폭격 미사일은 s와 e에서 발사하는 요격 미사일로는 요격할 수 없습니다.
// 요격 미사일의 최솟값
function solution(targets) {
    let answer = 0;
    
    targets.sort((a, b) => a[1] - b[1]);
    
    let end = targets[0][1];
    answer++;
    
    targets.forEach((target) => {
        if(end <= target[0]) {
            end = target[1];
            answer++;
        }
    });
    
    return answer;
}