// price
// N번째에 N배
// 얼마 모자라는지
// 부족하지 않으면 0
function solution(price, money, count) {
    for(let i = 1; i <= count; i++) {
        money -= (price * i);
    }
    return money >= 0 ? 0 : -money;
}