// 2020.08.29
// 프로그래머스 코딩테스트 연습 해시
// 2. 전화번호 목록

// 해결책 (O)
// 그러나 Hash를 쓰지 않았음...
// 다시 생각해보자 

// 채점 결과
// 정확성: 84.6
// 효율성: 15.4
// 합계: 100.0 / 100.0

import java.util.Arrays;

class Solution {
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