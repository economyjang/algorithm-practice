function solution(s) {
    const stack = [];
    
    s.split('').forEach((val, idx) => {
        if(val === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else {
            stack.push(val);
        }
    })
    
    return stack.length > 0 ? false : true;
}