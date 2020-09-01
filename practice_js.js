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