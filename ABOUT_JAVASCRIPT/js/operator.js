// 1. 산술 연산자
// 산술 연산자는 +, -, *, /의 사칙 연산이 있다.
// 문자열의 경우 + 연산을 가능하나 결과는 문자의 조합니다.
const string1 = "a";
const string2 = "b";
console.log(string1 + string2);

// 숫자형 문자열의 경우 + 연산은 문자 조합이지만 그 외 연산은 자동 변환(암묵적 변환)된다.
const num1 = 2;
const num2 = 4;
console.log(num1 + num2);
console.log(num2 - num1);
console.log(num2 * num1);
console.log(num2 / num1);

// 각 연산자는 우선순위가 있으며, 우선순위를 피하기 위해 먼저 연산될 부분을 ()로 감싼다.
// 연산자 우선순위 참조 : https://velog.io/@bami/Javascript-%EC%97%B0%EC%82%B0%EC%9E%90-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84

const operate = 5 + 4 * 2;
const operate1 = (5 + 4) * 2;
console.log(operate);
console.log(operate1);

// 2. 나머지 연산자(%)
// 나머지 연산자는 두 수를 나눈 나머지 값을 반환한다.
const left = 9 % 5;

// 두 숫자 중 앞을 숫자가 작으면 앞의 숫자와 뒤의 숫자가 같아지기 이전까지 앞의 숫자를 반환한다.
// 두 숫자가 같아지면 나눈 값이 0이므로 0을 반환한다.

// 3. 비교 연산자
// 비교 연산자는 boolean 타입을 리턴한다.
console.log("3" == 3);
console.log("3" === 3);
console.log(4 > 3);

// 4 부정 연산자
// 비교 연산자 또는 boolean타입 앞에 ! 문자를 사용하면 true와 false가 반대로 리턴된다.
console.log(!true);
console.log("3" != 3);

// 5. 논리 연산자
// && : 합성곱 - 좌우의 모든 항이 true일때 true 리턴
// || : 합성합 - 좌우 중 한 항만 true면 true 리턴\
const f = 3 > 4;
const g = 5 === 5;
console.log(f && g);
console.log(f || g);

// 6. 복합 대입 연산자
// += : 기본 변수의 값에 값을 더한다. 나머지 연산자도 마찬가지다(-=, *=, /=)
let h = 10;
console.log((h = h + 1));
console.log((h += 1));
console.log(h++); // 전위 증가 연산자: 값을 먼저 증가하고 리턴
console.log(++h); // 후위 증가 연산자 : 먼저 값을 리턴하고 증가
