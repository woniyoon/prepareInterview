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

// the K-th num
// 이거 풀기 전에 자바스크립트 문서를 읽은게 큰 도움이 됐다.
// 그래서 내장함수를 많이 이용해서 풀었는데, 2번 테스트 케이스를 통과하지 못해 검색해보니
// 정수 배열을 sort()를 이용해 정렬하면, 숫자로 인식하지 못해서 원하는대로 정렬이 안 되는 경우가 있어서였다.
// 이것 또한 자바스크립트 문서에 나왔던건데, 틀린 덕분에 배워간다.
// 가장 좋아요를 많이 받은 풀이법은 구조 분해 할당(destructing assignment)와 filter 함수까지 사용했는데
// 엄청 간단하고, 내가 배운 개념을 사용해서 풀이했다. 많이 배워가는 하루

function findTheKthNum(array, commands) {
    var answer = [];
    
    for(let arr of commands) {
        var partArr = array.slice(arr[0]-1, arr[1]);
        var index = arr[2];
        partArr.sort((e1, e2)=> e1-e2);
        answer.push(partArr[index-1]);
    }
    
    return answer;
}

// 가장 좋아요를 많이 받은 해결책
function findTheKthNum2(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}

// 가운데 글자 가져오기
// slice를 이용하고 싶었는데 짝수일 때 계속 문제가 생겨서, 결국 index를 이용해 접근하는 방식으로 해결했다.
// 답안을 보니 substr을 이용할 수도 있었는데...

function getMidChar(s) {
    return s.length % 2 == 0 ? s[(s.length/2)-1] + s[s.length/2] : s[Math.floor(s.length/2)];
}


// 나누어 떨어지는 숫자 배열
// 여러 조건들을 고려하지 못해서 처음에 에러 발생
// 배열의 사이즈가 0일 때를 고려하는 습관을 들이자!
// 이번에는 filter를 한 번 사용해봤다.

function sumOfParticularNums(arr, divisor) {
    var answer = [];
    
    answer = arr.filter((item, index) => {
        return item % divisor == 0;
    }).sort((num1, num2) => num1 - num2);
    
    if(answer.length == 0) {
        answer.push(-1);
    }
    
    return answer;
}


// 자릿수 더하기
// 가장 간단한 답은 아니었지만 성공~
function calcEachDigit(n) {
    var answer = 0;

    n = n+"";
    
    for(let s of n) {
        answer += Number(s);
    }

    return answer;
}

// 문자열을 정수로 바꾸기
// 내장함수를 사용했다

function convertStrToNum1(s) {
    var answer = Number(s);
    return answer;
}


// 누군가가 구현한 간단한 답
function convertStrToNum2(s) {
    var answer = s/1;
    return answer;
}


// 하샤드 수

function isHarshadNum(x) {
    var answer = true;
    var str= x+"";
    var num =0;
    for(let s of str){        
        num += Number(s);
    }
    
    return x%num ==0;
}

// 평균 구하기
// 낯설지만, reduce를 이용해서 풀어봤다! 성공~!

function getAvg(arr) {
    var answer = 0;

    var result = arr.reduce((prev, current) => {
        return prev + current;
    });

    answer = result/arr.length;
    return answer;
}


// 핸드폰 번호 가리기
// 가장 쉬운 방법으로 풀었다가, string의 내장함수인 replaceAll을 사용해보려고 했으나 에러가 났다.
// 크롬에서 프로그래머스 사이트에 들어가서 풀었던건데,
// 크롬에서 지원하지 않아서인거 같다.

function hidePhoneNum1(phone_number) {
    var answer = '';
    
    for(var i=0; i<phone_number.length; i++) {
        if(i < phone_number.length - 4) {
            answer += "*";
        } else {
            answer += phone_number[i];
        }
    }
    
    return answer;
}


// 가장 좋아요를 많이 받은 해결법은 정규식만으로 마지막 네 자리를 제외하고 모두 *로 바꾼 거였는데
// 그것보다는 다음의 해결법이 더 인상깊어서 적어둔다.
// String에 repeat라는 내장함수가 있는지 몰랐다!! 앞으로 아주 유용하게 사용할거 같다.

function hidePhoneNum2(phone_number) {
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
}


// 짝수와 홀수
// 이 문제는 여기 올리기 민망할 정돌 쉽지만
// 다른 사람의 해결책에 내가 잘 알지 못하는게 있어서 추가했다.

function isEvenOrOdd1(num) {
    return num%2==0? "Even" : "Odd";
}

// 바로 0은 false, 1은 true라는 점을 이용한 해결법~!
// 이 때 위의 해결법과는 달리 Odd와 Even의 위치가 바뀌어야 함!
function isEvenOrOdd2(num) {
    return num%2? "Odd" : "Even";
}


// 124 나라의 숫자
// 알듯 말듯 모르겠어서 결국에 해결법을 봤는데
// 변환을 원하는 숫자를 3으로 나눠서 나머지에 따라 값을 계속 합쳐나가면 된다.
// 어찌보면 이 문제도 주어진 숫자를 n진법으로 변환하는거라서
// 깊게 생각했으면 풀 수 있었을텐데, 아쉬웠다 ㅠ_ㅠ


function convertNumTo124Nums1(n) {
    var answer = '';

    while(n>0) {
        if(n%3==1) {
            answer = 1 + answer;
            n = Math.floor(n/3);
        } else if(n%3==2) {
            answer = 2 + answer;
            n = Math.floor(n/3);
        } else if(n%3==0) {
            answer = 4 + answer;
            n = Math.floor(n/3) -1;
            // 3으로 나눴을 때 나머지가 0인 경우에만 1을 빼서 n에 대입한다.
        }
    }

    return answer;
}


