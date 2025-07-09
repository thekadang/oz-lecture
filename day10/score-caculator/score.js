const MAX_SCORE = 105;
let input;
var grade;


// 사용자 입력
let inputStr = prompt("점수를 입력하세요.");
// console.log(inputStr);
input = parseInt(inputStr);
// console.log(input);



//최종 점수 계산 (5점 추가)
let finalScore = input + 5;

// 등급 결정 (if문)
if (finalScore >= 100) {
    grade = 'S';
} else if (finalScore >= 90 && finalScore < 100) {
    grade = 'A';
} else if (finalScore >= 80 && finalScore < 90) {
    grade = 'B';
} else if (finalScore >= 70 && finalScore < 80) {
    grade = 'C';
} else if (finalScore >= 60 && finalScore < 70) {
    grade = 'D';
} else {
    grade = 'F';
}

// 합격 / 불합격 여부 결정 (삼항 연산자)
const status = finalScore >= 60 ? "Pass" : 'Fail';


// 등급에 따른  console.log 출력 (switch문)
let massage;
switch (grade) {
    case 'S':
        massage = '"super"';
        /// console.log(massage);
        break;
    
    case 'A':
        massage = '"Excellent work!"';
        // console.log(massage);
        
        break;

    case 'B':
        massage = '"Good job!"';
        // console.log(massage);
        
        break;

    case 'C':
        massage = '"Satisfactory performance."';
        // console.log(massage);
        
        break;

    case 'D':
        massage = '"Needs improvement"';
        // console.log(massage);
        
        break;

    default:
        massage = '"Please try harder!"';
        // console.log(massage);
        
        break;
}


// 요구사항에 맞게 마지막에 모아서 출력
console.log(`Final Score: ${finalScore}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);
console.log(`Message: ${massage}`);