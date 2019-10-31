// let : 값을 재할당 할 수 있는 변수를 선언하는 키워드
let x = 1
// let x = 3
// x=3

// = print  -> live server 로 확인해보면 x의 값이 프린팅 되어있음
x = 4
// console.log(x)

// 블럭 유효 범위(block 단위 scope)를 갖는다.
if (x === 4) {
  let x = '안녕하세요'
  console.log(x)

  let message = '메세지입니다'
}

console.log(x)

let y
console.log(y)
// const : 값이 변하지 않는(재할당을 할 수 없는) 상수를 선언하는 키워드
// let과 동일하게 블록 유효 범위(block scope)를 가진다
// "모든" 선언에서 가능한 상수를 사용해야 한다.
// const로 선언할 때는 항상 값을 할당해줘야한다.
const MY_FAV = 20

if (MY_FAV === 20) {
  const MY_FAV = 30
  console.log(MY_FAV)
}

console.log(MY_FAV)


// 식별자  ( =변수명 )
// 반드시 문자, 달러($), 밑줄(_)로 시작해야한다.
// 대, 소문자 구분하고 class이름을 제외하고는 대문자로 시작하지 않는 것을 권장
// 예약어(const, let, class, return ..) 사용 불가

// 카멜 케이스(CamelCase)로 작성
// ex) 이벤트 핸들러 = 'on'으로 시작
const onClick = () => {}

// boolean값
let isAvilable = false

// 함수이름
function getUsername () {}

// 파스칼케이스(PascalCase) - 클래스, 생성자 (UpperCamelCase)
class User {}

// 대문자 스네이크 케이스 - 상수

const API_KEY = 'asdfssg'