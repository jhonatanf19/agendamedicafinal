document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').value;

    const postSection = document.getElementById('posts');

    const post = document.createElement('div');
    post.className = 'post';

    const postTitle = document.createElement('h3');
    postTitle.textContent = title;
    post.appendChild(postTitle);

    if (image) {
        const postImage = document.createElement('img');
        postImage.src = image;
        post.appendChild(postImage);
    }

    const postContent = document.createElement('p');
    postContent.textContent = content;
    post.appendChild(postContent);

    postSection.appendChild(post);

    document.getElementById('postForm').reset();
});