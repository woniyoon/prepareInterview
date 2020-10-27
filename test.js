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
