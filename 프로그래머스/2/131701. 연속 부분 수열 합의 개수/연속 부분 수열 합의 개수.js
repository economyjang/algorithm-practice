function solution(elements) {
    const answer = [];
    
    const extendElements = [...elements, ...elements];
    
    elements.forEach((element, idx) => {
        for(let i = 0; i < elements.length; i++) {
            const rest = extendElements.slice(i, i + idx + 1);
            answer.push(rest.reduce((acc, cur) => acc + cur, 0));
        }
    });
    
    const newArr = Array.from(new Set(answer));
    return newArr.length; 
}