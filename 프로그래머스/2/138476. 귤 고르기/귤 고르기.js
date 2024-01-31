function solution(k, tangerine) {
    let tangerineMap = new Map();
    tangerine.forEach(val => tangerineMap.has(val) ? tangerineMap.set(val, tangerineMap.get(val) + 1) : tangerineMap.set(val, 1));
    
    let tangerineCountArr = Array.from(tangerineMap.values()).sort((a, b) => b - a);
    let i = 0;
    while(k > 0) {
        k -= tangerineCountArr[i];
        i++;
    }
    
    return i;
}