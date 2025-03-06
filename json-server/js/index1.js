let listpost = document.querySelector(".list-item")
fetch(" https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((post) => {
        console.log(post);
        let htmls = post.map((post) => {
            {
                return `
                <li>
                <h3>${post.id}</h3>
                <h2>${post.title}</h2>
                <h3>${post.body}</h3>
                </li>
                `

            }
        });
        let html = htmls.join("")
        listpost.innerHTML = html;
    })
    .catch((err) => {
        console.log(err);
    })