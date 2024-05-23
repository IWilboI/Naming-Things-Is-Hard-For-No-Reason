// /js/form.js
// /js/form.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = form.username.value.trim();
        const title = form.title.value.trim();
        const content = form.content.value.trim();

        if (!username || !title || !content) {
            alert("Please fill out all fields.");
            return;
        }

        const newPost = {
            username,
            title,
            content
        };

        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));

        window.location.href = "blog.html";
    });
});
