import java.util.*;

// 백준 알고리즘 2164번
// 카드2   [https://www.acmicpc.net/problem/2164]
class Main {
    public static void main(String[ ] args) {

        Scanner scan = new Scanner(System.in);
        String input = scan.nextLine();
        int number = Integer.parseInt(input);        

        System.out.println(getTheLastCard(number));
    }

    public static int getTheLastCard(int number){
        Deque<Integer> cardDeck = new ArrayDeque<Integer>();
        
        for(int i=1; i<=number/2; i++) {
            // 짝수만 넣으면 됨
            cardDeck.add(i*2);
        }

        while(cardDeck.size() > 1) {
            cardDeck.pop();           
            cardDeck.addLast(cardDeck.pop());
        }
        
        return cardDeck.pop();
    }
}

// 백준 알고리즘 9375번
// 패션왕 신해빈 [https://www.acmicpc.net/problem/9375]

class Main {
    public static void main(String[ ] args) {

        Scanner scan = new Scanner(System.in);
        String input = scan.nextLine();
        int testCaseNum = Integer.parseInt(input);   

        // 테스트케이스 개수만큼 반복
        for(int i=0; i<testCaseNum; i++) {
            HashMap<String, Integer> closet = new HashMap<>();
            int numOfClothing = Integer.parseInt(scan.nextLine());

            for(int j=0; j<numOfClothing; j++) {
                // String clothing = scan.nextLine();
                // String type = clothing.split(" ")[1];

                scan.next();        // scan.next()는 공백 전까지만 스캔!!
				String type = scan.next();

                // 가지고 있는 옷 종류를 키로 하는 해시맵에 개수를 구해서 넣어줌
                if(!closet.containsKey(type)) {
                    closet.put(type, 1);
                } else {
                    closet.put(type, closet.get(type)+1);
                }
            }
            
            System.out.println(getComboClothing(closet));
            
        }

    }
    
    public static int getComboClothing(HashMap<String, Integer> closet){
        int combo = 1;
        
        for (Integer num : closet.values()) {
            combo *= (num+1);
        }
        
        return combo-1;
    }
}

// 백준 알고리즘 4949번
// 균형잡힌 세상 [https://www.acmicpc.net/problem/4949]

class Main {
    public static void main(String[ ] args) {
        
        Scanner scan = new Scanner(System.in);
        String input = scan.nextLine();
        String[] inputArr = input.split("\\n");
        
        System.out.println(inputArr.length);
        for(int i=0; i<inputArr.length; i++) {
            System.out.println(isBalanced(inputArr[i]));
        }
    }
    
    public static String isBalanced(String str) {
        
        str = "][";
        String hi = str.replaceAll("[^\\(|\\)|\\[|\\]]", "");
        String answer = "yes";
        char[] charArr = hi.toCharArray();
        
        HashMap<Character, Character> map = new HashMap<>();
        map.put('(', ')');
        map.put('[', ']');
        
        Stack<Character> stack = new Stack();

        for(int i=0; i<charArr.length; i++) {
            char char1;
            
            if(charArr[i] == '(' || charArr[i] == '[') {
                stack.push(charArr[i]);
            } else {
                if (stack.empty() || map.get(stack.pop()) != charArr[i]) {
                    answer = "no";
                    break;
                }
            }
        }
        
        return answer;
    }
}


// 백준 알고리즘 11399번 
// ATM [https://www.acmicpc.net/problem/11399]
// 해결법은 금방 떠올랐으나 계속 오류가 나서 뭔가 했더니,
// 인출하는데 걸리는 시간을 한 줄로 받아왔던게 문제였던 것 같다.
// 큰 것부터 차례 차례로 넣어 해결하는 탐욕 알고리즘을 역으로 이용해
// 작은 것부터 차례로 넣어서 해결했다.


class Main {
    public static void main(String[ ] args) {
        Scanner sc = new Scanner(System.in);
        
        int num = sc.nextInt();
        int [] withdrawlTime = new int[num];

        for(int i=0; i<num; i++) {
            withdrawlTime[i] = sc.nextInt();
        }
        
        Arrays.sort(withdrawlTime);
        
        int spentTime = 0;

        for(int j=0; j<withdrawlTime.length; j++) {
            spentTime += (withdrawlTime[j] * (withdrawlTime.length-j)) ;
        }

        System.out.println(spentTime);
    }
}


// 백준 알고리즘 5585번
// 거스름돈 [https://www.acmicpc.net/problem/5585]
// 탐욕 알고리즘을 이용해서 푸는 문제
// 탐욕 알고리즘을 이해하기에 가장 도움이 되는 문제 중 하나인 것 같다.

