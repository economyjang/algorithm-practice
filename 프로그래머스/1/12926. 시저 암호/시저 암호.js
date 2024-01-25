function solution(s, n) {
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    return s.split('').map(v => {
        if(lowerCase.includes(v)) {
            let idx = lowerCase.indexOf(v) + n;
            return lowerCase[idx % lowerCase.length];
        } else if(upperCase.includes(v)) {
            let idx = upperCase.indexOf(v) + n;
            return upperCase[idx % lowerCase.length];
        } else {
            return v;
        }
    }).join('');
}