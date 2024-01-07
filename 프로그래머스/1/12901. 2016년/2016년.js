function solution(a, b) {
    let monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = b;
    
    for(let i = 0; i < a - 1; i++) {
        totalDays += monthDays[i];
    }
    
    let dayOfWeeks = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    
    return dayOfWeeks[(totalDays - 1) % 7];
}