class Main {
    public static void main(String[ ] args) {
        Scanner sc = new Scanner(System.in);
        
        int[] coins = {500, 100, 50, 10, 5, 1};
        int price = sc.nextInt();
        int change = 1000 - price;
        int order = 0;
        int count = 0;
        
        while(change > 0) {
            if(change < coins[order]) {
                order++;
            } else {
                change -= coins[order];
                count++;
            }
        }
        
        System.out.println(count);
        
    }
}


// 위 답안의 while문 블럭 줄을 더 줄여서 해결해보았다.

class Main {
    public static void main(String[ ] args) {
        Scanner sc = new Scanner(System.in);
        
        int[] coins = {500, 100, 50, 10, 5, 1};
        int price = sc.nextInt();
        int change = 1000 - price;
        int order = 0;
        int count = 0;
        
        while(change > 0) {
            count += (change / coins[order]);
            change %= coins[order];
            order++;
        }
        
        System.out.println(count);
        
    }
}


// 백준 알고리즘 11047번
// 동전 0 [https://www.acmicpc.net/problem/11047]
// 거스름돈과 매우 유사한 문제...

class Main {
    public static void main(String[ ] args) {
        Scanner sc = new Scanner(System.in);

		int n = sc.nextInt();
		int k = sc.nextInt();
		int unit[] = new int[n];
		
		for (int i = 0; i < n; i++) {
            unit[i] = sc.nextInt();
		}
		
		Arrays.sort(unit);
		int count = 0;
		
		for(int j=unit.length-1; j>=0; j--) {
            count += k / unit[j];
            k %= unit[j];
		}
        
        System.out.println(count);
    }
}

// 백준 알고리즘 2178번
// 미로탐색 (https://www.acmicpc.net/problem/2178)
// 저번 주 코테 숙제였으나 뒤늦게... 해봤다.
// 얼추 본 기억에 의존해서 풀어보려고 했으나 역시나 틀렸다.
// BFS보다 DFS를 더 많이 풀어봤는데, 미로탐색은 다들 BFS를 이용해 풀었다.
// 최단 거리를 구하는 건 DFS보다 BFS가 더 적합하단 글을 읽고 납득이 갔다.
// BFS를 이용해서 풀려면 Queue를 이용해야하는데, 남의 답을 보고 나니 왜 그런지 알 것 같다.
// 앞으로 좀 더 미로 관련 문제를 풀어봐야겠다.

class Main {
        static int rows;
        static int cols;
        static int[][] maze;
        static boolean[][] visited;
        static int cnt = 0;
        static int[] x = {0, 1, 0, -1};
        static int[] y = {-1, 0, 1, 0};

    public static void main(String[ ] args) {
    
        Scanner sc = new Scanner(System.in);
        
        // 미로 크기 받아오기 
        rows = sc.nextInt();
        cols = sc.nextInt();
        maze = new int[rows][cols];
        visited = new boolean[rows][cols];
        
        // 미로 만들기
        for(int i=0; i<rows; i++) {
            String input = sc.next();
            
            for(int j=0; j<cols; j++) {
                maze[i][j] = (int) input.charAt(j) - 48;
            }
        }
        
        move(0,0);    
        
        System.out.print(maze[rows-1][cols-1]);

    }
    
    
    public static void move(int currentX, int currentY){
        Queue<Integer> xMove = new LinkedList<>();
        Queue<Integer> yMove = new LinkedList<>();
        
        xMove.add(currentX);
        yMove.add(currentY);
        
        while(!xMove.isEmpty() && !yMove.isEmpty()) {
            currentX = xMove.poll();
            currentY = yMove.poll();
            visited[currentX][currentY] = true;
            
            for(int i=0; i<x.length; i++) {
                int dirX = currentX + x[i];
                int dirY = currentY + y[i];
                
                if(dirX >= 0 && dirY >= 0 && dirX < rows && dirY < cols) {
                    
                    if(maze[dirX][dirY] == 1 && !visited[dirX][dirY]) {
                        xMove.add(dirX);
                        yMove.add(dirY);
                        visited[dirX][dirY] = true;
                        maze[dirX][dirY] = maze[currentX][currentY] + 1;
                    }
                    
                }
                
            }
            
        }
    }
}



// 백준 알고리즘 1012번
// 유기농 배추 (https://www.acmicpc.net/problem/1012)
// 어렵다고 생각했는데, 결국엔 DFS가 끝날 때마다 카운트를 올리면 되는 거였다.
// 그래도 푸는데 헤맸다..^^
// 심지어 남의 해결법 보고 다시 했는데도 안 되서 뭐가 문제인지 보는데
// 좌표값을 잘못 입력했었다 답답...

