function solution(numbers) {
    return Array.from(new Set(getCombination(numbers).sort((a, b) => a - b)));
}

function getCombination(array, selectNum = 2) {
    const result = [];
    
    if(selectNum === 1) return array.map(v => [v]);
    
    array.forEach((fix, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const combinations = getCombination(rest, selectNum - 1);
        combinations.forEach((combination) => {
            result.push(Number(fix) + Number(combination));
        });
    });
    
    return result;
}