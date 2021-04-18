
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
        let output = '<h2>Posts</h2>';
        data.forEach(post => {
            output += `
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });
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