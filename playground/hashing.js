const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'password';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     })
// });

var hashedPassword = '$2a$10$vQKz.uashx77AfyCaE/lieS2QZpKptWXMaJo.nosiDyadyNlmKCt2';
bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, 'supersecret');
// console.log(token);

// var decoded = jwt.verify(token, 'supersecret');
// console.log('decoded', decoded);

// var message = 'Yo im a user!';
// var hash = SHA256(message).toString();

// console.log(`
//     Messsage: ${message}
//     Hash: ${hash}
// `);

// var data = {
//   id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'supersecret').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'supersecret').toString();
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. No good!');
// }