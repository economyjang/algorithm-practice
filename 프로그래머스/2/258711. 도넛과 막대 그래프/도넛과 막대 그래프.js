// 도넛 모양, 막대 모양, 8자 모양 그래프
// 1개 이상의 정점, 정점을 연결하는 단방향 간선
// 도넛 -> n개의 정점, n개의 간선, 출발한 곳으로 되돌아옴, 정점에서 나가고 들어오는 간선이 각각 1개씩
// 막대 -> n개의 정점, n-1개의 간선, 마지막 정점만 나가는 간선이 없음
// 8자 -> 2n+1개 정점, 2n+2개 간선, 도넛 2개를 정점을 하나씩 골라 결합
// 8자는 1개의 정점만 나가고 들어오는 간선이 각각 2개씩, 나머지는 각각 1개씩
// 무관한 정점을 하나 생성한 뒤 각 모양의 그래프로 향함 -> 나가는 정점만 있음 -> 총 그래피의 개수
// 각 정점에는 서로 다른 번호가 매겨져 있음
// [새로 생성한 정점 번호, 도넛 모양 그래프의 수, 막대 모양 그래프의 수, 8자 모양 그래프의 수]
function solution(edges) {
    let centerVertex = 0;
    let donutCount = 0;
    let stickCount = 0;
    let eightCount = 0;
    let totalGraphCount = 0;
    
    // 정점에서 나가는 간선
    // 정점으로 들어오는 간선
    let inEdge = {};
    let outEdge = {};
    edges.forEach(([start, end]) => {
        if(!inEdge[end]) inEdge[end] = [start];
        else inEdge[end].push(start);
        if(!outEdge[start]) outEdge[start] = [end];
        else outEdge[start].push(end);
    }); 
    
    // 중간 정점과 그래프의 총 개수 구하기
    Object.keys(outEdge).filter((key) => outEdge[key].length >= 2)
                        .forEach((key) => {
                            if(!inEdge[key]) {
                                centerVertex = +key;
                                totalGraphCount = outEdge[key].length;
                            }
                        });
    
    // 각 그래프의 개수 구하기
    // 막대 그래프, 8자 그래프 개수
    stickCount = Object.keys(inEdge).filter((key) => !outEdge[key]).length;
    eightCount = Object.keys(inEdge).filter((key) => inEdge[key].length >= 2 && outEdge[key]?.length >= 2).length;
    
    return [centerVertex, totalGraphCount - (eightCount + stickCount), stickCount, eightCount];
}