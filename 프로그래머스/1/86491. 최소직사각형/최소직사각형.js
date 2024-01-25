function solution(sizes) {
    sizes = sizes.map(v => v[0] < v[1] ? v.reverse() : v);
    
    let width = sizes.map(v => v[0]);
    let height = sizes.map(v => v[1]);
    
    let widthMax = Math.max(...width);
    let heightMax = Math.max(...height);
    
    return widthMax * heightMax;
}