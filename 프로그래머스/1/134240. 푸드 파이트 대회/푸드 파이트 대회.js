function solution(food) {
    let foodOrder = '';
    for(let i = 1; i < food.length; i++) {
        foodOrder += i.toString().repeat(Math.floor(food[i] / 2));
    }
    
    return foodOrder + '0' + foodOrder.split('').reverse().join('');
}