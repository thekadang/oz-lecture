// 논리 연산자
// && - and연산자
// 피연산자를 왼쪽부터 평가해서 평가 결과가 거짓이면 거짓이 나온 피연산자를
// 즉시 반환 거짓이 아니면 마지막에 평가되는 피연산자를 반환


// || - or연산자
// ! - not


let math = 80;
let avg = 90; // avg = (math + eng) / 2  라고 해도 된다. 
let eng = 100;

let isMathLowAvg = math < avg;
console.log("isMathLowAvg", isMathLowAvg ); // true
// 수학점수가 평균보다 낮아?

let isEngLowAvg = eng < avg;
console.log("isEngLowAvg", isEngLowAvg);  // false
// 영어점수가 평균보다 낮아?

console.log(isMathLowAvg && isEngLowAvg); // false
// 수학점수가 평균보다 낮고, 영어점수도 평균보다 낮아?

console.log(isMathLowAvg || isEngLowAvg);  // true
//수학점수가 평균보다 낮거나, 영어점수가 평균보다 낮아?

console.log('!false', !false); // true
console.log('!true', !true); // false

