const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'},
    { title: 'Post Three', body: 'This is post three'},
    { title: 'Post Four', body: 'This is post four'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            //output += `<li>${post.title}</li>`
            output += `<div class="px-5 py-5 mx-auto max-w-sm bg-purple-100 rounded-xl shadow-md">
                <p class="text-md text-purple-900 bold">${post.title}</p>
                <p class="text-sm text-purple-600">${post.body}</p>
            </div>`;
        });
        let container = document.querySelector('#container')
        container.innerHTML = output;
    }, 1000);
}

function createPost(post, secs = 4000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }
        }, secs);
    });
}
getPosts();
createPost({ title: 'Another Post', body: 'This is another post' }).then(getPosts);

// Promise.all

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

// Async /  Await

async function init() {
    await createPost({ title: 'Async n Await post', body: 'This is an async and await post' }, 7000);
    getPosts();
}

init();