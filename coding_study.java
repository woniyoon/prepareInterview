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
        
        for(int i=1; i<=number; i++) {
            if(i%2==0) {
                cardDeck.add(i);
            }
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

        for(int i=0; i<testCaseNum; i++) {
            HashMap<String, Integer> closet = new HashMap<>();
            int numOfClothing = Integer.parseInt(scan.nextLine());

            for(int j=0; j<numOfClothing; j++) {
                String clothing = scan.nextLine();
                String type = clothing.split(" ")[1];
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