function solution(order) {
    return String(order).match(/[3*6*9*]/gm)?.length || 0;
}