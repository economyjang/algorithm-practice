// 이번 달까지 선물을 주고받은 기록으로 다음 달에 누가 선물을 많이 받을지 '예측'
// 두 사람 선물 주고받음 -> 더 많은 선물을 '준' 사람이 선물하나 받기
// 두 사람 선물 안주고 받음 || 주고 받은 수가 같음 -> 선물 지수가 더 큰사람이 받음
// 선물지수 = 준 선물 - 받은 선물
// 선물지수도 같다면 다음 달에 선물 못받음

// 선물을 가장 많이 받을 친구의 선물 수

// 이름이 같은 친구는 없음
// [A B] => A -> B
function solution(friends, gifts) {
    const giveTakeList = Array(friends.length).fill(0).map((_) => Array(friends.length).fill(0));
    
    gifts.forEach((value) => {
        const [giver, taker] = value.split(' ');
        giveTakeList[friends.indexOf(giver)][friends.indexOf(taker)] += 1;
    });
    
    const presentMap = {};
    for(let i = 0; i < giveTakeList.length; i++) {
        let giveCount = 0;
        let takeCount = 0;
        
        for(let j = 0; j < giveTakeList.length; j++) {
            giveCount += giveTakeList[i][j];
            takeCount += giveTakeList[j][i];
        }
        
        presentMap[i] = giveCount - takeCount;
    }
    
    let presentArr = Array(friends.length).fill(0);
    for(let i = 0; i < friends.length; i++) {
        for(let j = i + 1; j < friends.length; j++) {
            if(giveTakeList[i][j] > giveTakeList[j][i]) presentArr[i]++;
            else if(giveTakeList[i][j] < giveTakeList[j][i]) presentArr[j]++;
            else {
                if(presentMap[i] > presentMap[j]) presentArr[i]++;
                else if(presentMap[i] < presentMap[j]) presentArr[j]++;
            }
        }
    }
    
    return Math.max(...presentArr);
}