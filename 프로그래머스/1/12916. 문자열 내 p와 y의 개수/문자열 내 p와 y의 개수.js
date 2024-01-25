// 개수를 비교할 때 대문자와 소문자는 구별하지 않음
function solution(s) {
    let yLeng = s.match(/y|Y/g)?.length;
    let pLeng = s.match(/p|P/g)?.length;
    
    if(!yLeng && !pLeng) return true;
    
    if(yLeng && pLeng && yLeng === pLeng) {
        return true;
    } else {
        return false;
    }
}