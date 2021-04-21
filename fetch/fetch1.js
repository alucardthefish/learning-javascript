
document.querySelector('#getText').addEventListener('click', getText);
document.querySelector('#getUsers').addEventListener('click', getUsers);
document.querySelector('#getPosts').addEventListener('click', getPosts);
document.querySelector('#addPost').addEventListener('submit', addPost);

function getText() {
    fetch('./../sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.querySelector('#output').innerHTML = data;
    })
    .catch((err) => console.log(err));
}

function getUsers() {
    fetch('./../json/users.json')
    .then(res => res.json())
    .then(data => {
        let output = '<h2>Users</h2>';
        data.forEach(user => {
            output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>
            `;
        });
        document.querySelector('#output').innerHTML = output;
    })
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        let output = '<h2 class="text-xl bold py-5">Posts</h2>';
        output += '<div class="grid grid-cols-4 gap-4 mt-2">';
        data.forEach(post => {
            output += `
                <div mx-auto my-auto rounded-xl bg-purple-100>
                    <h3 text-blue>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });
        output += '</div>';
        document.querySelector('#output').innerHTML = output;
    })
}

function addPost(e) {
    e.preventDefault();
    
    let title = document.querySelector('#title').value;
    let body = document.querySelector('#body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title:title, body:body})
    })
    .then(res => res.json())
    .then(data => console.log(data));
}