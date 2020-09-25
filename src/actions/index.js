export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const POST_CREATED = 'POST_CREATED';

const apiKey = '?key=WAGON-BLOG';
const baseUrl = 'http://reduxblog.herokuapp.com/api/posts/';

export function fetchPosts() {
  const url = `${baseUrl}${apiKey}`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: FETCH_POSTS,
    payload: promise
  };
}

export function fetchPost(id) {
  const url = `${baseUrl}${id}${apiKey}`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: FETCH_POST,
    payload: promise
  };
}


export function createPost(body, callback) {
  const request = fetch(`${baseUrl}${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: POST_CREATED,
    payload: request
  };
}
