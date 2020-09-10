// 실패율 (2019 KAKAO BLIND RECRUITMENT)
// 너무 어려웠다 ㅠㅠ...
// 혼자서 풀려고 했으나, 마지막에 실패율 기준으로 정렬하려고 할 때 문제가 있어서
// 결국 남의 코드를 보았는데...
// Map을 value값 기준으로 정렬하는 것보다 객체에 속성명, 속성값으로 넣고 그 객체를 배열에 넣어
// 계산하는 게 더 쉬운 방법이었나보다ㅠㅠ
// 마지막에 정렬하는 부분만 다른 사람의 코드를 복사해왔더니 통과!


function calcFailureRate1(N, stages) {
    var answer = [];
    var stageMap = new Map();
    var currentStageMap = new Map();

    for(var i=1; i<=N; i++) {
        stageMap.set(i, 0);
    }
    
    for(var i=0;i<stages.length; i++) {        
        var num = stages[i];
        if(!currentStageMap.has(num)) {
            currentStageMap.set(num, 1);
        } else {
            currentStageMap.set(num, currentStageMap.get(num) + 1);      
        }
        

        while(num > 0) {
            if(stageMap.get(num) != null) {
                stageMap.set(num, stageMap.get(num) + 1);                
            }
            num--;
        }
    }
    
    var arr = [];
    
    stageMap.forEach((value, key)=>{   
        
        var failureRate = 0;
        
        if(currentStageMap.has(key)) {
            failureRate = currentStageMap.get(key) / value;
        }
        
        arr.push({"stageNumber": key, "failRate": failureRate});   
    });

    return arr.sort((a,b)=>(b.failRate === a.failRate) ? a.stageNumber -b.stageNumber : b.failRate - a.failRate).map(el=>el.stageNumber);
    
}

// 다른 사람의 코드
// 객체 이용 X
function calcFailureRate2(N,stages) {
    var answer = [],
        result = [];
    for(var i =0; i < N; i++) {
        var a = stages.filter(word => word >= i+1).length;
        var b = stages.filter(word => word == i+1).length;
        if( b===0){
            result.push(0);
        }else {
        result.push(b/a);
        }
    }
    for(var i =0; i < N; i++) {
        var index = result.indexOf(Math.max.apply(null, result));
        answer.push(index+1); //answer[i] = index+1;도 가능
        result[index] = -1;
    }
    return answer;
}

// 다른 사람의 코드
// 객체 이용 O
function calcFailureRate3(N, stages) {
    let ans = []

    for (let i = 1; i <= N; ++i) {
        let usersReachedCurrentStage   = stages.reduce((acc, curStage) => acc + ((curStage >= i) ? 1 : 0), 0)
        let usersStagnatedCurrentStage = stages.reduce((acc, curStage) => acc + ((curStage == i) ? 1 : 0), 0)
        if (usersReachedCurrentStage === 0) {
            ans.push({ 'stage': i, 'failRate': 0 })
            continue
        }

        ans.push({ 'stage': i, 'failRate': (usersStagnatedCurrentStage / usersReachedCurrentStage) })
    }

    return ans.sort((a, b) => {
        if (a.failRate > b.failRate) return -1
        if (a.failRate < b.failRate) return 1
        return a.stage - b.stage
    }).map(entry => entry.stage)
}
