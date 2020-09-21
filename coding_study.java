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
                String clothing = scan.nextLine();
                String type = clothing.split(" ")[1];

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