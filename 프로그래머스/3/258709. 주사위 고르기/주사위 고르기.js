// n개의 주사위를 가지고 승부
// 각각 n / 2 개의 주사위를 가져감
// 주사위 각 면은 1 ~ 100 의 번호를 가짐
// 주사위에 쓰인 수의 구성은 모두 다름
// 승리할 확률이 가장 높은 주사위 조합 리턴
function solution(dice) {
    // 1. 주사위를 가져가는 조합 구하기
    const combinations = calcNumberOfCases(
        Array(dice.length)
            .fill(0)
            .map((_, idx) => idx + 1)
    );

    let max = 0;
    let comb = [];

    // 2. 각 주사위 조합으로 점수를 합산하기
    for (let i = 0; i < combinations.length; i++) {
        let aArr = [];
        let bArr = [];

        let selectedA = combinations[i].map((v) => dice[v - 1]);
        let selectedB = combinations[combinations.length - 1 - i].map(
            (v) => dice[v - 1]
        );

        // A가 고르는 주사위 조합마다 점수 계산
        calcNumberOfCasesSum(0, selectedA, 0, aArr);
        aArr.sort((a, b) => a - b);

        // B가 고르는 주사위 조합마다 점수 계산
        calcNumberOfCasesSum(0, selectedB, 0, bArr);
        bArr.sort((a, b) => a - b);

        // 3. 점수를 기준으로 A승 계산
        let totalWinCount = toPointer(aArr, bArr);
        if (totalWinCount > max) {
            max = totalWinCount;
            comb = [...combinations[i]];
        }
    }

    // 4. 제일 높은 승수를 가져간 조합 리턴
    console.log(max);
    console.log(comb);
    return comb;
}

function toPointer(arr1, arr2) {
    let pointer1 = 0;
    let pointer2 = 0;
    let count = 0;

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] > arr2[pointer2]) {
            count += arr1.length - pointer1;
            pointer2++;
        } else {
            pointer1++;
        }
    }

    return count;
}


function calcNumberOfCasesSum(index, dices, sum, team) {
    if (index === dices.length) {
        team.push(sum);
        return;
    }

    for (let i = 0; i < 6; i++) {
        calcNumberOfCasesSum(index + 1, dices, sum + dices[index][i], team);
    }
}

function calcNumberOfCases(array) {
    const halfSize = array.length / 2;
    return getCombinations(array, halfSize);
}

function getCombinations(array, selectNumber) {
    const result = [];
    if (selectNumber === 1) return array.map((value) => [value]);

    array.forEach((fixedNum, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [
            fixedNum,
            ...combination,
        ]);
        result.push(...attached);
    });

    return result;
}