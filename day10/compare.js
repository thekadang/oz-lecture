// 비교 연산자 중요!!

console.log('10 == 10', 10 == 10) // 10과 10이 같으면 true
console.log("11 == 10", 11 == 10) // 10과 11이 같이 않아서 false

let a = 5;
let b = 2;
let c = 10;
console.log("a + b == 10", a +b == 10); // false  10이 아니므로 
console.log("a + a == 10", a +a == 10); // true   10이 맞으므로
 
console.log("a + b != 10", a +b != 10); // true   10이 아닌게 맞으므로
console.log("a + a != 10", a +a != 10); // false  10이 아닌게 아니므로

console.log("a + b == c", a +b == c); // false  10이 아니므로 
console.log("a + a == c", a +a == c); // true   10이 맞으므로


console.log("a + b != c", a +b != c); // true   10이 아닌게 맞으므로
console.log("a + a != c", a +a != c); // false  10이 아닌게 아니므로

console.log("a * b < c", a * b < c); //false 같거나가 없다. (미만)
console.log("a * b < c", a * b <= c); //true 같거나가 있다. (이하)

console.log("c / b > a", c / b > a); //false
console.log("c / b >= a", c / b >= a); // true


// == 값이 같나요?
// === 값과 자료값이 같나요?

10 == '10'; // true
10 === '10'; // false
10 != '10'; // false
10 !== '10'; // true