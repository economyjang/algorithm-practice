function solution(name, yearning, photo) {
    const yearningMap = {};
    
    name.forEach((val, idx) => yearningMap[val] = yearning[idx]);
    return photo.map(nameArr => nameArr.reduce((acc, cur) => acc + (yearningMap[cur] || 0), 0));
}