class Main {
    static int t,m,n,k;
    static int[][] farm;
    static int[] dx = {0, 1, 0, -1};
    static int[] dy = {-1, 0, 1, 0};
    static int cnt = 0;

    public static void main(String[ ] args) {
    
        Scanner sc = new Scanner(System.in);
        
        t = sc.nextInt();
        m = sc.nextInt();
        n = sc.nextInt();
        k = sc.nextInt();

        farm = new int[m][n];
        
        for(int i=0; i<k; i++) {
            int x = sc.nextInt();
            int y = sc.nextInt();
            farm[x][y] = 1;
        }
        
        sc.close();
        
        for(int i=0; i<m; i++) {
            for(int j=0; j<n; j++) {
                
                if(farm[i][j] == 1) {
                    System.out.println(farm[i][j]);
                    bfs(i, j);
                    cnt++;
                }
                
                
            }
        }
        
        
        
        System.out.println(cnt);
    }
    
    public static void bfs(int dirX, int dirY) {
        Queue<Integer> xMove = new LinkedList<>();
        Queue<Integer> yMove = new LinkedList<>();
        
        xMove.add(dirX);
        yMove.add(dirY);
        
        while(!xMove.isEmpty() && !yMove.isEmpty()) {
            
            int newX = xMove.poll();
            int newY = yMove.poll();
            
            farm[newX][newY] = 0;

            for(int i=0; i<dx.length; i++) {
                
                int xCoord = newX + dx[i];
                int yCoord = newY + dy[i];
                
                if(xCoord >= 0 && yCoord >=0 && xCoord < m && yCoord < n) {
                System.out.println("[ "  + xCoord +", "+ yCoord+" ]");
                
                    if(farm[xCoord][yCoord] == 1) {
                        farm[xCoord][yCoord] = 0;
                        xMove.add(xCoord);
                        yMove.add(yCoord);
                    } else {
                        continue;
                    }
                    
                } else {
                    continue;
                }     
            }
            
        }
    }
}



// 술래잡기 
// 상아랑 같이 해결...
// 시간은 오래 걸렸지만 여튼 작동이 됨

public class NHNQuiz1 {
	public static class Node {
	
        char name;
        Node next;
        int taggerTimes;

        public Node(char name, Node next, int taggerTimes){
            this.name = name;
            this.next = next;
            this.taggerTimes = taggerTimes;
        }
	}

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		LinkedList<Node> players = new LinkedList<>();
		HashMap<Character, Integer> quickPlayers = new HashMap<>();
		Node tagger = new Node('A', null, 1);
		
		
        int numOfPlayers = sc.nextInt();

		for(int i=0; i<numOfPlayers-1; i++) {
            char name = (char)(i+66);
	
            Node player = new Node(name, null, 0);
            players.add(player);
            
            if(i>0) {
                players.get(i-1).next = players.get(i);
            }
            if(i == numOfPlayers-2) {
                players.get(i).next = players.get(0);
            }
		}
		
		
		int numOfQuickPlayers = sc.nextInt();
		
		for(int i=0; i<numOfQuickPlayers; i++) {
			quickPlayers.put(sc.next().toCharArray()[0], 1);
		}
		
		int numOfGames = sc.nextInt();
		int taggerLocation = 0;
		
		
		for(int i=0; i<numOfGames; i++) {
			int numOfMovesGame = sc.nextInt();
			int playerNum = numOfPlayers -1;
			taggerLocation = (taggerLocation+numOfMovesGame + playerNum) % (playerNum);
			System.out.println("이동횟수 : "+numOfMovesGame );
			System.out.println("술래의 위치 : "+taggerLocation );
			char playerName = players.get(taggerLocation).name;
			
			if(quickPlayers.containsKey(playerName)) {
				// 잡히지 않음
				tagger.taggerTimes += 1;
			} else {
				// 잡힘
				
				// 잡힌 사람
				Node newTagger = players.get(taggerLocation);
				
				players.get((taggerLocation-1+playerNum)%playerNum).next = tagger;
				tagger.next = players.get((taggerLocation+1+playerNum)%playerNum);
				players.remove(taggerLocation);
				players.add(taggerLocation, tagger);
				
				tagger = newTagger;
				tagger.taggerTimes += 1;
			}
		}
		
		for(int i=0; i<players.size(); i++) {
			System.out.println(players.get(i).name+ "가 걸린 횟수 : " + players.get(i).taggerTimes);
		}
		
		System.out.println(tagger.name+ "가 걸린 횟수 : " + tagger.taggerTimes);
		
		sc.close();
		
	}
}