// 가장 좋아요를 많이 받은 해결책은 재귀함수와 배열을 이용했다.
// 간편하지만 덜 직관적이다 ㅠ_ㅠ
function convertNumTo124Nums2(n) {
    return n == 0 ? "" : convertNumTo124Nums2(parseInt((n-1)/3)) + [1, 2, 4][(n-1)%3];
}


// 2020.10.04
// 설탕배달
// 생각해봤을 때는 쉬웠는데, 구현하려고 하니 어려웠다.
// 처음에는 5kg짜리로 옮길 수 있는 것부터 계산하고 이후에 3kg로 가져갈 수 있는 개수를 더하면 된다 생각했는데
// 5kg을 하나 빼면 3kg으로 가져갈 수 있는 경우도 있기 때문에 (n이 11kg일 때)
// 결국 남이 쓴 코드를 봤다.
// 그러나 대부분 다이나믹 프로그래밍을 이용하지 않은 것 같았다.

let chart = [];

console.log(chart[0]);

function calcNumOfSugarCarrying(n){
    const index = n;

    if(chart[index] !== undefined) {
        console.log("기록에 남아있습니다.");
        return chart[index];
    } else {
        console.log("처음 계산해보네요.");

        let cnt = 0;

        while(true) {
            if(n%5 === 0) {
                chart[index] = n/5 + cnt;
                return chart[index];
            } else if(n < 3) {
                return -1;
            }     
            n -= 3;
            cnt++;
        }
    }
}
console.log(calcNumOfSugarCarrying(19));
console.log(calcNumOfSugarCarrying(19));
console.log(calcNumOfSugarCarrying(19));

// 다른 사람이 푼 해결책 중 점화식을 이용해 다이나믹 프로그래밍을 활용한 게 있어서 다시 써본다.
// 이 분에 의하면 3이나 5로 나눠지지 않는 케이스는 3보다 작은 1,2 제외하고 4와 7밖에는 없었다.

function calcNumOfSugarCarrying2(n) {
    // 0부터 7까지의 경우의 수를 기록. 
    var cntChart = [-1, -1, -1, 1, -1, 1, 2, -1];

    // 1부터 7까지는 이미 차트에 기록되어있음.
    if(n < 8) {
        return cntChart[n];
    } else {
        
        for(var i=8; i<=n; i++) {
            if(cntChart[i-3] !== -1 && cntChart[i-5] !== -1) {
                // 3과 5 둘 다 나눠진다면 둘 중 더 작은 횟수를 사용한다.
                cntChart[i] = 1 + Math.min(cntChart[i-3], cntChart[i-5]);
            } else if (cntChart[i-3] === -1 && cntChart[i-5] !== -1) {
                cntChart[i] = 1 + cntChart[i-5];
            } else if (cntChart[i-3] !== -1 && cntChart[i-5] === -1) {
                cntChart[i] = 1 + cntChart[i-3];
            }
        }

        return cntChart[n];
    }
}



// 백준 2606번 바이러스 [https://www.acmicpc.net/problem/2606 ]
// DFS 연습용으로 혼자서 풀어본 문제
// 많이 헤맸다 ^^....1시간 걸려서 해결
// 초등부 문제인데...ㅠㅠ.... 그래도 여튼 답은 나와서 다행이었다...
// 인접배열의 사이즈는 (컴퓨터수+1)(컴퓨터수+1)만큼인데
// visited 배열의 사이즈는 컴퓨터수만큼이라서 인덱스를 1씩 빼서 계산해야하는데 이게 좀 헷갈렸다.
// 그리고 dfs 함수를 밖으로 빼놓고, numOfInfected를 매개변수로 전달시키면서 감염될 때마다 1씩 올렸는데
// 정작 getNumOfInfected에서 리턴하면 영향을 안 받고 0을 리턴해서 애먹었다.
// 아직도 이유는 왜인지 모르겠다 ㅠㅠ... 누가 내 질문 좀 답해줘.....

function getNumOfInfected(numOfComs, numOfNetworks, pairs) {

    // 인접 배열을 이용해서 푼다
    let adjacentArr = new Array(numOfComs+1);

    // 감연된 컴퓨터의 수
    let numOfInfected = 0;
    // 방문여부를 기록
    let visited = new Array(numOfComs).fill(false);

    for(let i=0; i<adjacentArr.length; i++) {
        adjacentArr[i] = new Array(numOfComs+1);
    }

    for(let i=0; i<numOfNetworks; i++) {
        let unitFirst = Number(pairs[i].substring(0, 1));
        let unitSecond = Number(pairs[i].substring(2));

        adjacentArr[unitFirst][unitSecond] = 1;
        adjacentArr[unitSecond][unitFirst] = 1;
    }

    dfs(1, visited, adjacentArr, numOfInfected);

    function dfs(index, visited, adjacentArr){
        console.log(numOfInfected);
        visited[index-1] = true;
        for(let i=1; i<adjacentArr.length; i++) {
            if(adjacentArr[index][i] === 1 && !visited[i-1]) {
                
                numOfInfected += 1;
                console.log("루프 안에서 감염컴퓨터 수 : "+numOfInfected);
    
                visited[i-1] = true;

                dfs(i, visited, adjacentArr);
            }
        }    
    }
    return numOfInfected;
}



let numOfInfected = getNumOfInfected(7, 6, ["1 2", "2 3", "1 5", "5 2", "5 6", "4 7"]);
console.log(numOfInfected);


numOfInfected = getNumOfInfected(8, 6, ["1 2", "2 4", "1 8", "4 5", "5 7", "3 6"]);
console.log(numOfInfected);