do {
    console.log('무조건');
    console.log('한번은 실행');
} while (false);

// 1부터 최대 100까지 1씩 증가하는 while 반복문
let num = 1;
// while(num <= 100) {
//     console.log(num);
//     num++;  // num = num +1;
// }

// console.log('반복문 종료');
// console.log('num = ',num);

do {
    console.log(num);
    num++
} while (num <= 100);