function solution(people, limit) {
    let count = 0;
    
    people.sort((a, b) => b - a);
    
    let bigger = 0;
    let smaller = people.length - 1;
    while(bigger <= smaller) {
        if(people[bigger] + people[smaller] <= limit) {
            bigger++;
            smaller--;
            count++;
        } else {
            bigger++;
            count++;
        }
    }
    
    return count;
}