// TODO: 아직 안됨ㅠㅠㅠㅠㅠ
// 시멘트 사용량 구하기 (NHN)
// 나름대로 좋은 접근법을 만들었다 생각했으나 실패 .... 

public class NHNQuiz2 {
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		int workingDays = Integer.parseInt(sc.nextLine());
		int width = Integer.parseInt(sc.nextLine());
		Integer[] area = new Integer[width];
		Integer[] rank = new Integer[width];
		Arrays.fill(area, 0);
		int cementAmount = 0;
		
		for(int i=0; i<workingDays; i++) {
			boolean[] isFilled = new boolean[width];
			Arrays.fill(isFilled, false);
			
			String[] areaStr = sc.nextLine().split(" ");
			
			System.out.println(i+"일 째 ");
			
			for(int j=0; j<areaStr.length; j++) {
				area[j] += Integer.parseInt(areaStr[j]);
				System.out.println("각각의 높이 " + Integer.parseInt(areaStr[j]));
				System.out.println("area["+j+"] :  "+area[j]);
				rank[j] = area[j];
			}
			
			Arrays.sort(rank, Collections.reverseOrder());
			
			int top = rank[0];
			int topIndex = Arrays.asList(area).indexOf(top);
			isFilled[topIndex] = true;

			// 시멘트 채우기 
			for(int k=1; k<rank.length; k++) {
				int second = rank[k];
				int secondIndex = Arrays.asList(area).indexOf(second);
				
				int minVal = Math.min(topIndex, secondIndex);
				int maxVal = Math.max(topIndex, secondIndex);
				System.out.println("second : " + second);

				
				if(Math.abs(top-second)==1) {
					continue;
				} else if(secondIndex != -1){
					System.out.println("secondIndex : " + secondIndex);
					isFilled[secondIndex] = true;
					
					for(int m=minVal; m<maxVal; m++) {
						if(!isFilled[m]) {
							System.out.println("채워지는 시멘트양 : " + (Math.abs(second - area[m])));
							cementAmount += (second - area[m]);
							area[m] += (second-area[m]);
							isFilled[m] = true;							
						}
					}
				}
				
			}
			
			System.out.println(i +"번째 날 채워진 총 시멘트 양 : " + cementAmount);
			
		}
		
		
		System.out.println("시멘트양 : "+cementAmount);
		
		sc.close();
		
	}
}


// 프로그래머스 
// 코딩테스트 연습 [그래프]
// 가장 먼 노드


// 실패한 코드 1
// 예시 테스트 케이스는 통과했는데, 제출하면 다 틀린다 ㅠ_ㅠ

class Solution {
    int[][] chart;
    boolean[] visited;
    int cnt = 0;
    
    public int solution(int n, int[][] edge) {
        int answer = 0;

        chart = new int[n+1][n+1];
        visited = new boolean[n+1];
            
        for(int i=0; i<edge.length; i++) {
            int start = edge[i][0];
            int end = edge[i][1];
            
            chart[start][end] = 1;
        }    
            
        dfs(1, chart);
    
        return cnt;
    }
    
    public void dfs(int start, int[][] edge){
        
        for(int i=2; i<chart[0].length; i++) {
            if(!visited[i-1] && edge[start][i] == 1) {
                visited[i-1] = true;
                
                dfs(i, edge);
            } else if (!visited[i-1] && edge[start][i] == 0) {
                visited[i-1] = true;
                cnt++;
            }
            
        }        
        
    }
}


// 실패한 코드 2
// 남의 글 보다가, 인접행렬 대신 인접리스트를 써야한다고 했으나...
// 또 실패 ㅠ.... 오늘은 머리가 돌아가지 않는거 같으니 포기...

//package practice_data_structures;
//
//import java.io.*;
//import java.math.*;
//import java.security.*;
//import java.text.*;
//import java.util.*;
//import java.util.concurrent.*;
//import java.util.regex.*;
//
//public class Solution {
//
//    // Complete the arrayManipulation function below.
//    static long arrayManipulation(int n, int[][] queries) {
//        long[] arr = new long[n];
//        long max = 0;
//      
//        for(int i=0; i<queries.length; i++){
//            for(int j=queries[i][0]; j<=queries[i][1]; j++){
//                arr[j-1] += queries[i][2];
//            }
//        }
//
//        for (long item : arr) {
//        	
//            if (item > max) {
//                max = item;
//            }
//        }
//
//        return max;
//    }
//
//    private static final Scanner scanner = new Scanner(System.in);
//
//    public static void main(String[] args) throws IOException {
//        //BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));
//
//        String[] nm = scanner.nextLine().split(" ");
//
//        int n = Integer.parseInt(nm[0]);
//
//        int m = Integer.parseInt(nm[1]);
//
//        int[][] queries = new int[m][3];
//
//        for (int i = 0; i < m; i++) {
//            String[] queriesRowItems = scanner.nextLine().split(" ");
//            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");
//
//            for (int j = 0; j < 3; j++) {
//                int queriesItem = Integer.parseInt(queriesRowItems[j]);
//                queries[i][j] = queriesItem;
//            }
//        }
//        
//
//        long result = arrayManipulation(n, queries);
//
//       // bufferedWriter.write(String.valueOf(result));
//        //bufferedWriter.newLine();
//
////        bufferedWriter.close();
//
//        System.out.println(result);
//        scanner.close();
//    }
//}

