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

const orderSchema = new Schema({
    item : String,
    price : Number,
});

const customerSchema = new Schema({
    name : String,
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "Order",
        }
    ]
})

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
    // let customer1 = new Customer({
    //     name : "Rahul Kumar",
    // });
    //
    // let order1 = await Order.findOne({item : "Chips"});
    // let order2 = await Order.findOne({item : "Litti"});
    //
    // customer1.orders.push(order1);
    // customer1.orders.push(order2);
    //
    // let res = await customer1.save();
    // console.log(res);

    let res = await Customer.find({});
    console.log(res);
};

addCustomer();

// const addOrders = async  () => {
//     let res = await Order.insertMany([
//         {item : "Samosa", price : 12},
//         {item : "Chips", price: 10},
//         {item : "Litti", price : 12},
//     ]);
//     console.log(res);
// };

// addOrders()