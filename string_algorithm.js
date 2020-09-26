
// 2020.09.26
// Brute-Force substring search algorithm
// 주어진 패턴 문자열이 텍스트에 존재하는지 검색하는 알고리즘
// N개의 문자열이 있는 텍스트에 M개의 문자열이 있는 패턴을 검색한다면
// 시간복잡성은 O(N*M)이 되므로 효율성이 떨어짐


function brute_force_search(text, pattern){
    for(let i=0; i<=text.length - pattern.length; i++) {    // 텍스트 문자열에서 (패턴 문자열 길이 -1)만큼만 검사하면 됨
        let j;

        for(j=0; j<pattern.length; j++) {
            if(text[i+j] !== pattern[j]) {
                break;
            }   
        }

        if(j==pattern.length) {
            return i;
        }
    }

    return text.length;
}