class Node {
    int val;
    LinkedList<Node> next;
    
    public Node(int val) {
        this.val = val;
        next = new LinkedList<>();
    }
}

class Solution {
    LinkedList<Node> adjacentList;
    boolean[] visited;
    int cnt = 0;
    
    public int solution(int n, int[][] edge) {
        int answer = 0;

        adjacentList = new LinkedList<>();
        visited = new boolean[n+1];
            
        for(int i=0; i<n; i++) {
            Node node = new Node(i+1);
            adjacentList.add(node);
        }    
            
        for(int i=0; i<edge.length; i++) {
            int start = edge[i][0];
            int end = edge[i][1];
            
//            if(adjacentList.get(start-1).next == null) {
//            	System.out.println("초기화 됨 ");
//            	adjacentList.get(start-1).next = new LinkedList<Node>();
//            }
//            
//            if(adjacentList.get(end-1).next == null) {
//            	adjacentList.get(start-1).next = new LinkedList<Node>();
//            }
            
            adjacentList.get(start-1).next.add(adjacentList.get(end-1));
            adjacentList.get(end-1).next.add(adjacentList.get(start-1));
        }    
            
//        visited[0] = true;
        dfs(adjacentList.get(0));
    
        return cnt;
    }
    
    public void dfs(Node vertex){
        
        visited[vertex.val-1] = true;
        System.out.println("next의 사이즈 : " + vertex.next.size());

        for(Node n : vertex.next) {
            System.out.println("현재 정점 값 :  " + n.val);
            
            if(!visited[n.val-1] && n.next.size() > 0) {
                dfs(n);
            } else if(n.next.size() <= 2) {
                System.out.println(n.val);
                System.out.println("자식이 없네...");
                cnt++;
            } else {
                continue;
            } 
        }

        
    }
    
    // public static void main(String[] args) {
        
    //     Solution s = new Solution();
    //     int[][] test = {{3, 6}, {4, 3}, {3, 2}, {1, 3}, {1, 2}, {2, 4}, {5, 2}};
        
        
    //     int answer = s.solution(6, test);
    //     System.out.println(answer);
    // }
    
    
}



// 백준 2606번 바이러스 [https://www.acmicpc.net/problem/2606 ]
// 자바스크립트 && 인접행렬을 이용해 풀었던 문제를 
// 자바 && 리스트를 이용해 풀었다!!!!

public class Virus {
	
	static int numOfComs;
	static int numOfPairs;
	static Com[] coms;
	static int cnt = -1;
	
	public static class Com {
		int val;
		boolean visited;
		LinkedList<Com> connected;
		
		public Com(int val) {
			this.val = val;
			visited = false;
		}
	}
	
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		numOfComs = sc.nextInt();
		coms = new Com[numOfComs];
		numOfPairs = sc.nextInt();
		
		for(int i=0; i<numOfComs; i++) {
			coms[i] = new Com(i+1);
		}
		
		for(int i=0; i<numOfPairs; i++) {
			int firstComNo = sc.nextInt();
			int secondComNo = sc.nextInt();
			
			Com firstCom = coms[firstComNo-1];
			Com secondCom = coms[secondComNo-1];
			
			if(firstCom.connected == null) {
				firstCom.connected = new LinkedList<Com>();
			}

			if(secondCom.connected == null) {
				secondCom.connected = new LinkedList<Com>();
			}
			
			firstCom.connected.add(secondCom);
			secondCom.connected.add(firstCom);
		}
		
		
		checkInfected(coms[0]);
		
		
		for(int i=0; i<coms.length; i++) {
			if(coms[i].visited) {
				cnt++;
			}
		}
		
		System.out.println(cnt);
		
		sc.close();
		
	}
	
	
	public static void checkInfected(Com com) {
		
		com.visited = true;
		
		for(Com unit : com.connected) {
			if(!unit.visited) {
				checkInfected(unit);				
			}
		}
		
	}
}


// 백준 1012번
// 유기농배추 [https://www.acmicpc.net/problem/1012]
// 다시 풀어봄!!!! 근데 틀었다!!!!!!!


