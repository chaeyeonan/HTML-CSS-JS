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
