// 타겟넘버

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