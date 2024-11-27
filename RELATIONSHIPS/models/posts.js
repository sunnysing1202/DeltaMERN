const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(() => {
        console.log('MongoDB Connected!');
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    userName : String,
    email : String,
});

const postSchema = new Schema({
    content : String,
    likes : Number,
    user : [
        {
            type : Schema.Types.ObjectId,
            ref : " User",
        },
    ],
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    let user = await User.findOne({username: "rahulkumar"});

    let post2 = new Post({
        content : "Bye Bye",
        likes : 18,
    });

    post2.user = user;
    await post2.save()
}

addData();

