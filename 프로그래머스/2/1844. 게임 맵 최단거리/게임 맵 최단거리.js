// BFS 사용
function solution(maps) {
    let answer = 0;
    let n = maps.length;
    let m = maps[0].length;
    
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    
    let visited = maps;
    let queue = [];
    queue.push([0, 0]);
    visited[0][0] = 0;
    answer++;
    
    while(queue.length > 0) {
        let size = queue.length;
        
        for(let i = 0; i < size; i++) {
            const [x, y] = queue.shift();

            for(let j = 0; j < 4; j++) {
                let nx = dx[j] + x;
                let ny = dy[j] + y;

                if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
                    if(nx == n - 1 && ny == m - 1) {
                        return ++answer;
                    }
                    queue.push([nx, ny]);
                    visited[nx][ny] = 0;
                }
            }   
        }
        
        answer += 1;
    }
    
    return -1;
}