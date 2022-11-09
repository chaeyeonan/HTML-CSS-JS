// 조건문은 프로그램의 흐름을 변경할 때 사용된다. 특정 조건에 따라 흐름이 분기되는데, 해당 조건은 boolean 타입으로 지정된다.

// 1. signiture : if(condition){true logic} else {false logic}
// 조건은 boolean 타입이 리턴되기 때문에 비교 연산이나 논리 연산의 값을 사용한다.
if (true) {
  console.log(true);
} else {
  console.log(false);
}

const a = 3;
const b = 3;
const c = 3;
if (a > 1) {
  console.log(true);
} else {
  console.log(false);
}

if (a == b || b == c) {
  console.log(true);
}

// 2. 중첩 if 조건문
// 3. if else if 조건문
const date = new Date();
const hour = date.getHours();

if (hour < 6) console.log("아침");
else if (hour < 9) console.log("오전");
else if (hour < 13) console.log("점심");
else if (hour < 18) console.log("오후");
else console.log("저녁");

// 4. switch 조건문
// switch 조건문은 조건식이 true일 경우 조건식 각각의 상황을 분개한다.
// signiture : switch (condition) {case:}
const value = 2;
switch (value) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("error");
}

const year = date.getFullYear() % 12;
let result = "호랑이띠";
switch (year) {
  case 0:
    result = "원숭이띠";
    break;
  case 1:
    result = "닭띠";
    break;
  case 2:
    result = "개띠";
    break;
  case 3:
    result = "돼지띠";
    break;
  case 4:
    result = "쥐띠";
    break;
  case 5:
    result = "소띠";
    break;
  case 6:
    result = "호랑이띠";
    break;
  case 7:
    result = "토끼띠";
    break;
  case 8:
    result = "용띠";
    break;
  case 9:
    result = "뱀띠";
    break;
  case 10:
    result = "말띠";
    break;
  default:
    result = "양띠";
    break;
}

// 5. 삼항 연산자
// 삼항 연산자는 조건에 따른 로직이 단일하거나 짧을 때 사용된다.
// signiture : true ? true data : false data

const age = 20;
const checkAge = age >= 18;
const adult = checkAge ? "성년입니다" : "미성년입니다";
console.log(adult);
