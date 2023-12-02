function solution(hp) {
    let answer = 0;
    
    let generalAntPower = 5;
    let soldierAntPower = 3;
    let workingAntPower = 1;
    
    if(hp >= generalAntPower){
        answer += Math.floor(hp / generalAntPower);
        hp = hp - (Math.floor(hp / generalAntPower) * generalAntPower);
    }
    
    if(hp >= soldierAntPower){
        answer += Math.floor(hp / soldierAntPower);
        hp = hp - (Math.floor(hp / soldierAntPower) * soldierAntPower);
    }
    
    if(hp >= workingAntPower){
        answer += Math.floor(hp / workingAntPower);
        hp = hp - (Math.floor(hp / workingAntPower) * workingAntPower);
    }
    
    return answer;
}