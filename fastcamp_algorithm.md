### Chapter 14
<br/>
<br/>

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


### Chapter 17
<br/>
<br/>

### 그래프 이해

- 정점(vertex, node), 간선(edge, link, branch)로 이루어져있음
- 방향성 유무에 따라 directed graph와 undirected graph로 나눠짐
- 방향 그래프(directed graph) : 방향이 있기 때문에 A->B(<A,B>로 표기)와 B->A(<B,A>로 표기)가 다름.
- 무방향 그래프(undirected graph) : 방향이 없기 때문에 A->B와 B->A가 같기 때문에 (A,B) 혹은 (B,A)로 표기
- 간선에 비용이나 가중치가 할당됐으면 가중치 그래프(weighted graph, network)
- 연결 그래프(connected graph) : 무방향 그래프에서 모든 노드에 대한 경로가 항상 존재
- 비연결 그래프(disconnected graph) : 무방향 그래프에서 특정 노드에 대한 경로가 존재하지 않음
- 사이클(cycle) : 단순 경로의 시작 노드와 종료 노드가 동일한 경우
- 비순환 그래프(acyclic graph) : 사이클이 없는 그래프
- 완전 그래프(complete graph) : 그래프의 모든 노드가 서로 연결됨
- 인접리스트 or 인정행렬로 구현가능


### Chapter 18
<br/>
<br/>

### 너비우선탐색 (BFS)
- 정점들과 같은 레벨에 있는 형제노드들을 먼저 탐색
- 한 우물만 파고들며 끝을 볼 때까지 확인
- 보통 큐를 이용해서 구현





```javascript
class Vertex {
    constructor(label, value) {
        this.label = label;
        this.value = value;
        this.nodeArr = [];
    }
    
    addToNodeArr(node){
        this.nodeArr.push(node);
    }
    
    printUsingDFS(hasVisited){
        // 정점값부터 출력 
        console.log(this.label);
        let currentIndex = (this.label).charCodeAt(0)-65;
        hasVisited[currentIndex] = 1;
        
        for(let node of this.nodeArr) {
            let index = (node.label).charCodeAt(0)-65;
            
            if(hasVisited[index] === 0){ 
            hasVisited[index] = 1;
            node.printUsingDFS(hasVisited);
            } else {
            continue;
            }
        }
    }

    printUsingBFS(graph){
        let hasVisited = new Array(graph.length).fill(0);
        console.log(this.label);
        
        let currentIndex = (this.label).charCodeAt(0)-65;
        hasVisited[currentIndex] = 1;

        for(let vertex of graph) {
            
            for(let node of vertex.nodeArr) {
                // console.log(node.label);
                let index = (node.label).charCodeAt(0)-65;
                if(hasVisited[index] === 0) {   // 아직 방문하지 않은 정점
                    console.log(node.label);
                    hasVisited[index] = 1;
                } else {
                    continue;
                }
            }
        }
    }
}

let graph = [];

let vertexA = new Vertex("A", 0);
let vertexB = new Vertex("B", 0);
let vertexC = new Vertex("C", 0);
let vertexD = new Vertex("D", 0);
let vertexE = new Vertex("E", 0);
let vertexF = new Vertex("F", 0);
let vertexG = new Vertex("G", 0);
let vertexH = new Vertex("H", 0);
let vertexI = new Vertex("I", 0);
let vertexJ = new Vertex("J", 0);

// A 정점과 연결된 노드 추가
vertexA.addToNodeArr(vertexB);
vertexA.addToNodeArr(vertexC);

vertexB.addToNodeArr(vertexA);
vertexB.addToNodeArr(vertexD);

vertexC.addToNodeArr(vertexA);
vertexC.addToNodeArr(vertexG);
vertexC.addToNodeArr(vertexH);
vertexC.addToNodeArr(vertexI);

vertexD.addToNodeArr(vertexB);
vertexD.addToNodeArr(vertexE);
vertexD.addToNodeArr(vertexF);

vertexE.addToNodeArr(vertexD);

vertexF.addToNodeArr(vertexD);

vertexG.addToNodeArr(vertexC);

vertexH.addToNodeArr(vertexC);

vertexI.addToNodeArr(vertexC);
vertexI.addToNodeArr(vertexJ);

vertexJ.addToNodeArr(vertexI);


// graph에 각 정점 추가
graph.push(vertexA);
graph.push(vertexB);
graph.push(vertexC);
graph.push(vertexD);
graph.push(vertexE);
graph.push(vertexF);
graph.push(vertexG);
graph.push(vertexH);
graph.push(vertexI);
graph.push(vertexJ);

// 방문 여부를 알 수 있는 배열을 만들어둠
let hasVisited = new Array(graph.length).fill(0);

vertexA.printUsingDFS(hasVisited);
console.log(" ---------------------- ");
hasVisited = new Array(graph.length).fill(0);

vertexA.printUsingBFS(graph);
console.log(" ---------------------- ");


// C를 중심으로 그래프에 다시 넣어줌
graph = [];
graph.push(vertexC);
graph.push(vertexA);
graph.push(vertexG);
graph.push(vertexH);
graph.push(vertexI);
graph.push(vertexB);
graph.push(vertexJ);
graph.push(vertexD);
graph.push(vertexE);
graph.push(vertexF);

vertexC.printUsingBFS(graph);

```