let postsArray = [];
const titleInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");
const form = document.getElementById("new-post");

function renderPost() {
  let html = "";
  for (let post of postsArray) {
    html += `
            <div class="card">
             <header class="card-header">
            <p class="card-header-title">${post.title}</p>
            <div class="card-content">
            <div class="content">
            ${post.body}
            </div>
          </div>
            </header>
        </div>
                 <hr />
            `;
  }
  document.getElementById("blog-list").innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPost();
  });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const postTitle = titleInput.value;
  const postBody = bodyInput.value;
  const data = {
    title: postTitle,
    body: postBody,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((res) => res.json())
    .then((post) => {
      postsArray.unshift(post);
      renderPost();
      /**
       * Challenge: clear the form out!
       */
      // titleInput.value = ""
      // bodyInput.value = ""
      form.reset();
    });
});

fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Oslo")
  .then((res) => res.json())
  .then((data) => console.log(data));
