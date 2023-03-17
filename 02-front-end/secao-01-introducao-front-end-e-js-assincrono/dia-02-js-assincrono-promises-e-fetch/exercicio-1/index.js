import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';

fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;
    fillUsersSelect(users);
  });

usersSelect.addEventListener('change', () => {
  clearPageData();
  const userID = usersSelect.value;
  fetch(`https://dummyjson.com/posts/user/${userID}`)
    .then(response => response.json())
    .then(data => {
      const { posts } = data;
      fillPosts(posts);
      const featuredPost = posts[0];
      return fetch(`https://dummyjson.com/posts/${featuredPost.id}/comments`)
    })
    .then(response => response.json())
    .then(data => {
      const { comments } = data;
      fillFeaturedPostComments(comments);
    })
    .catch(error => {
      fillErrorMessage('Erro');
      console.log(error.message);
    })
});
