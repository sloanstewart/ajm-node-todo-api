// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database.');
    }
    console.log('Connected to database.');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a005cbb981502196a1839ec')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( (result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59ffd107b7219f5704876c8f')
    }, {
        $set: {name: 'Ya Boi'},
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then( (result) => {
        console.log(result);
    });

    // db.close();
});