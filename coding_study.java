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


// 1. 실패한 코드
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
