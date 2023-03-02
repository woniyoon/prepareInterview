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





// 해시테이블 구현

class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  // 해시 함수
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i=0; i<Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      
      total = ((total * WEIRD_PRIME) + value) % this.keyMap.length;
    }

    return total;
  }


  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      // 해당 key, value 페어를 처음 넣는 경우
      this.keyMap[index] = [[key, value]];
    } else {
      let foundIdx = -1;

      // 이미 저장돼있는 key, value 페어의 경우 인덱스 저장
      for (let i=0; i<this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          foundIdx = i;
        } 
      }

      // 이미 저장돼있는 페어값이면 value만 업데이트, 없으면 push
      if (foundIdx > -1) {
        this.keyMap[index][foundIdx][1] = value;
      } else {
        this.keyMap[index].push([key, value]);
      }
    }

  }

  get(key) {
    let index = this._hash(key);

    if (this.keyMap[index]){
      for(let i=0; i<this.keyMap[index].length; i++) {
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        } 
      }
      return this.keyMap[index]
    }

    return undefined;
  }


  keys() {
    let result = [];

    for (let i=0; i<this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j=0; j<this.keyMap[i].length; j++) {
          let pair = this.keyMap[i][j];
          // 중복을 허용하지 않는 경우
          // 튜토리얼 상에서는 중복 고려없이 무조건 push를 했기 때문에 이런 분기처리가 가능하나
          // 작성한 소스코드는 이미 중복된 키값에 대해서는 overwrite되기 때문에 필요없음
          // if (!result.includes(pair[0])) {
            result.push(pair[0]);
          // }
        } 
      }
    }

    return result;
  }

  values() {
    let result = [];

    for (let i=0; i<this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j=0; j<this.keyMap[i].length; j++) {
          let pair = this.keyMap[i][j];
          // 중복을 허용하지 않는 경우
          // if (!result.includes(pair[1])) {
            result.push(pair[1]);
          // }
        } 
      }
    }

    return result;
  }
}

let d = new HashTable(10);
d.set("pink", 100);
d.set("melon", 100);
d.set("red", 100);
d.set("cyan", 100);
d.set("hi", 100);
d.get("melon")      // 100
d.set("melon", 200) // 값 변경
d.get("melon")      // 200
d.get("none")       // undefined



// Big O notation of Hash Tables
// Best case / Average case
// (해시함수가 얼마나 잘 만들어져는지에 달려있음)
// 삽입: O(1)
// 삭제: O(1)
// 접근: O(1)

// Worst case
// 삽입: O(n)
// 삭제: O(n)
// 접근: O(n)