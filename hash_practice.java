// 2020.08.29
// 프로그래머스 코딩테스트 연습 해시
// 2. 전화번호 목록

// 해결책 (O)
// 컬렉션의 sort메소드와 String 클래스의 startsWith 메소드를 이용

// 채점 결과
// 정확성: 84.6
// 효율성: 15.4
// 합계: 100.0 / 100.0

import java.util.*;

class Solution1 {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        
        Arrays.sort(phone_book);
        
        for(int i=0; i<phone_book.length-1; i++) {
            if(phone_book[i+1].startsWith(phone_book[i])) {
                answer = false;
            }
            break;
        }
        
        return answer;
    }
}


// 2020.08.30
// 2. 전화번호 목록 
// Hash를 이용한 해결법
// 획기적이다 ㅠㅠ

class Solution2 {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        HashMap<String, Integer> map = new HashMap<>();
        
        
        for(int i=0; i<phone_book.length; i++) {
            for(int j=1; j<phone_book[i].length(); j++) {
                var str = phone_book[i].substring(0, j);
                map.put(str, 1);
            }
        }
        
        for(int k=0; k<phone_book.length; k++) {
            if(map.containsKey(phone_book[k])) {
                return false;
            }
        }
        
        return answer;
    }

}


// 2020.08.31
// 3. 위장

// 채점 결과
// 정확성: 28.6
// 합계: 28.6 / 100.0

class Solution3 {
    public int solution(String[][] clothes) {
        int answer = 0;
        int solo = 0;
        int combo = 1;
        HashMap<String, Integer> map = new HashMap<>();
        
        for(int i=0; i<clothes.length; i++) {
            String type = clothes[i][1];
            // 맵에 없는 카테고리값일 때
            if(!map.containsKey(clothes[i][1])) {
                map.put(type, 1);
            } else {
                int value = map.get(type);
                map.put(type, value+1);
            }
        }
        
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            
            if(map.size() > 1) {
                solo += entry.getValue();
            }   
            
            combo *= entry.getValue(); 
        }
        
        answer = solo + combo;
        return answer;
        
    }
}


// 남의 해결책을 본 결과
// 접근법은 옳았으나, 입지 않는 경우의 수를 생각하지 못해서 틀렸다 ㅠ_ㅠ
// 입지 않는 것 또한 경우의 수에 포함되므로 1을 더 해서 생각하면 됐다.


class Solution4 {
    public int solution(String[][] clothes) {
        int answer = 0;
        int combo = 1;
        HashMap<String, Integer> map = new HashMap<>();
        
        for(int i=0; i<clothes.length; i++) {
            String type = clothes[i][1];
            // 맵에 없는 카테고리값일 때
            if(!map.containsKey(clothes[i][1])) {
                map.put(type, 1);
            } else {
                int value = map.get(type);
                map.put(type, value+1);
            }
        }
        
        for (int value : map.values()) {
           combo *= (value + 1);
        }
        
        answer = combo -1;
        
        return answer;
        
    }
}


// 나는야 포켓몬 마스터 이다솜 [https://www.acmicpc.net/problem/1620]
// HashMap을 이용해서 풀었다!

class PokemonMaster {
    public static void main(String[ ] args) {
        
        Scanner scan = new Scanner(System.in);

        String[] mn = scan.nextLine().split(" ");
        int m = Integer.parseInt(mn[0]);
        int n = Integer.parseInt(mn[1]);
        
        HashMap<Integer, String> pokemonDic = new HashMap<>();
        HashMap<String, Integer> pokemonList = new HashMap<>();

        for(int i=0; i<m; i++) {
            String pokemon = scan.nextLine();
            
            pokemonDic.put(i+1, pokemon);
            pokemonList.put(pokemon, i+1);
        }
        
        for(int i=0; i<n; i++) {
            String searchInput = scan.nextLine();
            
            if(isNumeric(searchInput)) {
                System.out.println(pokemonDic.get(Integer.parseInt(searchInput)));
            } else {
                System.out.println(pokemonList.get(searchInput));
            }

        }
        
    }
    
    public static boolean isNumeric(String strNum) {
        if (strNum == null) {
            return false;
        }
        try {
            double d = Double.parseDouble(strNum);
        } catch (NumberFormatException nfe) {
            return false;
        }
        return true;
    }
}

