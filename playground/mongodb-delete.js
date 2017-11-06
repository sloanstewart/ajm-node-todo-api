// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database.');
    }
    console.log('Connected to database.');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'send a suh dude to the homes'}).then( (result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'skirrr'}).then( (result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then( (result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteOne({_id: new ObjectID('5a005dd1981502196a1839ed')}).then( (result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({name: 'Skeeter'}).then( (result) => {
        console.log(result);
    });

    // db.close();
});