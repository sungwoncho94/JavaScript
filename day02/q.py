# 1
def q():
    def add_one(n):
        return n + 1
    return add_one


z = q()
print(z(1))


# 2
def x():
    return [1, 2, 3]
print(x()[0])


# 3
adder = lambda x, y: x + y
# # adder라는 변수에 함수 표현식을 넣어놓은 것

print((lambda x, y: x + y)(1, 2))
# lambda x, y: x+y 자체가 함수다!
# 함수(1, 2) -> return 1+2가 나온다

# 4
cal = {
    'adder': lambda x, y: x + y, 
    'minus': lambda x, y: x - y,
}

print(cal['adder'](1, 2))


# 5
# 객체 지향 프로그래밍 언어
# 함수가 1급 객체이다
# 1급 객체의 조건: (1) 함수의 인자가 될 수 있다. (2) 함수의 리턴값이 될 수 있다


function firstClassObject (cb) {
    return cb(1)
}
const asdf = function (x) {return x+1}

firstClassObject(asdf)

// -> cb = function (x) {return x+1} 임

// <==>

function fco() {
    return (x) => { return x + 1 }
}
fco()(1) = 2