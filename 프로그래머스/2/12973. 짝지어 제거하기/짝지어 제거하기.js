// 2개가 만나면 삭제
function solution(s) {
    const stack = [];
    
    s.split('').forEach((val) => {
        if(stack.length === 0 || stack[stack.length - 1] !== val) {
            stack.push(val);
        } else {
            if(stack[stack.length - 1] === val) stack.pop();
        }
    });
    
    return stack.length === 0 ? 1 : 0;
}