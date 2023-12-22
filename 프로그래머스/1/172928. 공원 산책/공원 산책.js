function solution(park, routes) {
    // height, width
    let answer = [0, 0];
    
    const ops = {
        "E" : [0, 1],
        "W" : [0, -1],
        "N" : [-1, 0],
        "S" : [1, 0]
    }
    const maxHeight = park.length - 1;
    const maxWidth = park[0].length - 1;
    
    // 시작지점 찾기
    park.forEach((route, index) => {
        if (route.includes('S')) {
            // height
            answer[0] = index;
            // width
            answer[1] = route.indexOf('S');
        }
    });
    
    // routes 를 순회하면서 좌표 이동
    routes.forEach((route) => {
        const [op, n] = route.split(' ');

        let newHeight = answer[0];
        let newWidth = answer[1];

        for(let i = 0; i < n; i++){
            newHeight += ops[op][0];
            newWidth += ops[op][1];

            // 맵 밖으로 나갔는지 검증
            if (newHeight > maxHeight || newWidth > maxWidth) return;
            if (newHeight < 0 || newWidth < 0) return;
            // 장애물이 있는지 검증
            if(park[newHeight][newWidth] === 'X') return;
        }

        answer = [newHeight, newWidth];
    });
    
    return answer;
}