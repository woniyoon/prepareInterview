// 2020.08.24
// 1. Selection Sort (O(n^2))

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