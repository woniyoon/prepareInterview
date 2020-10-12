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