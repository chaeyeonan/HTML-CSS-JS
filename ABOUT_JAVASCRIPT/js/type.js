// 프로그래밍 언어에서 다루는 모든 데이터는 각자 형태를 지닌다. 이를 타입이라 한다.
// 원시타입 : string, number, boolean, undefined, null
// 객체타입 : function, array, object

// 1. 문자열 (stirng) : '' 안에 작성되는 원시 값은 문자로 인식디고 이들의 나열이 문자열이다.
const string = "hello world";

// 문자는 홀따옴표와 겹따옴표 어떤 것을 사용해도 되나, 따옴표 안에 다른 따옴표안에 들어간다면 홀과 겹을 다르게 사용해야한다
const string1 = " hello 'chaeyeon' world ";
const string2 = 'hello "chaeyeon" world';

const class1 = "header";
const tag1 = "<div class='" + class1 + "'></div>";

// type을 체크할 때는 typeof() 메서드를 사용한다.
console.log(typeof string1);

// 2. 탬플릿 리터럴 :
// 변수와 문자열을 함께 사용할 때 es6 버전부터는 + 기호없이 편리하게 조합할 수 있는 방식을 제공한다.
// 전체 문자열을 백틱으로 감싸고, 변수 부분을 ${} 안에 작성한다.
const class2 = "header";
const tag2 = `<div class="${class2}"></div>`;

// 3. 숫자(number)
// 숫자는 따옴표 없이 사용하며, 말 그대로 숫자를 사용한다. 숫자 형태이므로 연산이 가능하다.
// 자바스크립트는 엔진이 타입을 추론하므로 별도의 선언문 없이 숫자, 문자, 객체 등의 타입을 지정할 수 있다.
// 따라서 소수를 작성해도 숫자 타입으로 지정된다.
const num1 = 0.5;
const num2 = 1;

// 숫자를 작성할 때 따옴표 안에 작성하면 문자열로 변형된다.
// 숫자형 문자를 숫자형으로 변경할때 Number() 메서드를 사용한다. 이와 같이 변경하는 것을 명시적 형변환이라 한다.
const numString1 = "12";
const numString2 = "25";
const num3 = Number(numString1); //숫자형
console.log(typeof num3); // number 로 출력됨

// 숫자형 문자는 + 의 경우 문자 연산이 되지만 나머지 연산은 엔진이 숫자로 임의 변경하여 연산한다. 이를 암묵적 형변환이라 한다.
const numString3 = "7";
console.log(numString2 + numString3); // 257
console.log(numString3 - numString1); //  -5 (계산가능)
// 암묵적 형변환된 데이터는 숫자형으로 변경된다.

// 4. NaN
// 자바스크립트 엔진이 숫자형으로 인식하는 것 중에 특이한 것은 NaN이다. 이는 Not a Number의 이니셜로 '숫자가 아님'이지만 숫자다.
const stringNaN = "marshasll" * 40;

// 5. Boolean
// 컴퓨터는 모든 데이터를 0과 1로 읽는다. 이를 이용하여 true와 false를 나타내는 방식을 표현하는데 이를 boolean이라 한다.
// George Boole이라는 수학자가 고안해서 붙여진 이름이다.
// 직접적으로 true와 false를 사용하는 경우도 있지만 대부분 한 로직이 여러가지 경우의 수에 따라 흐름을 달리할 때 사용한다.(로그인 했을때와 아닐때 등)
const bool = true;
const yourAge = prompt();
if (yourAge >= 18) {
  document.write("당신은 어른입니다");
} else {
  document.write("당신은 청소년입니다");
  document.write(yourAge <= 15);
}

// 6. undefined
// undefined 는 원시값(Primitive Type)으로, 선언한 후에 값을 할당하지 않은 변수나 값이 주어지지 않은 인수에 자동으로 할당된다.
let undefine;
console.log(undefine);

// undefined 는 false, 0, 빈값과는 다르다
console.log(undefined == false);
console.log(undefined == 0);
console.log(undefined == "");

// 7. null
// 값을 의도적으로 비울때 null 을 대입한다.
// undefined와 같이 비어있는 값이라는 의미는 같다.
console.log(undefined == null);

// 하지만 데이터의 타입은 undefined와 다르다.

// null 역시 false, 0, 빈값과는 다르다.
