const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5a03671d3883441cfc4b9686--';

// if (!ObjectID.isValid(id)) {
//     return console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((err) => console.log(err));

// Find a User
User.findById('5a034dae3972bd18b842d158').then((user) => {
    if(!user) {
        return console.log('Id not found');
    }
    console.log('User by Id', user);
}).catch((err) => console.log(err));