# Java Script_day02

- DOM 을 통해document라는 object를 통해서 querySelector로 특정 요소를 선택할 수 있다.
  - 아무것도 안적었을 때 : tag
  - ' . ' : class
  - '#' : id

- 그냥 `bg`를 치면 `Uncaught ReferenceError: bg is not defined`오류가 뜬다

- `const bg = document.querySelector('div.bg')`  -> 쿼리셀렉터 한 것을 변수에 할당할 수 있다.
  -> bg  =  `<div class="bg">…</div>`

  

- 쿼리셀렉터 한 결과를 넣은 변수인 bg의 자식요소를 또 선택할 수 있다.

  `bg.querySelector('img')`



- `dino.src = ''` -> 새로고침 하지 않아도, 페이지는 그대로인 채로 화면의 그림이 사라진다.
  `dino.src = 'https://store-images.s-microsoft.com/image/apps.38351.14426311725358695.736eb785-1d29-478c-a909-1900849773e9.4247f5ee-1daa-4c97-96c2-23868f1fbc45?mode=scale&q=90&h=200&w=200&background=%230078D7'`  ->  속성값을 변경해 줄 수도 있다.

- `dino.style.height = '500px'` -> 속성값도 변경할 수 있음

- 대상을 삭제하는 방법

  (1) 대상을 직접 삭제  :  
        `dino.remove()`
        `document.querySelector('#dino').remove()`

  (2) 대상의 자식요소 삭제
       `bg.firstElementChild.remove()`
  (3) 대상의 마지막요소 삭제
       `bg.lastElementChild.remove()`

  (4) 내 자식 중 한 요소 선택해서 지우기
       `bg.removeChild(bg.firstElementChild)`
       `bg.removeChild(bg.lastElementChild)`

### Q. body에 자식 element가 하나도 없을 때 까지 자식 element를 삭제하는 코드 만들기

```javascript
while (document.querySelector('body').childElementCount !== 0) {
    document.querySelector('body').firstElementChild.remove() 
}


while (document.body.childElementCount !== 0) {
    document.body.firstElementChild.remove()
}
```



- 새로운 요소 추가  `document.createElement('img / span / div ...')`

```javascript
(1) const pika = document.createElement('img')

(2) pika.id = 'pikachu'
// pika
// <img id= "pikachu">

(3) pika.src = 'https://image.fmkorea.com/files/attach/new/20180627/425547776/837628905/1125113061/be82af9c593fedfcc40d20b5a9dae43c.png'

(4) pika.alt = 'pikachu'
// pika
// <img id="pikachu" alt="pikachu" src="https://image.fmkorea.com/files/attach/new/20180627/425547776/837628905/1125113061/be82af9c593fedfcc40d20b5a9dae43c.png">

(5) bg.appendChild(pika)  // bg에 pika사진을 삽입한다
```



- 이벤트리스너

(1) 클릭 시, 반응하는 이벤트 만들기

```javascript
pika.addEventListener('click', () => {
        console.log('피카!')
      })
```

(2) 아무 키보드 입력 시, 반응하는 이벤트 만들기

```javascript
document.addEventListener('keydown', event => {
        // 방향키를 눌렀을 때만 event를 출력할 수 있도록 조건문 작성
        console.log(event)
      })
```

(3) 방향키 상 하 좌 우 입력 시, 방향을 얘기해주는 이벤트 만들기 
	  -> margin을 고정하기 때문에 두번째 부터는 움직이지 않는다

```javascript
document.addEventListener('keydown', event => {
        if (event.key === 'ArrowDown') {
          console.log('down')
        }
        if (event.key === 'ArrowUp') {
          console.log('Up')
        }
        if (event.key === 'ArrowRight') {
          console.log('Right')
        }
        if (event.key === 'ArrowLeft') {
          console.log('Left')
        }
      })
```

(4) 방향키를 누를 때마다 계속 움직이는 이벤트 만들기

```javascript
let x = 0
      let y = 0
      document.addEventListener('keydown', event => {
        if (event.key === 'ArrowDown') {
          console.log('down')
          y += 20
          pika.style.marginTop = `${y}px`
        }
        if (event.key === 'ArrowUp') {
          console.log('Up')
          y -= 20
          pika.style.marginTop = `${y}px`
        }
        if (event.key === 'ArrowRight') {
          console.log('Right')
          x += 20
          pika.style.marginLeft = `${x}px`

        }
        if (event.key === 'ArrowLeft') {
          console.log('Left')
          x -= 20
          pika.style.marginLeft = `${x}px`
        }
      })
      pika.addEventListener('mouseover', () => {
        const newWidth = window.innerWidth * Math.random()
        const newHeight = window.innerHeight * Math.random()
        pika.style.left = newWidth + 'px'
        pika.style.top = newHeight + 'px'
      })
```

- 마우스 올렸을 때, 도망가게 하는 이벤트

```javascript

pika.style.position = 'absolute'

      pika.addEventListener('mouseover', () => {
        const newWidth = window.innerWidth * Math.random()
        const newHeight = window.innerHeight * Math.random()
        pika.style.left = newWidth + 'px'
        pika.style.top = newHeight + 'px'
      })

```





## Q. 사용자에게 input받아서 list로 추가하는 장바구니 list만들기

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Shopping List</title>
</head>
<body>
  <h1>My shopping list</h1>

  <div>
    Enter a new item :
    <input type="text">
    <button>Add item</button>
  </div>
  <ul>
  </ul>
  <script>
    // input 상자 잡기
    const button = document.querySelector('button')

    button.addEventListener('click', () => {
      const input = document.querySelector('input')
      const item = input.value
      const li = document.createElement('li')
      li.innerText = item
      const del_button = document.createElement('button')
      del_button.innerText = 'delete'
      const ul = document.querySelector('ul')
      ul.appendChild(li)
      li.appendChild(del_button)
      del_button.addEventListener('click', ()=>{
        li.remove()
      })
    })
  </script>
</body>
</html>
```

