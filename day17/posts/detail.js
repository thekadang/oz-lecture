// detail.js (포스트 상세 화면용 JavaScript)

// [추가] API 기본 URL을 상수로 선언합니다.
const API_URL = "https://jsonplaceholder.typicode.com";

/**
 * [추가] 포스트 상세 내용을 화면에 렌더링하는 함수
 * @param {object} post - 화면에 표시할 포스트 객체
 */
function renderPost(post) {
    const postDetail = document.getElementById("post-detail");
    // [수정] 제목과 본문을 명확하게 구분하여 렌더링합니다.
    postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
    // [추가] SEO를 위해 페이지 제목도 포스트 제목으로 변경합니다.
    document.title = post.title;
}

/**
 * [추가] API로부터 특정 포스트 데이터를 가져오는 함수
 * @param {string} postId - 가져올 포스트의 ID
 * @returns {Promise<object>} - 포스트 데이터 객체
 */
async function fetchPost(postId) {
    const response = await fetch(`${API_URL}/posts/${postId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch post: ${response.status}`);
    }
    return await response.json();
}


/**
 * [수정] URL 파라미터에서 postId를 가져와 포스트 상세 정보를 표시하는 메인 함수
 */
async function fetchAndDisplayPostDetail() {
    try {
        // 1. URL에서 postId 가져오기
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get("postId");
        if (!postId) {
            throw new Error("No post ID provided");
        }

        // --- [추가] 도전 과제: localStorage 캐싱 구현 ---
        const cacheKey = `post_${postId}`;
        const cachedPost = localStorage.getItem(cacheKey);

        let post;

        if (cachedPost) {
            // 2-1. 캐시가 있으면, 캐시에서 데이터를 가져옵니다.
            post = JSON.parse(cachedPost);
            console.log("Post loaded from localStorage"); // 데이터 소스 출력
        } else {
            // 2-2. 캐시가 없으면, API를 통해 데이터를 가져옵니다.
            post = await fetchPost(postId);
            // 가져온 데이터를 나중을 위해 localStorage에 저장합니다.
            localStorage.setItem(cacheKey, JSON.stringify(post));
            console.log("Post fetched from API"); // 데이터 소스 출력
        }
        // --- 캐싱 구현 끝 ---

        // 3. 가져온 데이터로 화면을 렌더링합니다.
        renderPost(post);

    } catch (error) {
        console.error("Error:", error.message);
        document.getElementById("post-detail").innerHTML = "<p>포스트를 불러오는 데 실패했습니다.</p>";
    }
}

// 페이지가 로드되면 포스트 상세 정보를 가져와 표시하는 함수를 실행합니다.
fetchAndDisplayPostDetail();
