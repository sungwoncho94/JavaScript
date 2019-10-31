function printHello() {
  console.log(4)
  console.log('Hello from baz');
}

function baz() {
  console.log(3)
  setTimeout(printHello, 3000);
}

function bar() {
  console.log(2)
  baz();
}

function foo() {
  console.log(1)
  bar();
}

foo();


// 설명 동영상
// http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// call stack이 비워지지 않으면 callback Queue가 실행되지 않기 때문에 정확히 3초가 아닐수도 있다.


/*
1. foo() 실행 -> console 1 -> bar실행 (foo 는 call stack에 저장됨  //  firt_in_last_out)
2. bar() 실행 -> console 2 -> baz실행 (bar 는 call stack에 저장됨)
3. baz() 실행 -> console 3 -> -> (baz는 call stack에 저장됨) -> setTimeout(printHello, 3000) -> (setTimeout(pirntHello, 3000))은 callstack에 저장됨
4. web Apis 에 printHello()가 3초가 대기
5. 3초 사이에 call stack에 저장되어있던 baz, bar, foo가 실행됨 (filo순서, baz -> bar -> foo 순서로 실행)
6. 3초가 지났으면 callback Queue printHello() 들어옴
7. Call Stack이 비어있다면 print(Hello())가 Call Stack에 들어와서 실행됨

*/


// 예제2
function printHello() {
    console.log('Hello from baz');
}

function baz() {
    setTimeout(printHello, 1000);
}

function longbaz() {
    setTimeout(printHello, 3000);
    baz();
}


function bar() {
    longbaz();
}

function foo() {
    bar();
}

foo();