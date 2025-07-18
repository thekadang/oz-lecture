// list.js (포스트 목록 화면용 JavaScript)

// [추가] API 기본 URL을 상수로 선언하여 관리 용이성을 높입니다.
const API_URL = "https://jsonplaceholder.typicode.com";

/**
 * [추가] 포스트 목록을 화면에 렌더링하는 함수
 * @param {Array} posts - 화면에 표시할 포스트 객체 배열
 */
function renderPosts(posts) {
    const postList = document.getElementById("post-list");
    postList.innerHTML = ""; // 기존 목록이 있다면 초기화합니다.

    posts.forEach(post => {
        const li = document.createElement("li");
        // [수정] 클릭 가능한 링크(a 태그)로 만들어 SEO와 웹 접근성을 향상시킵니다.
        const link = document.createElement("a");
        link.href = `detail.html?postId=${post.id}`;
        link.textContent = post.title;

        li.appendChild(link);
        postList.appendChild(li);
    });
}

/**
 * [수정] API로부터 포스트 목록을 가져와 화면에 표시하는 메인 함수
 */
async function fetchAndDisplayPosts() {
    try {
        // fetch를 사용해 API에 GET 요청을 보냅니다.
        const response = await fetch(`${API_URL}/posts`);
        // 응답이 성공적이지 않으면 에러를 발생시킵니다.
        if (!response.ok) {
            throw new Error(`Failed to fetch posts: ${response.status}`);
        }
        // 응답 본문을 JSON 형태로 파싱합니다.
        const posts = await response.json();

        // 파싱된 데이터를 사용해 화면에 목록을 그립니다.
        renderPosts(posts);

    } catch (error) {
        // 에러가 발생하면 콘솔에 에러 메시지를 출력합니다.
        console.error("Error:", error.message);
        // 사용자에게도 에러 상황을 알려줄 수 있습니다.
        document.getElementById("post-list").innerHTML = "<li>포스트를 불러오는 데 실패했습니다.</li>";
    }
}

// 페이지가 로드되면 포스트 목록을 가져와 표시하는 함수를 실행합니다.
fetchAndDisplayPosts();