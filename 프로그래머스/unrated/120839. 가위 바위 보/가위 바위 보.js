function solution(rsp) {
    return rsp.split('').map((currentValue) => {
        if(currentValue === '2') return '0'
        else if(currentValue === '0') return '5' 
        else if(currentValue === '5') return '2'
    }).join('');
}