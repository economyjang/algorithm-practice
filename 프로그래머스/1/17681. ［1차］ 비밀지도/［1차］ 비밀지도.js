function solution(n, arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < n; i++) {
        let row = arr1[i] | arr2[i];
        
        row = row.toString(2)
                 .padStart(n, 0)
                 .padEnd(n, 0)
                 .replace(/1/g, '#').replace(/0/g, ' ');
        answer.push(row);
    }
    
    return answer;
}