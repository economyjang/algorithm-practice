function solution(t, p) {
    let answer = 0;
    
    let length = t.length - p.length + 1;
    for(let i = 0; i < length; i++) {
        let subStr = t.slice(i, p.length + i);
        if(Number(subStr) <= Number(p)) answer++;
    }
    
    return answer;
}