public class OrganicCabbage {
	
	static int numOfCases;
	static int m, n, k, numOfWorms;
	static int[][] farm;
	static int[] dx = {0, 1, 0, -1};
	static int[] dy = {-1, 0, 1, 0};
	
	public static void main(String[] args) {
	
		Scanner sc = new Scanner(System.in);
		
		numOfCases = sc.nextInt();
		
		for(int i=0; i<numOfCases; i++) {
			
			m = sc.nextInt();
			n = sc.nextInt();
			k = sc.nextInt();
			numOfWorms = 0;
			
			farm = new int[m][n];
			
			for(int j=0; j<k; j++) {
				int row = sc.nextInt();
				int col = sc.nextInt();
				
				farm[row][col] = 1;
			}
			
			
			
			for(int k=0; k<n; k++) {
				for(int l=0; l<m; l++) {
					System.out.print("["+l+", " +k +"]  ");
					if(farm[l][k] == 1) {
						countWorms(l,k);
						numOfWorms++;
					}
				}
				System.out.println(" ");
			}
			
			System.out.println(numOfWorms);
		}
		
		sc.close();
	}
	
	public static void countWorms(int x, int y) {
		
		farm[x][y] = 0;
		Queue<Integer> xDirection = new LinkedList<>();
		Queue<Integer> yDirection = new LinkedList<>();
		//System.out.println("* 들어온 위치 : " +  "[" + x+","+y+"]");
		
		xDirection.add(x);
		yDirection.add(y);
		
		while(!xDirection.isEmpty() && !yDirection.isEmpty()) {
			
			int xPos = xDirection.poll();
			int yPos = yDirection.poll();
			
			for(int i=0; i<4; i++) {
				int newX = xPos + dx[i];
				int newY = yPos + dy[i];
				
				if(newX >= 0 && newY >=0 && newX < m && newY < n) {
					
					if(farm[newX][newY] == 1) {
						xDirection.add(newX);
						yDirection.add(newY);
						farm[newX][newY] = 0;
					} else {
						continue;
					}
					
				}				
				
			}
		}
	}
}


// 작물 영역 찾기!!!!

public class Main {
	static int[] dx = {0, 1, 0, -1};
	static int[] dy = {-1, 0, 1, 0};
	static int n;
	static int[] numOfCrops = new int[3];
	
	public static class Coords {
		int x;
		int y;
		
		public Coords(int x, int y) {
			this.x = x;
			this.y = y;
		}
	}
	
	public static void main(String[] args) {
		int[][] v = {{0,0,1,1},{1,1,1,1},{2,2,2,1},{0,0,0,2}};	
		n = v.length;
		
		for(int row=0; row<n; row++) {
			for(int col=0; col<n; col++) {
				if(v[row][col] != -1) {
					int type = v[row][col];
					v[row][col] = -1;
					search(type, row, col, v);
					numOfCrops[type]++;
				}
			}
		}
		
		System.out.println(numOfCrops[0]);
		System.out.println(numOfCrops[1]);
		System.out.println(numOfCrops[2]);
	
	}
	
	public static void search(int type, int row, int col, int[][] v) {
		Queue<Coords> moves = new LinkedList<>();
		
		moves.add(new Coords(row, col));
		
		while(!moves.isEmpty()) {
			Coords move = moves.poll();
			for(int i=0; i<4; i++) {
				int xPos = move.x + dx[i];
				int yPos = move.y + dy[i];
				
				if(xPos >= 0 && yPos >=0 && xPos < n && yPos < n) {
					if(type == v[xPos][yPos]) {
						v[xPos][yPos] = -1;
						moves.add(new Coords(xPos, yPos));
					}
				}
			}
		}
	}
}


// 상아가 가져온 복호화 문제 
// 이론은 어렵지 않은데....
// 하는데 엄청 애썼다... 그런데 주어진 text보다 rotation이 크면 문자열 회전이 제대로 되지 않는다 ㅠ_ㅠ
// 이 부분을 다시 연구해보아야겠다....
// 2020.11.09 - rotation이 text보다 커도 문제없이 문자열 회전이 된다!!!

