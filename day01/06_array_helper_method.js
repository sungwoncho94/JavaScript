
const colors =['red', 'green', 'blue', 'orange']

for (const color of colors) {
  console.log(color)
}

// colors.forEach() 라는 함수 사용  ->  하나씩 순회해서 어떤 작업을 할꺼야! 라는 함수
colors.forEach(function(color) {
  console.log(color)
})

// arrow function으로 바꾸기
colors.forEach(color => console.log(color))


const numbers = [1, 2, 3, 4, 5]
// map
const doubleNumbers = numbers.map(number => {
  return number * 2
})

// 더 요약
const doubleNumbers = numbers.map(number => number * 2)


// numbers
// (5) [1, 2, 3, 4, 5]
// doubleNumbers	
// (5) [2, 4, 6, 8, 10]

const plusB = numbers.map(number => {
  return `B${number}`
})

// plusB
// (5) ["B1", "B2", "B3", "B4", "B5"]


// Q. 숫자가 담긴 배열을 받아 각 수의 제곱근이 들어있는 새로운 배열을 만들어보자!
const numbers2 = [4, 9, 16]

// 내 답
const my_sqrt = numbers2.map(number => Math.sqrt(number))

//(1)
numbers2.map(number => Math.sqrt(number))

//(2)
numbers2.map(number => number ** 0.5)

//(3) - 함수를 넘기는 것
const my_sqrt2 = number => Math.sqrt(number)


// map helper를 사용해서 distance / time (속도)를 저장하는 배열 speeds를 만들자

const trips = [
  {distance: 34, time: 10},
  {distance: 90, time: 50},
  {distance: 59, time: 25},
]

// const speeds = trips.map((trips를 돌 객체) )  => { 각 루프마다 실행하고자하는 함수 }
const speeds = trips.map(trip => {
  return trip.distance / trip.time
})



//filter - 주어진 함수의 test를 통과하는 모든 요소를 모아서 새로운 배열 반환
const numbers = [1, 2, 3, 4, 5]

numbers.filter(number => {
  return number % 2 === 0
})

const products = [
  { name: 'cucumber' , type: 'vege' },
  { name: 'banana' , type: 'fruit' },
  { name: 'apple' , type: 'fruit' },
  { name: 'cucumber' , type: 'vege' },
]

const fruits = products.filter(product => {
  return product.type === 'fruit'
})


// helper - filter 복습
// filter로 나이가 50이상인 아이템만 가지고 있는 새로운 배열(old ages) 만들기
const ages = [15, 25, 35, 45, 55, 65, 75, 85, 95]

const oldAges = ages.filter(age => {
  return age >= 50
})

const oldAges2 = ages.filter((age, index, self) => {
  console.log(age, index, self)
  return age >= 50
})


// find - 주어진 판별함수를 만족하는 첫번째 요소의 값을 반환, 없다면 undefined반환
const users = [
  {name: 'Tony Stark', age: 45},
  {name: 'Steve Rogers', age: 32},
  {name: 'Thor', age: 40},
]

const tony = users.find(user => {
  return user.name === 'Tony Stark'
})


// some - 배열 안의 어떤 요소라도 (===가 true인게 하나라도 있으면) 주어진 판별 함수를 
// 통과하는지 test하고 결과에 따라 boolean값을 반환

const arr = [1, 2, 3, 4, 5, ]
// 하나라도 짝수가 있다면 true를 반환하는 함수
const result = arr.some(a => {
  return a%2 === 0
})

// 모든 요소가 짝수를 포함하고 있다면 true
const result2 = arr.every(a => {
  return a%2 ===0
})

// requests 배열에서 각 요청들 중 status가 pending인 요청이 있는지 확인하라
const requests = [
  {url: '/photos', status: 'complete' },
  {url: '/albums', status: 'pending' },
  {url: '/users', status: 'failed' },
]

const isInProgress = requests.some(request => {
  return request.status === 'pending'
})


// reduce - 배열의 각 요소에 대해 주어진 'reducer'함수를 실행하고 하나의 값을 반환.
// reduce는 배열 내의 숫자 총합, 배열 내 평균 계산 등 배열의 값을 하나로 줄이는 역할.

const ssafyTest = [90, 99, 78, 80]

// (1) const sum = ssafyTest.reduce(() => {})

// 첫번째인자 = 우리가 구할 것 / 두번째인자 = 배열을 돌 각 요소들
// {계산하고싶은 함수} , 0 (total의 초기값을 넘긴다 / total을 0부터 시작할꺼다~)
// const sum = ssafyTest.reduce((total, score) => {}, 0)

const sum = ssafyTest.reduce((total, score) => {
  total += score
  return total  // 다음 loop로 누적값을 넘김
}, 0)


// Q. reduce를 사용하여 ssafyTest배열을 doubleSsafyTest로 만드시오
// => [180, 198, 156, 160]

const doubleSsafyTest = ssafyTest.reduce((doubleScore ,score) => {
  console.log(doubleScore, score)
  doubleScore.push(score * 2)
  return doubleScore
}, [])

// 우리가 반환받고 싶은 형태는 배열이기때문에, 최초의 형태도 배열로 초기화해야한다.