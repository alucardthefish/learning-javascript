
// For statement
for (let i = 0; i < 10; i++) {
    //console.log(`For Loop Number: ${i}`);  
}

// While
let i = 0;
while(i < 10) {
    //console.log(`While Loop Number: ${i}`);
    i++;
}

// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text)
// }

for (let todo of todos) {
    console.log(todo);
}

// forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const completed = todos.filter(function(todo) {
    return todo.isCompleted;
}).map(function(todo) {
    return todo.text;
});

console.log(completed);