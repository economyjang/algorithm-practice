// 행렬 덧셈
// 같은 열 같은 행 더한 결과
function solution(arr1, arr2) {
    return arr1.map((val, idxOut) => val.map((val, idxIn) => val + arr2[idxOut][idxIn]));
}