/**
 * movie.js
 * 영화 목록을 관리하고 출력하는 프로그램
 */

// =======================================================
// 변수 및 데이터 선언
// =======================================================
// const: 기본 장르를 저장하는 상수
const DEFAULT_GENRE = "정보 없음";

// let: 영화 객체들을 저장하는 배열 (나중에 추가/삭제 가능)
let movies = [
  {
    title: "아저씨",
    director: "이정범", // 감독 정보 수정
    year: 2010,       // 개봉 연도 수정
    genre: "액션",
  },
  {
    title: "회사원",
    director: "임상윤", // 감독 정보 수정
    year: 2012,       // 개봉 연도 수정
    genre: "느와르",
  },
  {
    title: "타짜",
    director: "최동훈", // 감독 정보 수정
    year: 2006,       // 개봉 연도 수정
    genre: "드라마",
  },
  {
    // 일부러 감독 정보를 비워둠 (기본값 설정 테스트용)
    title: "올드보이",
    director: "",
    year: 2003,
    genre: "스릴러",
  },
];

// var: 반복문에서 사용할 카운터 변수 (함수 스코프)
var movieCounter;

// =======================================================
// 영화 목록 출력 함수 (함수 선언문)
// =======================================================
/**
 * 영화 배열을 받아와서 정해진 형식으로 콘솔에 출력하는 함수
 * @param {Array} movieList - 출력할 영화 객체들의 배열
 */
function printMovies(movieList) {
  console.log("Movie Collection:");

  // for 반복문을 사용하여 배열의 모든 영화를 순회
  for (movieCounter = 0; movieCounter < movieList.length; movieCounter++) {
    let movie = movieList[movieCounter]; // 현재 순서의 영화 객체를 가져옴

    // --- 조건문과 연산자를 활용한 유효성 검사 및 기본값 설정 ---
    // 감독 정보가 비어있으면(falsy: "", null, undefined 등) 기본값을 설정
    if (!movie.director) {
      movie.director = "감독 정보 없음";
    }
    // 장르 정보가 비어있으면 상수로 선언한 기본값을 설정
    if (!movie.genre) {
      movie.genre = DEFAULT_GENRE;
    }

    // 템플릿 리터럴을 사용해 최종 출력 문자열 생성
    console.log(
      `${movieCounter + 1}. Title: ${movie.title}, Director: ${
        movie.director
      }, Year: ${movie.year}, Genre: ${movie.genre}`
    );
  }

  // 총 영화 수 출력
  console.log(`\nTotal Movies: ${movieList.length}`);
}

// =======================================================
// 함수 호출
// =======================================================
// 위에서 만든 movies 배열을 인수로 전달하여 함수를 실행
printMovies(movies);
