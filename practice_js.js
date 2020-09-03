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


// 2016년
// 처음엔 아래와 같은 방식으로 풀려고 했으나 FAIL~
// 2번이 최적화된 답인가 싶었는데 내가 생각한 방식도 틀리진 않았었다.
// 다만 숫자 계산에 약해서 틀렸을뿐...ㅠㅠ
function whichDayOf2016_1(a, b) {
    var answer = '';
    var MONTH = [31,29,31,30,31,30,31,31,30,31,30,31];
    var WEEK = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    
    var totalDays = 0;
    
    if(a > 1) {
        for(var i=0; i<a-1; i++){
            totalDays += MONTH[i];
        }
    }
    
    totalDays = totalDays + b - 1;
    
    var index = totalDays%7;

    answer = WEEK[index];
    return answer;
}

// 다른 사람들이 어떻게 풀었나 검색하다 찾은
// Date의 함수를 이용해 푸는 완전 간단한 방법
function whichDayOf2016_2(a, b) {
    var answer = '';
    
    var date = new Date(2016, a-1, b);
    let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

    let index = date.getDay();
    answer = day[index];
    return answer;
}


// 두 정수 사이의 합
// 반복문을 돌리지 않는 방향으로 해결하고 싶었으나
// 제출하면 81.3점 
// 테스트케이스에 양수-양수, 음수-음수, 음수-양수 추가했을 때 다 문제없이 됐는데
// 숫자가 너무 커져서 그런가 싶기도 하고.

function sumBetweenTwoNums1(a, b) {
    var answer = 0;
    
    if(a == b) {
        return a;
    }
    
    var max = Math.max(a, b);
    var min = Math.min(a,b);
    answer = max*(max+1)/2 - min*(min-1)/2;
    
    return answer;
}


// 문자열 내 p와 y의 개수
// 다행히 패스~! 하지만 regex 이용하면 더 간단하게 할 수 있을 것 같다.

function numsOfPAndY1(s){
    var answer = true;

    const obj = {
        p: 0,
        y: 0,
    }
    
    for(var i=0; i<s.length; i++) {
        if(s[i].toLowerCase() == 'p' || s[i].toLowerCase() == 'y') {
            obj[s[i].toLowerCase()] += 1;
        }
    }
    
    answer = (obj.p == obj.y) ? true : false;
    
    return answer;
}

// 신박하다!!
function numsOfPAndY2(s) {
    var answer = true;

    var numOfP = s.toLowerCase().split("p").length;
    var numOfY = s.toLowerCase().split("y").length;

    answer = numOfP == numOfY;

    return answer;
}


// regex를 이용해 푸는 방법 !
// i는 대/소문자 무시하고
// g는 전체에서
function numsOfPAndY3(s) {
    if(s.match(/p/ig) == null || s.match(/y/ig) == null) {
        return false;
    }
    return s.match(/p/ig).length == s.match(/y/ig).length;
}


// 콜라츠 추측
// 한 문제가 계속 안 풀려서 검색해보니,
// 주어진 숫자가 1이면 바로 0을 리턴해야했다 ㅠㅠ

function proveCollatzNum(num) {
    var answer = 0;
    var n = 0;
    
    if(num == 1) {
        return n;
    }
    
    while(n < 500) {
        if(num % 2 == 0) {
            num /=2;
        } else {
            num = num*3 + 1;
        }
        n++;
        
        if(num == 1) {
            return n;
        }
    }
    
    answer = -1;
    return answer;
}