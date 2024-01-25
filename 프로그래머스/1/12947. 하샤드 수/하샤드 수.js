// 하샤드 수 => 자릿수의 합으로 나눠져야 함.
function solution(x) {
    return x % x.toString().split('').reduce((acc, cur) => acc + Number(cur), 0) === 0 ? true : false;
}