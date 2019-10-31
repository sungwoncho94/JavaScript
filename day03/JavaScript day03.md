# JavaScript day03

## nodeJS

- 브라우저를 벗어난 JS -> document같은 명령어가 없다. (브라우저가 없기때문에!)



- python 예제 (동기함수)

  ```python
  from time import sleep
  
  def sleep_3():
      sleep(3)
      print('Wake Up!')
  
  print('Start Sleeping...')
  sleep_3()
  # 3초간 기다려야하니까 얘가 3초 후 실행된 후 다음 코드들이 실행된다
  print('End of Program')
  ```

  결과

  ```bash
  $ python 00_blocking.py
  Start Sleeping...
  Wake Up!
  End of Program
  ```

  

- JS 예제 (비동기함수)

  ```javascript
  // setTimeout  -  대표적인 js의 비동기 함수
  
  function sleep_3() {
    setTimeout(function(){
      console.log('Wake Up!')
    }, 3000)
  }
  
  
  console.log('Start Sleeping...')
  sleep_3()  
  // 3초 뒤에 실행되어야하니까 다른 곳에서 기다린다. 얘가 다른 곳에 가있는 사이에 다른 코드들은 실행됨
  // 이 일을 하는 동안에도 다른 일을 할 수 있게함
  console.log('End of Program')
```
  
결과
  
  ```bash
  $ node 00_nonblocing.js
  Start Sleeping...
  End of Program
  Wake Up!
```
  
  

- 비동기함수 설명 동영상
  `http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D`

```javascript
function printHello() {
    console.log('Hello from baz');
}

function baz() {
    setTimeout(printHello, 1000);
}

function longbaz() {
    setTimeout(printHello, 4000);
    baz();
}


function bar() {
    longbaz();
}

function foo() {
    bar();
}

foo();
```



### XMLHttpRequest (XHR)

- 서버와 상호작용하는 객체
- 페이지 새로고침을 하지 않고 데이터를 받아올 수 있다.
- AJAX : 비동기적으로 JS로 요청을 보내서 처리하는 프로그래밍 기법
  ex) 네이버 페이지는 가만히 있는데 실시간 검색어 계속 새로고침되는 것
  ex) 인스타, 페북 좋아요 -> 내가 좋아요를 해달라는 요청을 보내면 페이지 새로고침 없이 시행됨

실습

```javascript
const XHR = new XMLHttpRequest()

const url = 'https://jsonplaceholder.typicode.com/posts/1'

XHR.open('GET', url)

// 요청을 보냈을 때 응답받으면 함수를 처리하게 하는 함수
XHR.addEventListener('load', function(event) {
	console.log(event)
})

// 실행
XHR.send()

// 하지만 불편하니까 axios 사용하자
```

- axios 설치하기
  (1) bash에서 `$ npm init`  한 후, 무한 엔터하면 package.json이 생김
  (2) `$ npm install axios` -> node_modules가 생김  (절대절대 git에 올리면 안된다)
  (이후에는 `$ npm install`라고만 입력하면 알아서 다 깔린다)

- `const axios = require('axios')` -> axios사용할 준비 끝

- axios를 node환경에서 사용하기

  ```javascript
  const axios = require('axios')
  
  // 요청을 보낸 후 response객체에 담기 (request와 사용법이 비슷)
  // const response = axios.get('https://jsonplaceholder.typicode.com/posts/1')
  
  // console.log(response)
  
  // 비동기적으로 작동하기 때문에, 아직 응답을 다 받지 못함에도 Promise { <pending> } 라는 응답이 옴
  
  const url = 'https://jsonplaceholder.typicode.com/posts/1'
  
  axios.get(url)
    .then(function(response) {
    console.log(response.data)
  }) 
  // 우리가 원하는 응답을 받음
  /*
   data: {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\n' +
        'suscipit recusandae consequuntur expedita et cum\n' +
        'reprehenderit molestiae ut ut quas totam\n' +
        'nostrum rerum est autem sunt rem eveniet architecto'
    }
  }
  */
  ```

