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