console.log("users: ", window.users);

console.log("todos: ", window.todos);


// - Create an alert that lists all users, with their ids, names and what city they're from
let message = ''
for(const user of users){
    const userId = user.id
    const name = user.name
    const city = user.address.city
    message += `User with Id ${userId}, Name: ${name} lives in: ${city}\n`
}
alert(message)


// - Prompt the user for a user id
const idFromUser = Number(prompt(`Hey user, enter one Id please: `))

// - Display an alert with the username and all the todos titles that belong to that user 

//First I createt another array from todos to put all the titles in arrayWithTitles
let arrayWithTitles = []

for(const todo of todos){
    if(idFromUser === todo.userId){
        arrayWithTitles += `• ${todo.title} \n`;
    }
}
//Than i loop into the users
for(const user of users){
    const userId = user.id
    
    if(userId === idFromUser){
        alert(`Username with id number: ${idFromUser} is ${user.username} and the todo titles are: \n${arrayWithTitles}`)
    }
}