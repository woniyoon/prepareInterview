// 2020.08.24
// 1. Selection Sort (O(n^2))
// 한 사이클 마다 가장 작은 값을 찾아내 맨 앞에 있는 값과 교체

let numArr = [2, 8, 1, 4, 7, 10, 3, 9, 6, 5];

const selectionSort = (arr) => {
    
    for(let i=0; i<arr.length; i++) {

        let temp = 0;
        let min = arr[i];
        let index = -1;

        for(let j=i+1; j<arr.length; j++) {
            if(min > arr[j]) {
                min = arr[j];
                index = j;
            }
        }

        if(min != arr[i]) {
            temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
    }
}

// 2020.08.25
// 2. Bubble Sort (O(n^2))
// 옆에 있는 수와 비교하여, 가장 큰 수부터 맨 오른쪽으로 보냄
// 선택정렬과 동일한 시간 복잡도를 가지나, 
// 비교할 때마다 값 교체가 일어나기 때문에 정렬 알고리즘 중에서 가장 비효율적

const bubbleSort = (arr) => {
    for(var i=arr.length-1; i>=0; i--) {
        for(var j=0; j<i; j++) {
            var temp = 0;

            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    console.log(arr);    
}

// 2020.08.25
// 3. Insertion Sort (O(n^2))
// 현재 비교하려는 값 이전의 값들이 이미 정렬됐다는 전제 조건
// 선택,삽입 정렬과 똑같은 시간 복잡도를 가지지만, 효율성은 띄어남
// 이미 정렬된 배열에 한해서 어떤 알고리즘보다 속도가 빠름!

const insertionSort = (arr) => {

    for(var i=0; i< arr.length; i++) {
        for(var j=i; j>=0; j--) {
            if(arr[j] < arr[j-1]){
                var temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }

    console.log(arr);
}