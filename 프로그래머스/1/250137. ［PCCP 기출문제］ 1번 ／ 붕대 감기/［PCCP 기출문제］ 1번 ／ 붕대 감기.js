// t초 동안 붕대 감기 -> 1초마다 x만큼 체력 회복
// t초 연속 성공 -> y만큼 체력 추가
// 최대 체력 존재
// 회복동안 공격 -> 기술 취소
// 기술 취소 -> 붕대 감기 다시시작, 연속 성공 시간 0으로 초기화
// 몬스터 공격 -> 체력 0 이하로 떨어지면 끝
// 남은 체력 리턴
function solution(bandage, health, attacks) {
    const totalTime = attacks[attacks.length - 1][0];
    const [runTime, recoveryPerSecond, extraRecovery] = bandage;
    const attackMap = Object.fromEntries(attacks);
    
    let recoveryCount = 0;
    let maxHealth = health;
    for(let i = 1; i <= totalTime; i++) {
        // 공격시 회복 불가
        if(attackMap[i]) {
            health -= attackMap[i];
            recoveryCount = 0;
            
            if(health <= 0) return -1; // 체력이 0 이하면 죽음
        } else {
            health = (health + recoveryPerSecond) >= maxHealth ? maxHealth : health + recoveryPerSecond;
            recoveryCount += 1;
            
            if(recoveryCount === runTime) {
                health = (health + extraRecovery) >= maxHealth ? maxHealth : health + extraRecovery;
                recoveryCount = 0;
            }
        }
    }
    
    return health;
}