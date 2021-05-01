// 배열 내에서 짝이 없는 숫자 찾아내기
// 정렬 후 앞-뒤 번호 비교하며 찾아내는 방법 : O(N)
// 배열의 가운데 있는 번호를 앞-뒤 인덱스의 번호와 비교하며 찾아내가는 방법 : O(logN)
// 배열을 반으로 쪼개고 재귀함수를 이용해 찾는 방법을 생각했으나 실패 ㅠㅠ

function solution(arr) {
    let answer = -1;
    let copiedArr = arr.slice();
    answer = compareAdjacentNum(copiedArr);
    return answer;
}

function compareAdjacentNum(arr) {
    let midIndex = Math.floor((arr.length / 2));

    if (arr.length === 1) {
        return arr[0];
    } else if (arr[midIndex] === arr[midIndex -1]) {
        arr.splice(midIndex-1, 2);
        return compareAdjacentNum(arr);
    } else if (arr[midIndex] === arr[midIndex+1]) {
        arr.splice(midIndex, 2);
        return compareAdjacentNum(arr);
    } else {
        return arr[midIndex];
    }
}



console.log("---------------------------")

console.log(solution([1, 1, 2, 3, 3]))          // 2
console.log(solution([1, 2, 2, 3, 3]))          // 1
console.log(solution([1, 1, 2, 2, 3, 3, 4]))    // 4
console.log(solution([1, 1, 2, 2, 4, 4, 3, 3, 0, 0, 123, 123, 142, 142, 143, 196, 196, 11, 11, 22, 22]))                            // 143
console.log(solution([1, 1, 2, 2, 4, 4, 3, 3, 9, 9, 90, 90, 7, 12, 12, 9124, 9124, 34636, 34636, 156913, 156913, 125125, 125125]))  // 7