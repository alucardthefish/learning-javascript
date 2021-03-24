
const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.btn').style.background = 'black';
    document.querySelector('body').classList.add('bg-dark');
})