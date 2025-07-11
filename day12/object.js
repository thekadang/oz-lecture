console.log("객체 실습")

const person = {
    name: {
        firstName: "Gildong",
        lastName: "Hong",
    },
    age: 20,
    isAdult: true,
  getFullName: function (isKorean = false) {
    const fullName = isKorean
      ? `${this.name.lastName} ${this.name.firstName}`
      : `${this.name.firstName} ${this.name.lastName}`;
    return fullName;
    },
    printInfo: function () {
        console.log("printInfo");
        console.log(`name: ${this.name.firstName} ${this.name.lastName}`);
        console.log(`age: ${this.age}`);
        console.log(`isAdult: ${this.isAdult}`);

    },
};
console.log(person);
// this가 붙는 이유.
// 현 뭉탱이 안에서 객체를 찾아서 그 정보를 가져와라.
// 사용하지 않으면 전체 코드 내에서 정보를 가져와 사용한다.



// person의 age, isAdult 조회

console.log("객체에서 . 사용하여 접근"); // 객체에서는 이 방법을 주로 사용
let age = person.age;
console.log("age :", age);
let isAdult = person.isAdult ? "성인" : "미성년자";
console.log("is Adult :", isAdult);

console.log("객체에서 [key] 사용하여 접근")
let age2 =  person["age"];
console.log("age2 :", age2);
let isAdult2 = person["isAdult"] ? "성인" : "미성년자";
console.log("is Adult2 :", isAdult2);

// 객체에 키가 뭐가 왔는지 모르지만 어쨌든 모든 값을 꺼내고 싶을 때.
// 객체에서 [key]를 사용하여 접근하는 방식을 사용한다.

console.log("객체에서 모든 값을 꺼내는 명령에 대한 출력")
let keys = [];
for (const key in person) {
    keys.push(key);
}


console.log(keys);
console.log(keys[0]);
const keyFirstValue = person[keys[0]];
for (const key of keys) {
    console.log("key", key);
    console.log("person[key",person[key]);
}

// 객체 내의 함수 사용하기

console.log("person이라는 객체의 printInfo라는 함수를 가져온 결과 출력")
person.printInfo();
// person이라는 객체의 printInfo라는 함수를 가져올때 () 를 쓴다(?)
// 결과로
// console.log("printInfo");
//         console.log(`name: ${this.name.firstName} ${this.name.lastName}`);
//         console.log(`age: ${age}`);
//         console.log(`isAdult: ${isAdult}`);
// 이 로그들이 찍힌다.


// 객체에 속성 추가

console.log("like와 koreaAge 등을 추가한 결과값")
person.like = "apple";
person.koreaAge = 22;
person.likes = ['kadang','coffee',2, true];

console.log(person);

// 속성 삭제 delete를 사용한다.

console.log("like속성을 삭제한결과")
delete person.like;
console.log(person);

console.log('/////////////');
console.log('like를 추가했다가 삭제를 했으므로 결과에 like가 안보임');

