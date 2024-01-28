function solution(n, words) {
    let wordsSet = new Set();
    
    for(let i = 0; i < words.length; i++) {
        if(words[i - 1] && words[i - 1][words[i - 1].length - 1] !== words[i][0] 
            || wordsSet.has(words[i])){
            return [(i % n) + 1, Math.ceil((i + 1) / n)];
        } else {
            wordsSet.add(words[i]);
        }
    }
    
    return [0, 0];
}