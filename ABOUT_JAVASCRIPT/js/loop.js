// 반복문은 수없이 반복되는 데이터들을 다룰 수 있는 프로그래밍의 중요한 문법이다.
// 반복문은 주로 배열의 요소나 DOM에서 선택된 반복 객체 등을 다룰때 사용된다.

// 1. for in
// signiture : for(const loop variable in array or object){}
// for in문은 배열의 반복 인덱스를 리턴하고, 해당 배열의 인덱스 요소값을 배열접근 방식으로 리턴할 수 있다.
const arr = ["a", "b", "c", "d"];
for (const i in arr) {
  // console.log(i);
  // console.log(arr[i]);
}

// 2. for of
// signiture : for(const loop variable of array or object){}
// for in문과 다르게 for of문의 경우 변수에 할달된 데이터를 인덱스가 아니라 해당 인덱스이 값을 직접 리턴한다.
for (const i of arr) {
  // console.log(i);
}

// for in과 for of는 실제로 자주 사용되는 문법은 아니다. 이보다는 주로 for문이 많이 사용된다.

// 3. for
// signiture : for(let loop variable; loop length; increment operator){}
// for문의 경우 반복 횟수를 지정할 수 있어서 디데일한 컨트롤이 가능하다.
// for문의 반복 변수를 재할당되기 때문에 const 상수를 선언하면 안된다.
// console.log(arr);
const numArr = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i++) {
  // const element = numArr[i]; // 배열 요소의 접근은 [] 안에 인덱스로 접근한다.
  // console.log(i); // i 변수 자체는 인덱스이다.
  // console.log(element);
  // for 배열 코드 블럭 안의 변수는 밖에서 읽을 수 없다.
}

// 0 ~ 99까지의 합
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

// 1. sum = 0 + 0;
// 2. sum = 0 + 1;
// 3. sum = 1 + 2;
// 4. sum = 3 + 3;
// 5. sum = 6 + 4;
// 6. sum = 10 + 5;
// 7. sum = 15 + 6;
// 8. sum = 21 + 7;
// 9. sum = 28 + 8;
// 10. sum = 36 + 9;
// 45

// console.log(sum);

// 네비게이션 만들기
const ulTag = document.querySelector("ul");
const navLists = ["home", "about", "product", "contact"];

for (let i = 0; i < navLists.length; i++) {
  const liTags = document.createElement("li");
  const element = navLists[i];
  liTags.innerHTML = element;
  ulTag.append(liTags);
}

// 별 찍기
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
