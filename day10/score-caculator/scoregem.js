// =======================================================
// 변수 선언
// =======================================================
// var, let, const 각각 최소 1회 사용
const MAX_SCORE_1 = 100; // 최고 점수 기준 (상수)
let score; // 사용자가 입력할 원점수 (변경 가능)
var grade; // 최종 등급 (변경 가능)

// =======================================================
// 사용자 입력
// =======================================================
// prompt로 문자열 입력받고, parseInt로 숫자로 변환
let inputStr = prompt("시험 점수를 입력하세요 (0~100).");
score = parseInt(inputStr);


// =======================================================
// 연산자 활용
// =======================================================
// 1. 최종 점수 계산 (이항 산술 연산자 +, 복합 대입 연산자 += 중 택 1)
let finalScore = score + 5; // 보너스 5점 추가

// 2. 합격/불합격 여부 결정 (삼항 연산자)
// 최종 점수가 60 이상이면 "Pass", 아니면 "Fail"
const status = finalScore >= 60 ? "Pass" : "Fail";

// =======================================================
// 조건문 활용
// =======================================================
// 1. 등급 결정 (if, else if, else 문 & 비교/논리 연산자)
// 점수가 높은 순서부터 확인해야 논리적 오류가 없습니다.
if (finalScore >= 100) {
  grade = "S";
} else if (finalScore >= 90) {
  grade = "A";
} else if (finalScore >= 80) {
  grade = "B";
} else if (finalScore >= 70) {
  grade = "C";
} else if (finalScore >= 60) {
  grade = "D";
} else {
  grade = "F";
}

// 2. 등급에 따른 메시지 결정 (switch 문)
let message;
switch (grade) {
  case "S":
    message = "Super!!";
    break;
  case "A":
    message = "Excellent work!";
    break;
  case "B":
    message = "Good job!";
    break;
  case "C":
    message = "Satisfactory performance.";
    break;
  case "D":
    message = "Needs improvement.";
    break;
  case "F":
    message = "Please try harder!";
    break;
  default:
    message = "Invalid grade.";
}

// =======================================================
// 최종 결과 출력
// =======================================================
console.log(`Final Score: ${finalScore}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);
console.log(`Message: ${message}`);