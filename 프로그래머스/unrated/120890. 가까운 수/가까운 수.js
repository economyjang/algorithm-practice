function solution(array, n) {
    array.sort((a, b) => a - b);
    const arr = array.map(num => Math.abs(n - num));
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);
    
    return array[idx];
}