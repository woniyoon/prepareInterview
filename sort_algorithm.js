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

    for(var i=1; i< arr.length; i++) {
        for(var j=0; j<i; j++) {
            if(arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            // if(arr[j] < arr[j-1]){
            //     var temp = arr[j];
            //     arr[j] = arr[j-1];
            //     arr[j-1] = temp;
            // }
        }
    }

    console.log(arr);
}


// 2020.08.26 - 2020.08.27
// 4. Quick Sort (O(N * log N))
// pivot값을 설정해주고, 그 pivot값을 중심으로 왼쪽에는 작은 값, 오른쪽에는 큰 값을 배치한다.
// 분할 정복 알고리즘의 대표적인 예
// 평균적으로 O(N * logN)의 시간복잡성을 가지나, 이미 정렬돼있는 배열에 대해서는 최악의 시간복잡성인 O(N^2)

const quickSort = (arr, start, end) => {
    
    if(start >= end) {
        return;
    }

    var pivot = start;
    var i = start +1 , j = end;

    while(i <= j) {
        while(i<= end && arr[i] <= arr[pivot]) {
            i++;
        }
        while(arr[j] >= arr[pivot] && j > start) {
            j--;
        }

        if(i > j) {
            var temp = arr[j];
            arr[j] = arr[pivot];
            arr[pivot] = temp;
        } else {
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }

    quickSort(arr, start, j-1);
    quickSort(arr, j+1 ,end);
}
