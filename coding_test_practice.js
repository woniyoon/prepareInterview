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



