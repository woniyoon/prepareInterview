// 수박수박수박수박수박수?
function watermelon(n) {
    var answer = '';
    var i = 0;
    while(i < n) {
        if (i%2==0) {
            answer += "수";
        } else {
            answer += "박";
        }
        i++;
    }
    return answer;
}

// 서울에서 김서방 찾기
// 내가 푼 방식
function findMrKim(seoul) {
    var answer = '';
        
    seoul.forEach((item, index) => {
        if(item == "Kim") {
            answer = `김서방은 ${index}에 있다`;
        }   
        break;
    });
    
    return answer;
}

// 가장 간단한 방식
function findMrKim2(seoul) {
    return "김서방은 "+ seoul.indexOf("Kim") + "에 있다";
}

// 같은 숫자는 싫어
// 처음에 푼 방식을 했더니 효율성 0점이 나온다 ㅠㅠ
// 정확성: 71.9
// 효율성: 0.0
// 합계: 71.9 / 100.0

function hateSameNums1(arr) {
    var answer = [];
    
    for(var i=0; i<arr.length; i++) {
        if(arr[i] != arr[i+1]) {
            answer.push(arr[i]);
        }
        
    }
    return answer;
}

// filter를 이용해 더 짧은 코드로 문제를 해결할 수 있다길래
// 다시 구현해봤는데 그래도 효율성 0점 ㅠㅠ
function hateSameNums2(arr){
    var answer = [];
    
    answer = arr.filter((value, index) => {
        return value != arr[index+1]
    })
    
    return answer;
}
