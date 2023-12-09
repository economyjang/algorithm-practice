function solution(babbling) {
    let answer = 0;
    let 옹알이 = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach((word) => {
        word = word.replace(/aya|ye|woo|ma/g, '');
        if (word === '') answer++;
    });
    
    return answer;
}