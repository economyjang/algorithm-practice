function solution(want, number, discount) {
    let answer = 0;
    
    const wantMap = {};
    want.forEach((item, idx) => wantMap[item] = number[idx]);
    
    for(let i = 0; i < discount.length; i++) {
        const subArr = discount.slice(i, i + 10);
        
        const subArrMap = {};
        subArr.forEach((item) => subArrMap[item] = subArrMap[item] ? subArrMap[item] + 1 : 1);
        
        if(Object.keys(wantMap).filter((key) => wantMap[key] !== subArrMap[key]).length === 0) answer++;
    }
    
    return answer;
}