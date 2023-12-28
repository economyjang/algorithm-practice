function solution(ingredient) {
    let answer = 0;
    let stack = [];

    ingredient.forEach((element) => {
        stack.push(element);

        if(stack.slice(-4).join('') === '1231'){
            answer++;
            stack.splice(-4);
        }
    })
    
    return answer;
}