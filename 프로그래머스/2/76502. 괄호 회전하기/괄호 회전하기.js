function solution(s) {
    let answer = 0;
    const extendS = [...s, ...s];
    
    for(let i = 0; i < s.length; i++) {
        const rest = extendS.slice(i, s.length + i);
        answer += validateBrackets(rest) ? 1 : 0;
    }
    
    return answer;
}

function validateBrackets(bracketArr) {
    const stack = [];
    
    bracketArr.forEach((bracket) => {
        if(bracket === ')' && stack[stack.length - 1] === '(') stack.pop();
        else if(bracket === '}' && stack[stack.length - 1] === '{') stack.pop();
        else if(bracket === ']' && stack[stack.length - 1] === '[') stack.pop();
        else stack.push(bracket);
    });
    
    return stack.length === 0; 
}