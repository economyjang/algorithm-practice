function solution(s) {
    let answer = [];
    
    let charMap = new Map();
    
    for(let i = 0; i < s.length; i++) {
        if(charMap.has(s[i])){
            let idx = charMap.get(s[i]);
            
            answer.push(i - idx);
            charMap.set(s[i], i);
        } else {
            charMap.set(s[i], i);
            answer.push(-1);
        }
    }
    
    return answer;
}