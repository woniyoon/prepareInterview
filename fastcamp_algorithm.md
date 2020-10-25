### Chapter 14

### 동적계획법 (Dynamic Programming)
- 입력 크기가 작은 부분 해결 & 그것을 이용해서 큰 부분 문제를 해결 -> 최종적으로 전체 문제를 해결하는 알고리즘
- 상향식 접근법
- Memoization기법(: 이전에 계산한 값을 저장함으로써 중복 계산을 피함) 사용
- 문제를 잘게 쪼갤 때, 부분 문제는 중복되어 재활용됨
- 예) 피보나치 수열


### 분할 정복(Divide & Conquer)
- 문제를 가장 작은 단위까지 나누고, 작은 부분을 풀고 합쳐가며 문제의 답을 해결하는 알고리즘
- 하향식 접근법
- 일반적으로 재귀함수로 구현
- 문제를 잘개 쪼갤 때, 부분 문제가 서로 중복되지 않음
- 예) 퀵 정렬, 병합 정렬,...


### 피보나치 수열 (동적계획법 이용)
```javascript

let memo = [0, 1];

function fibo(n){
    if(memo[n]) {
        console.log("이미 계산됐음!");
        return memo[n];
    } else {

        for(let i=2; i<n+1; i++) {
            memo[i] = memo[i-1] + memo[i-2];
        }

        return memo[n];
    }
    
    }

function fibo2(n){
    if(n <= 1) {
        return memo[n];
    } 
    
    if(memo[n]) {
        console.log(n + "번째는 이미 계산되있음!");
        return memo[n];
    } else {
        console.log(n + "번째는 아직 계산 안 되있음");
        memo[n] = fibo2(n-1) + fibo2(n-2);
        return memo[n];
    }
}

console.log(fibo2(10));

```


### 퀵정렬 (Divide and Conquer 이용)
- 예전에 풀어봤음에도 불구하고, 구현하는데 시간이 오래 걸렸다...
- left와 right번째 인덱스에 있는 값 중 어느 것과 교환을 해야하고, 재귀적으로 호출할 때 넘겨야하는 값이 무엇인지 명확하게 알아야 함.

```javascript

let arr = [4, 10, 40, 22, 1, 90, 92, 30];

const quickSort = (arr, start, end) => {
        
    if(start >= end) {
        return;
    }
    
    let pivot = start;
    let left = start+1;
    let right = end;
    
    while(left <= right) {
        while(left <= end && arr[left] <= arr[pivot]) {
            left++;
        }
        
        while(right > start && arr[right] >= arr[pivot]){
            right--;
        }
        
        if(left > right) {
            let temp = arr[pivot];
            arr[pivot] = arr[right];
            arr[right] = temp;
        } else {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
    }
    
    quickSort(arr, start, right-1);
    quickSort(arr, right+1, end);
}

    quickSort(arr, 0, arr.length-1);
    console.log(arr);

```
