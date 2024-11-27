const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
        min : [1, "Price is too low for amazon selling"],
    },
    discount : {
        type : Number,
        default : 100,
    },
    category : {
        type : String,
        enum: ["fiction", "Non-fiction"],
    },
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("66a5bdf3264078cf42623a82", {price: -500}, {runValidators: true}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err.errors.price.properties.message);
});


// let book1 = new Book({
//     title : "Marvel Comics",
//     price : 1000,
//     category : "fiction",
// });
// book1.save().then(res => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });