const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "Rahul",
    to: "Ratan",
    msg: "come to Karnpura field",
    created_at: new Date(),
    },
    {
    from: "Sonal",
    to: "Rumal",
    msg: "diy to vist Kashmir ?",
    created_at: new Date(),
    },
    {
    from: "Amar",
    to: "jatin",
    msg: "Hey, what's going on ?",
    created_at: new Date(),
    },
    {
    from: "Raja",
    to: "Isha",
    msg: "send today's class notes",
    created_at: new Date(),
    },
];

Chat.insertMany(allChats);
