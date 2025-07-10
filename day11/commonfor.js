// 0부터 4까지 콘솔찍는 코드
for(let i = 0; i < 5 ; i++) {
    console.log(i);
}
console.log('////////////////')
// let i = 0으로 변수 초기화
// 변수 i의 값이 5보다 작은지 평가하고 참이면 블록 스코프(명령) 실행
// 블록문 실행이 끝나면 i++을 실행하고 조건식 확인한다.
// 조건문이 거짓이 되면 작업이 끝난다.


// 1부터 5까지 콘솔 찍는 코드

for(let i=1; i <=5; i++) {
    console.log(i);
}
console.log('////////////////')

// 1부터 10까지 홀수만 찍는 코드

for(let i=1; i <=10; i=i+2) { // i=i+2 대신 i+=2라고 해도 됨
    console.log(i);
}
console.log('////////////////')

// for문 안에서 i값을 설정해 줬으므로 명령이 끝나면 i값은 
// 설정되지 않은 것 (콘솔로그로 찍으면 에러)으로 본다.


// i값을 설정하고 포문을 돌린 후 i값을 출력하면 
// 포문과 상관없이 i값은 100 그대로 출력된다.
// 이런 코드는 잘 사용하지 않으며
// 포문은 독립적으로 변수를 적용한다는 식으로 이해하면 될듯?
let i=100;
for(let i=1; i <=10; i=i+2) { // i=i+2 대신 i+=2라고 해도 됨
    console.log(i);
}
console.log(i) // 포문과 상관없이 i는 초반에 설정한 100이다.
console.log('////////////////')

//중첩 반복문 (선호하진 않는 방식)

for (let i = 0; i < 2; i++) {
    console.log(`i: ${i}`);
    for (let j = 0; j <2; j++) {
        console.log(`j: ${j}`);
    }
}
console.log('////////////////')

// continue문
// 해당 조건일 경우 건너뛰지만 멈추지 말고 다음 단계 진행해라
for (let i = 0; i <= 10; i+=2) {
    if (i===0) {
        continue;
    }
    console.log(i);

}

// break문과 continue문
for (let i = 0; i < 10; i++) {
    if (i ===5) break;  // 5에서 멈춤
    console.log(i);
    
}

for (let i = 0; i < 10; i++) {
    if (i ===5) continue;  // 5는 멈추지만 다음단계 계속진행
    console.log(i);
    
}
console.log('////////////////')

console.log('for문과 array(배열)')

// for문과 array(배열)
let arr = ['a','b','c'];
for (let i = 0; i <arr.length; i++) {
    console.log(arr[i]);
}
console.log('////////////////')

// for in 배열
console.log('for in 배열')

for (idx in arr) {
    console.log(idx);
}

// for of 배열
console.log('for of 배열')
for (item of arr) {
    console.log(item);
}

// 객체 레터럴 (for in 객체)
console.log('객체 레터럴 (for in 객체)')

let obj = {
    name: '철수',
    age: 20,
}
for (let key in obj) {
    console.log ('key', key);
    console.log('val', obj[key]);
}


//  /////////////////
// for문 안에 들어가는 if문
// 1부터 10까지 짝수 찍기
// i는 반드시 0부터 시작해야함

// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);

// }