// 배열 내에서 짝이 없는 숫자 찾아내기
// 정렬 후 앞-뒤 번호 비교하며 찾아내는 방법 : O(N)
// 배열의 가운데 있는 번호를 앞-뒤 인덱스의 번호와 비교하며 찾아내가는 방법 : O(logN)
// 배열을 반으로 쪼개고 재귀함수를 이용해 찾는 방법을 생각했으나 실패 ㅠㅠ

// function solution(arr) {
//     let answer = -1;
//     let copiedArr = arr.slice();
//     answer = compareAdjacentNum(copiedArr);
//     return answer;
// }

// function compareAdjacentNum(arr) {
//     let midIndex = Math.floor((arr.length / 2));

//     if (arr.length === 1) {
//         return arr[0];
//     } else if (arr[midIndex] === arr[midIndex -1]) {
//         arr.splice(midIndex-1, 2);
//         return compareAdjacentNum(arr);
//     } else if (arr[midIndex] === arr[midIndex+1]) {
//         arr.splice(midIndex, 2);
//         return compareAdjacentNum(arr);
//     } else {
//         return arr[midIndex];
//     }
// }



// console.log("---------------------------")

// console.log(solution([1, 1, 2, 3, 3]))          // 2
// console.log(solution([1, 2, 2, 3, 3]))          // 1
// console.log(solution([1, 1, 2, 2, 3, 3, 4]))    // 4
// console.log(solution([1, 1, 2, 2, 4, 4, 3, 3, 0, 0, 123, 123, 142, 142, 143, 196, 196, 11, 11, 22, 22]))                            // 143
// console.log(solution([1, 1, 2, 2, 4, 4, 3, 3, 9, 9, 90, 90, 7, 12, 12, 9124, 9124, 34636, 34636, 156913, 156913, 125125, 125125]))  // 7



// 1차 
function stockPrice(prices) {
    let stockTrend = [];
    let length = prices.length;

    for(let [index, price] of prices.entries()) {
        let num = 0;
        for (let i=index+1; i<length; i++){
            if (price <= prices[i]) {   // 주식 가격이 떨어지지 않음
                num++;
            } else {
                num = 1; // 주식 가격이 떨어지면 디폴트로 1초 추가
                break;
            }
        }
        stockTrend.push(num);
    }

    return stockTrend
}

// 2차 

function stockPrice2(prices) {
    let stockTrend = [];
    let result = [];
    let length = prices.length;

    for(let [index, price] of prices.entries()) {
        stockTrend = [];
        for (let i=index+1; i<length; i++){
            stockTrend.push(1);

            if (price > prices[i]) {   // 주식 가격 하락
                break;
            }
        }
        result.push(stockTrend.length);
    }
    
    return result;
}

let sampleInput = [1, 2, 3, 2, 3];
console.log("1차 솔루션 : " , stockPrice(sampleInput));
console.log("2차 솔루션 : " , stockPrice2(sampleInput));
sampleInput = [3, 3, 3, 2, 1, 1];
console.log("1차 솔루션 : " , stockPrice(sampleInput));
console.log("2차 솔루션 : " , stockPrice2(sampleInput));


