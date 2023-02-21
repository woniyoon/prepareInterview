// 1. linear search
// time complexity
// avg : O(n)
// best : O(1)
// worst : O(n)
function linearSearch(arr, val) {
  for (let i=0; i<arr.length; i++) {
      if (arr[i] === val) return i;
  }

  return -1;
}



// 2. binary search (Divide & Conquer)
// the given array ****MUST BE SORTED****
// time complexity
// avg : O(logN)
// best : O(1)
// worst : O(logN)

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length-1

  // 두 값이 동일할 때도 인덱스를 계산할 수 있어야함!!! (ex. start 3과 end 3일 경우에도 mid 3인 경우를 검사해야함)
  while (start <= end) {
      let mid = Math.floor((start+end)/2);

      if (arr[mid] === val) return mid;
      if (arr[mid] < val) start = mid+1;
      if (arr[mid] > val) end = mid-1;
  }

  return -1;
}


// Naive String Search
// 
function naiveStrSearch(str, pattern) {
  let cnt = 0;

  for (let i=0; i<str.length; i++) {
      if (str[i] === pattern[0]) {
          let j = 0;

          // 처음에는 i값도 따로 증가 시켜서 str[i]와 pattern[j]의 값이 동일한지 체크했지만
          // 이런 경우 lllo, llo를 인자로 넘겨준 경우 해당 패턴이 있는데도 없는 것으로 처리한다. 
          // 때문에 i를 내가 증가시키면 안되고 i값에 j값을 더한 인덱스로 str에 접근해야함
          //
          // j는 항상 0 ~ pattern.length 범위 내의 값이므로 i+j는 항상 pattern의 길이값을 벗어나지 않음
          //
          while (j < pattern.length && str[i+j] === pattern[j]) {
              if (str[i+j] === pattern[j]) {
                  j++;
              }
          }            

          if (j === pattern.length) cnt++;
      }
  }

  return cnt;
}

function naiveSearch(str, word) {
  let cnt = 0;

  for (let i=0; i<str.length; i++) {
      for (let j=0; j<word.length; j++) {
          if (str[i+j] !== word[j]) break;
          if (j === word.length-1) cnt++;
      }
  }
  
  return cnt;
}