public class Main {
	public static void main(String[] args) {
		String text = "qyyigoptvfb";
		String key = "abcdefghijk";
		char[] keyChart = new char[26];
		int rotation = 3;
		int strLength = text.length();
						
		if (rotation > strLength) {
			rotation %= strLength;
		}

		for(int i=0; i<keyChart.length; i++) {
			keyChart[i] = (char) ('a'+i);
		}
		
		String result = rotation > 0 ? leftrotate(text, rotation) : rightrotate(text, Math.abs(rotation));
	
		char[] charText = result.toCharArray();
		char[] keyText = key.toCharArray();
		
		System.out.println("result : " + result);
		
		for(int i=0; i<strLength; i++) {
			int index = charText[i] - keyText[i] > 0 ? charText[i] - keyText[i] : charText[i] - keyText[i] + 26 ;
			System.out.print(keyChart[index-1]);
		}
		
	}
	
	
	static String leftrotate(String str, int d) {
            String ans = str.substring(d) + str.substring(0, d);
            return ans;
    }

    // function that rotates s towards right by d 
    static String rightrotate(String str, int d) {
            return leftrotate(str, str.length() - d);
    }
}



// 시험 부정행위자 찾아내기
// 알듯 말듯 모르겠다 ㅠㅠㅠ....


public class Main {
    public static class Examinee {
		String no;
		HashMap<Integer, Integer> scores = new HashMap<>();
		
		
		public Examinee(String no) {
			this.no = no;
		}
	}
	
	public static void main(String[] args) {
	
		
		
		String[] logs = {"0001 3 95", "0001 5 90", "0001 5 100", "0002 3 95", "0001 7 80", "0001 8 80",
                        "0001 10 90", "0002 10 90", "0002 7 80", "0002 8 80", "0002 5 100", "0003 99 90"};
		HashMap<String, Examinee> examinees = new HashMap<>();
		Set<String> examineesList = new HashSet<>();
//		ArrayList<Examinee> examinees = new ArrayList<>();
		
		Comparator<String> comparator =  new Comparator<String>() {
			@Override
			public int compare(String log1, String log2) {
				int quizNo1 = Integer.parseInt(log1.substring(5, 7).trim());
				int quizNo2 = Integer.parseInt(log2.substring(5, 7).trim());
                int point1 = Integer.parseInt(log1.substring(8));
                int point2 = Integer.parseInt(log2.substring(8));
				
                if(quizNo1 == quizNo2) {
                    return point1 - point2 > 0 ? 1 : -1;
                }
                
                return quizNo1 - quizNo2 > 0 ? 1 : -1; 
            }
		};
		
		Arrays.sort(logs, comparator);

		for(int i=0; i<logs.length-1; i++) {
			String key = logs[i].substring(0, 4);
			int quizNo = Integer.parseInt(logs[i].substring(5, 7).trim());
			int point = Integer.parseInt(logs[i].substring(8));
		}
		
		
		for(String log : logs) {
			System.out.println(log);
		
			String key = log.substring(0, 4);
			int quizNo = Integer.parseInt(log.substring(5, 7).trim());
			int point = Integer.parseInt(log.substring(8));
			
			examineesList.add(key);
			if(examinees.containsKey(key)) {
				examinees.get(key).scores.put(quizNo, point);
			} else {
				Examinee examinee = new Examinee(key);
				examinee.scores.put(quizNo, point);
				
				examinees.put(key, examinee);
			}
			
		}

	}
}



// 버튼 누르기 게임
// 상아랑 같이 풀어본 문제
// 완전탐색을 열심히 공부한 결과, 해결!!

public class NumberPadGame {

	static int[] dx = {0, 1, 0, -1};
	static int[] dy = {-1, 0, 1, 0};
	static int n = 4, answer = 0, enter = 1;
	static int currentX = 0, currentY = 0;
	static int[][] visited = new int[n][n];
	
	public static class Button implements Comparable<Button> {
		int number, x, y;
		
		public Button(int number, int y, int x) {
			this.number = number;
			this.x = x;
			this.y = y;
		}

		@Override
		public int compareTo(Button o) {
			return this.number - o.number > 0 ? 1 : -1;
		}
	}
	
	public static void main(String[] args) {
		
//		int[][] board = {{3,5,6}, {9,2,7}, {4,1,8}};
//		int[][] board = {{2,3}, {4,1}};
		int[][] board = {{11, 9, 8, 12}, {2, 15, 4, 14}, {1, 10, 16, 3}, {13, 7, 5, 6}};
		Button[] numPad = new Button[(int) Math.pow(n, 2)];
		int index = 0;
		
		for(int i=0; i<board.length; i++) {
			for(int j=0; j<board[0].length; j++) {
				numPad[index++] = new Button(board[i][j], i, j);
			}
		}

		Arrays.sort(numPad);
		
		
		for(Button b : numPad) {
			search(b);
			answer += enter;
		}
		
		System.out.println(answer);
	}
	
