// String.length
// length : 문자의 길이 파악
const pw = "123";
console.log(pw.length);
if(pw.length < 4) {
    console.log("최소4자리 입력하세요.");
}

// includes()
// 문자에 ()안의 문자가 포함되었는지 확인
const email = "test!naver.com";
console.log(email.includes("@"));
if(!email.includes("@")) { // !를 넣음으로써 @가 포함되어있지 않으면 이라는 부정이 됨
    console.log("이메일 형식을 확인하세요");
}
console.log(email[0]);
console.log(email[1]);
console.log(email[2]);
console.log(email[3]);

// indexOf()
// ()안의 문자가 몇 번째 문자인지 확인. 문자열이 없으면 -1 출력
console.log(email.indexOf("@"));// email란에서 @는 몇 번째인가? 0번째부터 시작!!
console.log(email.indexOf("!"));// 내가 찾으려는 문자열이 없으면 -1을 출력한다.


if(email.indexOf("@") < 0) { // indexOf를 사용하여 포함되지 않으면 -1을 반환하므로 이를 활용하여 형식을 확인한다.
    console.log("이메일 형식을 확인하세요");
}

// trim()
// 앞뒤의 여백을 없애준다.
const textarea='      어렵다        ';
console.log("textarea", textarea);
console.log("textarea", textarea.trim()); // 공란이 삭제된 상태로 출력


// replace( , ) / replaceAll( , )
// ,앞의 것을 ,뒤의 것으로 한개 또는 모두 변경한다.
const needToDelDot = "안녕하세요. 나는 수업이 너무 어렵습니다.";
console.log("needToDelDot", needToDelDot);
console.log("needToDelDot", needToDelDot.replace(".",""));
console.log("needToDelDot", needToDelDot.replaceAll(".","|"));

