function solution(array, commands) {
    return commands.map((command) => {
        const [i, j, k] = command;
        
        let tempArr = array.slice(i - 1, j).sort((a, b) => a - b);
        return tempArr[k - 1];
    });
}