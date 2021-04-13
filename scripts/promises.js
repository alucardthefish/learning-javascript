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
            output += `<li>${post.title}</li>`
        });
        let container = document.querySelector('#container')
        container.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }
        }, 4000);
    });
}
getPosts();
createPost({ title: 'Another Post', body: 'This is another post' }).then(getPosts);