	public static void search(Button btn) {
		Queue<Integer> xMove = new LinkedList<>();
		Queue<Integer> yMove = new LinkedList<>();

		xMove.add(currentX);
		yMove.add(currentY);
		
		while(!xMove.isEmpty() && !yMove.isEmpty()) {
			int x = xMove.poll();
			int y = yMove.poll();
			
			System.out.println("x : " + x);
			System.out.println("y : " + y);
			
			for(int i=0; i<4; i++) {
				int xPos = (x+dx[i]+n) % n;
				int yPos = (y+dy[i]+n) % n;

				System.out.println("[" + yPos + "," + xPos +"]");
				visited[xPos][yPos] = visited[x][y] + 1;
				
				xMove.add(xPos);
				yMove.add(yPos);
				
				if(xPos == btn.x && yPos == btn.y) {
					System.out.println("찾았다!!!");
					answer += visited[xPos][yPos];
					currentX = xPos;
					currentY = yPos;
					visited = new int[n][n];
					return;
				}
				
				if(visited[xPos][yPos] != 0) {
					continue;
				}

			}
			
		}
	}
	
}


// 시험 부정행위자 찾아내기 퀴즈
// 어찌저찌 풀긴 했지만, 타임아웃이 확실하다...
// 더 좋은 방법이 궁금하다...

public static class Examinee implements Comparable<Examinee>{
	String no;
	HashMap<Integer, Integer> scores = new HashMap<>();
	
	
	public Examinee(String no) {
		this.no = no;
	}


	@Override
	public int compareTo(Examinee o) {
		return Integer.parseInt(this.no) - Integer.parseInt(o.no) > 0 ? 1 : -1;
	}
}

public static void main(String[] args) {

	String[] logs = {"0001 3 95", "0001 5 90", "0001 5 100", "0002 3 95", "0001 7 80", "0001 8 80",
					"0001 10 90", "0002 10 90", "0002 7 80", "0002 8 80", "0002 5 100", "0003 99 90"};
//		String[] logs = {"1901 1 100", "1901 2 100", "1901 4 100", "1901 7 100", "1901 8 100", "1902 2 100", "1902 1 100", "1902 7 100", "1902 4 100", "1902 8 100", "1903 8 100", "1903 7 100", "1903 4 100", "1903 2 100", "1903 1 100", "2001 1 100", "2001 2 100", "2001 4 100", "2001 7 95", "2001 9 100", "2002 1 95", "2002 2 100", "2002 4 100", "2002 7 100", "2002 9 100"};
//		String[] logs = {"1901 10 50", "1909 10 50"} ;
	HashMap<String, Examinee> exMap = new HashMap<>();
	ArrayList<Examinee> exList = new ArrayList<>();
	HashMap<String, String> finalList = new HashMap<>();
	ArrayList<String> answer = new ArrayList<>();
	
	for(String log : logs) {
		String key = log.substring(0, 4);
		int quizNo = Integer.parseInt(log.substring(5, 7).trim());
		int point = Integer.parseInt(log.substring(7).trim());
		
		
		if(exMap.containsKey(key)) {
			exMap.get(key).scores.put(quizNo, point);
		} else {
			Examinee examinee = new Examinee(key);
			examinee.scores.put(quizNo, point);
			
			exMap.put(key, examinee);
		}
		
	}

	
	exMap.forEach((key, value)->{
		exList.add(value);
	});

	
	List<Examinee> over5Quiz = exList.stream().filter((examinee)->{
		System.out.println(examinee.no + "의 사이즈 : " + examinee.scores.size());
		if(examinee.scores.size() < 5) {
			return false;
		}
		return examinee.scores.size() >= 5;
	}).sorted().collect(Collectors.<Examinee>toList());
	
	System.out.println(over5Quiz.size());
	
	for(int i=0; i<over5Quiz.size(); i++) {
		Examinee examinee1 = over5Quiz.get(i);
		Examinee examinee2 = over5Quiz.get((i+1+over5Quiz.size()) % over5Quiz.size());
		
		if(examinee1.scores.toString().equals(examinee2.scores.toString())) {
			
			if(!finalList.containsKey(examinee1.no)) {
				answer.add(examinee1.no);
			}
			if(!finalList.containsKey(examinee2.no)) {
				answer.add(examinee2.no);
			}
			
			finalList.put(examinee1.no, examinee1.no);
			finalList.put(examinee2.no ,examinee2.no);
		} 
		
	}
	
	answer.sort(new Comparator<String>() {

		@Override
		public int compare(String o1, String o2) {
			int val1 = Integer.parseInt(o1);
			int val2 = Integer.parseInt(o2);
			return val1-val2 > 0 ? 1 : -1;
		}
		
	});
	
	if(answer.size() == 0) {
		System.out.println("none");
	} else {
		for(String s : answer) {
			System.out.print(s + " ");
		}
	}
	
}