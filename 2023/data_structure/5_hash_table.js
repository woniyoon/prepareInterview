// key, value 구조의 데이터
// 거의 모든 프로그래밍 언어에서 build-in으로 제공
//    ex) 자바스크립트 Map, Object
//        자바 Map,
//        파이썬 Dictionary, ...
// hash function을 이용
//    reliability & deterministic & constant time
// 1. 특정 키값을 넣었을 때 항상 동일한 index가 나와야함
// 2. hash function의 시간복잡도는 항상 균일해야함 


// 예제 1
// key값의 각 글자의 코드값을 더하고 modulo 연산자를 이용해
// 100이 넘지 않는 index값을 구함
//
// 문제점
//  1. 인덱스값 이 중복되는 경우가 생김
//  2. hash 함수의 연산속도가 균일하지 않고 key 글자길이에 따라 달라짐    
function hash(key, arrLen) {
  let total = 0;

  for (let i=0; i<key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0)-96;
    total = (total+value) % arrLen;
  }

  return total;
}

hash("cyan", 10);    // 3
hash("pink", 10);    // 0
hash("red", 10);     // 7
hash("orange", 10);  // 0


// 예제 2
// 반복문이 최대 100번까지만 돌기 때문에 균일한 시간복잡도
// 해시 함수에서 소수를 사용하면 키를 널리 분포하는데 도움이 됨 -> 충돌될 가능성이 줄어듦
// 배열의 길이가 소수일 경우에도 도움이 됨
//
// 문제점
//  1. 여전히 인덱스값이 중복됨

function hash2(key, arrLen) {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i=0; i<Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0)-96;
    total = ((total * WEIRD_PRIME) + value) % arrLen;
  }

  return total;
}

hash("hi", 13)       // 10
hash("cyan", 13);    // 5
hash("pink", 13);    // 5


// 해시 함수 충돌 해결책
// 1. Separate Chaining (개별체이닝)
//    - 이중데이터 구조 이용 (해당 인덱스 내에 또 다른 자료구조를 사용 ex) 배열, 연결리스트,...)
// 2. Linear Probing (직선 탐색법)
//    - 충돌난 인덱스 이후의 빈 공간을 찾아 그곳에 key, value를 저장
