// /js/blog.js
document.addEventListener("DOMContentLoaded", function() {
    const blogContainer = document.getElementById("blog-container");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    function displayPost(post) {
        const postElement = document.createElement("div");
        postElement.className = "blog-post";
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><small>By ${post.username}</small>`;
        blogContainer.appendChild(postElement);
    }

    posts.forEach(displayPost);

    const backButton = document.getElementById("back-button");
    backButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});

