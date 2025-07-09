let food = 'melon';


// case를 실행하고 없으면 default로 감
switch (food) {
    case 'apple':
        console.log('fruit');
        break;

    default:
        console.log('not food')
        break;
}


// case 안에 melon이 포함되 있으므로 fruit
switch (food) {
    case 'apple':
    case 'melon':
        console.log('fruit');
        break;

    default:
        console.log('not food')
        break;
}


/////////////////////////////////
// if문과 조건문
let score = 90;
let grade;

if (score >= 90 && score <= 100) {
    grade='A++';
}

console.log('grade', grade)