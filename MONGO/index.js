const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete("66a4fbd8d6a7613158196380").then(res => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

// User.findOneAndUpdate({name : "Eve"}, {age : 28}, {new : true}).then(res => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findById("66a4fab2af06c68d4f6667a0").then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// User.insertMany([
//     {name : "Tony", email : "tony@gmail.com", age : 50},
//     {name : "Peter", email : "peter@gmail.com", age : 30},
//     {name : "Bruce", email : "bruce@gmail.com", age : 40},
//     {name : "Marlo", email : "marlo@gmail.com", age : 50},
// ]).then(res => {
//     console.log(res);
// });

// const user2 = new User({
//     name : "Eve",
//     email : "eve@gmail.com",
//     age : 48,
// });
//
// user2.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });