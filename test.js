//     constructor(label, value) {
	// class Vertex {
//         this.label = label;
//         this.value = value;
//         this.nodeArr = [];
//     }

//     addToNodeArr(node){
//         this.nodeArr.push(node);
//     }

//     printUsingDFS(hasVisited){
//         // 정점값부터 출력 
//         console.log(this.label);
//         let currentIndex = (this.label).charCodeAt(0)-65;
//         hasVisited[currentIndex] = 1;

//         for(let node of this.nodeArr) {
//             let index = (node.label).charCodeAt(0)-65;

//             if(hasVisited[index] === 0){ 
//             hasVisited[index] = 1;
//             node.printUsingDFS(hasVisited);
//             } else {
//             continue;
//             }
//         }
//     }

//     printUsingBFS(graph){
//         let hasVisited = new Array(graph.length).fill(0);
//         console.log(this.label);

//         let currentIndex = (this.label).charCodeAt(0)-65;
//         hasVisited[currentIndex] = 1;

//         for(let vertex of graph) {

//             for(let node of vertex.nodeArr) {
//                 // console.log(node.label);
//                 let index = (node.label).charCodeAt(0)-65;
//                 if(hasVisited[index] === 0) {   // 아직 방문하지 않은 정점
//                     console.log(node.label);
//                     hasVisited[index] = 1;
//                 } else {
//                     continue;
//                 }
//             }
//         }
//     }
// }

// let graph = [];

// let vertexA = new Vertex("A", 0);
// let vertexB = new Vertex("B", 0);
// let vertexC = new Vertex("C", 0);
// let vertexD = new Vertex("D", 0);
// let vertexE = new Vertex("E", 0);
// let vertexF = new Vertex("F", 0);
// let vertexG = new Vertex("G", 0);
// let vertexH = new Vertex("H", 0);
// let vertexI = new Vertex("I", 0);
// let vertexJ = new Vertex("J", 0);

// // A 정점과 연결된 노드 추가
// vertexA.addToNodeArr(vertexB);
// vertexA.addToNodeArr(vertexC);

// vertexB.addToNodeArr(vertexA);
// vertexB.addToNodeArr(vertexD);

// vertexC.addToNodeArr(vertexA);
// vertexC.addToNodeArr(vertexG);
// vertexC.addToNodeArr(vertexH);
// vertexC.addToNodeArr(vertexI);

// vertexD.addToNodeArr(vertexB);
// vertexD.addToNodeArr(vertexE);
// vertexD.addToNodeArr(vertexF);

// vertexE.addToNodeArr(vertexD);

// vertexF.addToNodeArr(vertexD);

// vertexG.addToNodeArr(vertexC);

// vertexH.addToNodeArr(vertexC);

// vertexI.addToNodeArr(vertexC);
// vertexI.addToNodeArr(vertexJ);

// vertexJ.addToNodeArr(vertexI);


// // graph에 각 정점 추가
// graph.push(vertexA);
// graph.push(vertexB);
// graph.push(vertexC);
// graph.push(vertexD);
// graph.push(vertexE);
// graph.push(vertexF);
// graph.push(vertexG);
// graph.push(vertexH);
// graph.push(vertexI);
// graph.push(vertexJ);

// // 방문 여부를 알 수 있는 배열을 만들어둠
// let hasVisited = new Array(graph.length).fill(0);

// vertexA.printUsingDFS(hasVisited);
// console.log(" ---------------------- ");
// hasVisited = new Array(graph.length).fill(0);

// vertexA.printUsingBFS(graph);
// console.log(" ---------------------- ");


// // C를 중심으로 그래프에 다시 넣어줌
// graph = [];
// graph.push(vertexC);
// graph.push(vertexA);
// graph.push(vertexG);
// graph.push(vertexH);
// graph.push(vertexI);
// graph.push(vertexB);
// graph.push(vertexJ);
// graph.push(vertexD);
// graph.push(vertexE);
// graph.push(vertexF);

// vertexC.printUsingBFS(graph);



// function solution(numbers, target) {
//     let answer = 0;
    
//     dfs(0, 0);
    
//     function dfs(index, sum) {
//         // console.log("numbers.length : " + numbers.length);
//         // console.log("index : " + index);
//         // console.log("sum : " + sum);
//         // console.log("answer : " + answer);

//         if(index === numbers.length) {
//             if (sum === target) {
//                 answer++;
//             }
//             return;
//         }
        
//         dfs(index + 1, sum + numbers[index]);
//         dfs(index + 1, sum - numbers[index]);
//     }
    
//     return answer;
// }

//  console.log("answer : " + solution([1, 1, 1, 1, 1], 3));
//  console.log("------------------------");



// function getOddsToBeTargetNum(numbers, target){
//     let sum = 0;
//     let cnt =0;

//     function dfs(sum, index){
//         if(index === numbers.length) {
//             if(sum===target) {
//                 cnt++;
//             }
//             return;
//         } 

//         dfs(sum+numbers[index], index+1);
//         dfs(sum+numbers[index]*-1, index+1);

//     }

//     dfs(sum, 0);

//     return cnt;
// }

// console.log(getOddsToBeTargetNum([1,1,1,1,1], 3));



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



// let numOfInfected = getNumOfInfected(7, 6, ["1 2", "2 3", "1 5", "5 2", "5 6", "4 7"]);
// console.log(numOfInfected);


// numOfInfected = getNumOfInfected(8, 6, ["1 2", "2 4", "1 8", "4 5", "5 7", "3 6"]);
// console.log(numOfInfected);



function nAndM(n, m) {
	// n: 1부터 n까지의 수
	// m: 길이가 m개

	for (let i=1; i<=n; i++) {
		let isUsed = new Array(n).fill(false);
		isUsed[i-1] = true;
        getPermutation([i], isUsed, m);
        getRepeatedPermutation([i], n, m);
    }
    
}


function getPermutation(numArr, isUsed, m) {
	if (numArr.length !== m) {    // m개 다 꺼냈는지 확인
		for (let i=0; i<isUsed.length; i++) {

			if (!isUsed[i]) {    
                // ❶ 배열을 고대로 사용해서 다른 경우의 수를 찾지를 못함
				//numArr.push(i+1);
                let copiedArr = numArr.slice();
                copiedArr.push(i+1);


				isUsed[i] = true;
                getPermutation(copiedArr, isUsed, m);
                // ❷ break를 하면서 다음으로 안 넘어가고 
                // 위와 마찬가지로 다른 경우의 수를 찾지 못하고 끝남
			// 	break;
			// } else {
			// 	continue;
			}
		}
	} else {
		console.log(numArr);
	}
}


function getRepeatedPermutation(numArr, n, m) {
    
	if (numArr.length !== m) {
			
		for (let i=0; i<n; i++) {
			let isUsed = new Array(n).fill(false);

			if (!isUsed[i]) {
				isUsed[i] = true;
				let copiedArr = numArr.slice();
				copiedArr.push(i+1);
				getRepeatedPermutation(copiedArr, n, m);
			}
		}
			
	} else {
		console.log(numArr);
	}
}


// nAndM(3, 1);
// nAndM(4, 2);
// nAndM(3, 3);

const xMove = [0, 1, 0, -1];
const yMove = [-1, 0, 1, 0];
const len = xMove.length;

function findExit(row, col, input) {
	let maze = [];

	// 미로 만들기
	for (let i=0; i<row; i++) {
		for (let j=0; j<col; j++) {
			
			if(maze[i] === undefined) {
				maze[i] = new Array(col);
			} 
			
			maze[i][j] = Number(input[i].charAt(j));
		}
	}
	
	// 미로 탐색
	searchMaze(0, 0, maze);
	console.table(maze);
	console.log(`지나가야하는 최소 횟수 : ${maze[row-1][col-1]}`);

}

function searchMaze(currentX, currentY, maze) {
	let moves = [];
	
	for(let i=0; i<len; i++) {
		let xPos = currentX + xMove[i];
		let yPos = currentY + yMove[i];
		
		if (xPos >= 0 && xPos < maze.length && yPos >= 0 && yPos < maze[0].length) {	// 이동가능한 경우가 미로의 범위 내에 있는지 확인

			if (maze[xPos][yPos] === 1) {	// 지나갈 수 있는 길인지 확인
				maze[xPos][yPos] = maze[currentX][currentY] + 1;

				if (xPos === maze.length-1 && yPos === maze[0].length-1) {	// 목적지 도착 여부 확인
					return;
				}
				searchMaze(xPos, yPos, maze);
			}
			
		}
	}

}


const sample = [
	"101111",
	"101010",
	"101011",
	"111011"
]


const sample2 = [
	"1011101110111011101110111",
	"1110111011101110111011101"
];

const sample3 = [
	"1011111",
	"1110001",
	"1000001",
	"1000001",
	"1000001",
	"1000001",
	"1111111"
];

findExit(4, 6, sample);
findExit(2, 25, sample2);
findExit(7, 7, sample3);

