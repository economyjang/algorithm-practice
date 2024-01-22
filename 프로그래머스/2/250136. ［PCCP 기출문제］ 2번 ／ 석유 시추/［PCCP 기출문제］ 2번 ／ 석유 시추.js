function solution(land) {
    let n = land.length // 세로길이
    let m = land[0].length // 가로길이
    
    let visited = land;
    let oilLocMap = {};
    
    let i = 1;
    for(let col = 0; col < m; col++) {
        for(let row = 0; row < n; row++) {
            if(visited[row][col] === 1) {
                oilLocMap[`oil${i}`] = bfs(visited, col, row, n, m, `oil${i}`);
                i++;
            }
        }
    }
    
    let oilLocCountArr = Array(m).fill(0);
    for(let col = 0; col < m; col++) {
        let oilLocSet = new Set();
        for(let row = 0; row < n; row++) {
            if(visited[row][col] !== 0){
                oilLocSet.add(visited[row][col]);
            }
        }
        
        for(const oilLoc of oilLocSet) {
            oilLocCountArr[col] += oilLocMap[oilLoc];
        }
    }
    
    return Math.max(...oilLocCountArr);
}

function bfs(visited, col, row, n, m, oilLocName) {
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    
    let oilCount = 1;
    
    let queue = [];
    visited[row][col] = oilLocName;
    queue.push([row, col]);
    
    while(queue.length) {
        let size = queue.length;
        
        for(let i = 0; i < size; i++) {
            let [x, y] = queue.shift();
            
            for(let j = 0; j < 4; j++) {
                let nx = dx[j] + x;
                let ny = dy[j] + y;
                
                if(nx >= 0 && ny >= 0 && nx < n && ny < m && visited[nx][ny] === 1) {
                    visited[nx][ny] = oilLocName;
                    queue.push([nx, ny]);
                    oilCount++;
                }
            }
        }
    }
    
    return oilCount;
}