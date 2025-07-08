const myname = "kadang";
const templateString = `나의 이름은 ${myname}입니다.`;
console.log(templateString);

// var 변수 선언
var num1 = 10;
var num2 = 20;
var num3 = 30;
console.log("var num1 = 10: ", num1);
console.log("var num2 = 20: ", num2);
console.log("var num3 = 30: ", num3);

// let 변수 선언
let string1 = "코끼리";
let string2 = "아저씨는";
let string3 = "코가 손이래";
console.log("let string1 = 코끼리: ", string1);
console.log("let string2 = 아저씨는: ", string2);
console.log("let string3 = 코가 손이래: ", string3);

// const 변수 선언
const NUM10 = 10;
const NUM20 = 20;
const NUM30 = 30;
console.log("const NUM10 = 10 :", NUM10);
console.log("const NUM20 = 20 :", NUM20);
console.log("const NUM30 = 30 :", NUM30);

// 이스케이프 문자 사용 \n - 한칸띄기 \t - 탭키
console.log("이스케이프 문자 \n 사용법이 \t 이게 맞나?");

// + 활용하여 여러개의 문자열 연결하기
console.log(
  "문자열 연결 연산자 사용으로 " + NUM10 + "const NUM10값인 10을 가져왔습니다."
);

// 배열을 4개 선언하고 배열 요소들 출력하기
let hobbies = ["gaming", "coding", "wordpress", "reading", null, undefined];
console.log(hobbies)
console.log("배열요소를 문자열로 결합해 출력해 보겠습니다");
console.log(`(백틱 활용) my hobbies: ${hobbies}`);
console.log("(백틱 미활용) my hobbies:" + " " + hobbies);

// 객체들을 선언하고 프로필 문장 완성하기
let myProfile = {
  realName: "Ka_hyunghan",
  nickName: "kadang",
  age: 40,
  height: "180cm",
  email: null,
  mail: undefined,
};
console.log(`(백틱 활용) 제 이름은 ${myProfile.realName}이며 닉네임은 ${myProfile.nickName}입니다.
나이는 ${myProfile.age}이며 키는 ${myProfile.height}입니다. 메일주소는 ${myProfile.email}입니다.`);
console.log(
  "(백틱 미활용) 제 이름은" +
    " " +
    myProfile.realName +
    "이며 닉네임은 " +
    myProfile.nickName +
    "입니다. \n" +
    "나이는 " +
    myProfile.age +
    "이며 키는 " +
    myProfile.height +
    "입니다. 메일주소는 " +
    myProfile.mail +
    "입니다"
);

// typeof를 활용하여 타입 확인하기
console.log(
  "string1과 num1 그리고 NUM10의 타입을 typeof를 활용해 출력해봅니다"
);
console.log(typeof string1, typeof num1, typeof NUM10);

console.log("null과 undefined는 아직 잘 모르겠습니다..")