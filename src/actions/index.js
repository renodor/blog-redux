export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

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