- 브라우저 환경에서 axios 사용

  (1) html 파일 만든 후, `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>` 를 head / meta 아래에 넣기

  (2) 

  ```html
  <!DOCTYPE html>
  <html lang="ko">
  <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <!-- Axios -->
   <!-- XHR을 만들어주는 친구 -->
   <!-- XHR: 자바스크립트에서 요청을 보내는 객체
             화면을 새로고침하지 않고, 요청을 보내서 응답받을 수 있음 -->
   <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
   <title>Use Axios</title>
  </head>
  <body>
  
    <!-- body안에 아무 내용도 없지만 동적요청을 통해 데이터를 받아올 수 있다 -->
    <script>
    // 요청을 보낼 url 정의
    url = 'https://jsonplaceholder.typicode.com/posts/1'
    // Axios를 이용해 url로 GET요청을 보낸다
    axios.get(url)
      // 그리고, 응답이 도착한 다음 실행할 함수를 정의한다(응답의 내용은 함수의 인자로 받는다)
      .then(function(response) {
        const data = response.data
        document.write(data.body)
      })
    </script>
  </body>
  </html>
  ```



- Dogs and Cats.html

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- Axios -->
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <title>Dogs and Cats</title>
  <style>
    img {
      width: 300px;
      height: 300px;
    }
  </style>
</head>
<body>
  <h1>댕댕이</h1>
  <button id='get_dog_btn'>댕댕이 사진 내놔</button>
  <button id='get_cat_btn'>고양이 사진 내놔</button>
  <div class="animals"></div>

  <script>
    // 댕댕이 내놔버튼을 누르면 댕댕이 사진을 불러올 수 있도록 설정
    // button.addEventListener('click', getDogImage) -> 괄호없음
    const getDogButton = document.querySelector('#get_dog_btn')
    getDogButton.addEventListener('click', () => {
      getDogImage()
    })

    // 함수를 만들어서 계속 사진을 불러온다
    const getDogImage = function() {

    // 댕댕이 api url
    const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random'
    // 비동기 실행이기 때문에 response = axios.get~으로 바로 응답받을 수 없다
    // axios를 통해 댕댕이 사진을 달라는 요청을 보낸다
    axios.get(DOG_API_URL)
      // 그리고, 요청이 도착하면 함수를 실행한다
      .then(function(response) {
        console.log(response)

        // 응답받은 data에서 댕댕이 이미지url을 꺼낸다
        const imageUrl = response.data.message
        // 댕댕이 이미지를 화면에 표현하기 위한 이미지 태그를 생성한다.
        const dogImage = document.createElement('img')
        dogImage.src = imageUrl
        dogImage.alt = 'dog'

        // div.animals 안에 댕댕이 이미지 태그를 push한다
        const animalsList = document.querySelector('div.animals')
        animalsList.appendChild(dogImage)
      })

    }


    // 야옹이 사진 내놔 만들기
    const getCatImage = function() {

    // 요청보낼 cat url
    const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search'
    // 요청은 axios로 보낸다
    axios.get(CAT_API_URL)
        // 요청 보낸 후 제대로 요청이 들어갔는지 바로 확인해야한다.
      .then(function(response2) {
        // response를 콘솔로 출력한 후, 내가 가지고오고 싶은 정보에 마우스를 올리면 주소가 나타남
        const imageUrl2 = response2.data['0'].url
        const catImage = document.createElement('img')
        catImage.src = imageUrl2
        catImage.alt = 'cat'
        // console.log(response2)
        const animalsList = document.querySelector('div.animals')
        animalsList.appendChild(catImage)
      })
    }

    const getCatButton = document.querySelector('#get_cat_btn')
    getCatButton.addEventListener('click', getCatImage)

  </script>

</body>
</html>
```

