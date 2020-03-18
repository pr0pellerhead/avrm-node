const mongoose = require('mongoose');

// mongodb + srv://dev:<password>@cluster0-c3iyx.mongodb.net/test?retryWrites=true&w=majority

mongoose.connect(
    'mongodb+srv://dev:dev123!@cluster0-c3iyx.mongodb.net/ecommerce?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if(err) {
            console.log('Could not connect to database');
            console.log(err);
        }
        return;
    }
);

const Users = mongoose.model(
    'users',
    {
        name: String,
        email: String,
        location: {
            city: String,
            address: String,
            number: String,
            country: String
        },
        password: String
    },
    'users'
);

// read
Users.find({}, (err, data) => {
    if(err){
        return console.log(err);
    }
    console.log(data);
});

// create

let u = new Users({
    name: "Bube Perovski",
    email: "bube@perovski.com",
    location: {
        city: "Skopje",
        address: "Buuuube",
        number: "bb",
        country: "Macedonia"
    },
    password: "ebub123!"
});

u.save((err) => {
    if(err){
        return console.log(err);
    }
});

// update

Users.updateOne(
    { _id: '5e7220c067be4194a8db0924'},
    {
        email: 'ivan@ivanovsky.mk',
        password: 'test100'
    },
    (err) => {
        if(err){
            return console.log(err);
        }
        console.log('User update successfull');
    }
);

// delete

Users.deleteOne({ _id: '5e7230b56aa88d6c4e990e4c'}, (err) => {
    if(err){
        return console.log(err);
    }
    console.log('User deleted successfully');
});