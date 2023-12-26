function solution(s, skip, index) {
    let answer = '';
    
    const skipCodeList = skip.split('').map((value) => value.charCodeAt(0));
    answer = s
        .split('')
        .map((value) => value.charCodeAt(0))
        .map((value) => {
            let i = 0;
            while (i < index) {
                value += 1;

                if (value > 'z'.charCodeAt(0)) {
                    value = 'a'.charCodeAt(0);
                }

                if (!skipCodeList.includes(value)) i++;
            }
            return String.fromCharCode(value);
        })
        .join('');
    
    return answer;
}