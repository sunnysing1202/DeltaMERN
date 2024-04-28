// let n = 5;
//  for(let i = 0; i < n; i++) {
//     console.log("hello ", i);
//  }

//  console.log("bye!!");

// let args = process.argv;
// for(let i = 0; i < args.length; i++) {
//    console.log("hello to ", args[i]);
// }

// const math = require("./math"); //math.js se script.js ne import kar liya, require ki help se

// console.log(math.sum(2, 2));


/**
 * fruits repo ko access kar rhe hai dusre repo mein
 */

// const info = require("./Fruits");
// console.log(info);

/**
 * using import
 */

import {sum, g} from "./math.js"
import { generate} from "random-words";

// console.log(sum(1, 2));
console.log(generate());