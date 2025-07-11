

// const fruits = ["사과", "바나나", "오렌지"];
const fruits = new Array("사과", "바나나", "오렌지"); // 위에랑 같은 결과가 나온다.
console.log(fruits);
console.log(fruits[1]);
console.log(fruits.length);

const mixed = [1, "helle", true, {name: "홍길동"}];
console.log(mixed);

// 배열 요소 추가 - push()
// 기존 배열의 가장 뒷쪽(마지막 인덱스)에 요소가 추가된다.
console.log("딸기와 포도를 추가함")
fruits.push("딸기", "포도");
console.log(fruits);
console.log(fruits.length);

// arry.pop() 배열 마지막 요소 삭제
// 삭제된 요소를 반환한다.
console.log("마지막 포도를 삭제함")

fruits.pop();
console.log(fruits);
console.log(fruits.length);


//마지막 요소인 딸기를 삭제하면서 요소를 반환하는데
// const removed를 해서 removed에서 반환을 받음.
// 요소를 반환한다는 예시를 위한 코드.
console.log("남은 마지막 딸기를 삭제함")
const removed = fruits.pop();
console.log(fruits);
console.log(fruits.length);
console.log("removed :", removed);

// Arry.shift()
// 배열 첫번째 요소 삭제
// 삭제된 요소 반환
const removedByShift = fruits.shift();
console.log(fruits);
console.log(fruits.length);
console.log("removedByShift :", removedByShift);

// Arry.unshift()
// 배열 요소 첫번째 인덱스에 추가
fruits.unshift("파인애플");
console.log(fruits);
console.log(fruits.length);

