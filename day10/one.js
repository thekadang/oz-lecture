
// 후치연산

let increment = 10;
console.log("1", increment); // 10
increment++; // 콘솔이 찍힌 후에 연산이 됨
console.log("2", increment); // 11
console.log("3", increment++); // 11  콘솔이 찍힌 후에 연산이 됨
    // let increment =10;
    // console.log(increment)
    // increment = increment + 1
console.log("4", increment); //12

let decrement = 10;
console.log("dec1", decrement); //10
decrement--;
console.log("dec2",decrement); //9
console.log("dec3", decrement--); //9 콘솔이 찍힌 후에 연산이 됨
console.log("dec4", decrement); //8


// 전치연산

let incFirst = 10;
console.log("incFirst", incFirst); //10
++incFirst; // 연산이 먼저 되고 콘솔이 찍힘
console.log("incFirst 2", incFirst) //11
console.log("incFirst 3", ++incFirst) //12 연산이 먼저 되고 콘솔이 찍힘
    // let increment =10;
    // increment = increment + 1
    // console.log(increment)
console.log("incFirst 4", incFirst) //12

let decFirst = 10;
console.log("decFirst", decFirst); //10
--decFirst;
console.log("decFirst 2", decFirst) //9
console.log("decFirst 3", --decFirst) //8 연산이 먼저 되고 콘솔이 찍힘
console.log("decFirst 4", decFirst) //8

// 단항 부정 연산자
let num = -10;
num = -num;
console.log(num); //10  : -10에 -부호를 붙였다.

let num10 = 10;
num10 = -num10;
console.log(num10) // -10 : 10에 -부호를 붙였다.

let num30 = 10;
-num30;
console.log(num30); // 10 : num30에 -를 할당하지 않았다.

