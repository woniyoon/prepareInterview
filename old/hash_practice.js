// 2020.08.29
// 프로그래머스 코딩테스트 연습 해시
// 1. 완주하지 못한 선수

// 첫 번째 해결책 (X)
// 정확성: 10.0
// 효율성: 0.0
// 합계: 10.0 / 100.0

function solution1(participant, completion) {
    var answer = '';
    var c = {};
    
    for(var i=0; i<completion.length; i++) {
        c[""+completion[i]+""] = true;    
    }
    
    for(var j=0; j<participant.length; j++) {
        if(c[""+participant[j]+""]) {
            delete c[""+participant[j]+""];
        } else {
            answer = participant[j];
        }
    }
    
    return answer;
}

// 두 번째 해결책 (X)
// 정확성: 10.0
// 효율성: 0.0
// 합계: 10.0 / 100.0

function solution2(participant, completion) {
    var answer = '';
    var obj = {};
        
    participant.filter(function(item, index){
        if(completion.includes(item) && !obj.hasOwnProperty(item)) {
            obj[""+item+""] = true;
        } else {
            console.log(item);
            answer = item;
        }
    });
    
    return answer;
}

// 결국 본 최적의 답안
// 이름 순으로 정렬 후, 처음부터 비교하면서 다른 값을 리턴하는 방법도 있었으나
// Hash를 이용해야하므로 참고만 함.

function findUncompleted(participant, completion) {
    var answer = '';
    var obj = {};
    
    for(var i =0; i< participant.length; i++) {
        if(obj[""+participant[i]+""]) {
            obj[""+participant[i]+""] += 1;
        } else {
            obj[""+participant[i]+""] = 1;
        }
        
    }
    
    for(var j =0; j< completion.length; j++) {
        obj[""+completion[j]+""] -= 1;
    }
    
    for(var i =0; i< participant.length; i++) {
        if(obj[""+participant[i]+""] > 0) {
            answer = participant[i];
            break;
        }
    }
    
    return answer;
}


// 레벨 테스트하다가 또 나와서 다시 풀어본 완주하지 못한 선수
// 이번에는 모던 자바스크립트 문서에 나온대로 Map 객체를 만들어서 해봤다!
// 100점~!

function findUnCompleted2(participant, completion) {
    var answer = '';
    let participated = new Map();
    
    for(var i = 0; i < participant.length; i++) {
        let runner = participant[i];
        if(participated.has(runner)) {
            var value = participated.get(runner);
            participated.set(runner, value+1);
        } else {
            participated.set(runner, 1);            
        }
    }
    
    for(let completed of completion) {
        var value = participated.get(completed);
        participated.set(completed, value+1);
    }
    
    participated.forEach((value, key)=>{
        if(value % 2 == 1) {
            answer = key;
        }
    });
    
    return answer;
}