// 타겟넘버
// DFS/BFS를 이용해서 푸는 문제라는 걸 알아도 풀지 못했다.
// 심지어 누군가의 풀이법을 보아도 한 번에 이해가 되지 않아서 답답했다.
// 근데 DFS가 일어날 수 있는 모든 경우의 수를 구할 때 사용한다는 걸 깨닫고나니 풀이법 이해가 됐다.
// 최종적으로 쓴 건 남의 코드를 본 결과물이지만, 다음에 비슷한 문제가 나왔을 때 풀 수 있을거 같은 자신감이...

function getOddsToBeTargetNum(numbers, target){
    let sum = 0;
    let cnt =0;

    function dfs(sum, index){
        if(index === numbers.length) {
            if(sum===target) {
                cnt++;
            }
            return;
        } 
            
        dfs(sum+numbers[index], index+1);
        dfs(sum+numbers[index]*-1, index+1);
        
    }
    
    dfs(sum, 0);

    return cnt;
}

console.log(getOddsToBeTargetNum([1,1,1,1,1], 3));