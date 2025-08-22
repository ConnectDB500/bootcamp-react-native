import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart");

const item1 = await createItem("teclado", 49.99, 1);
const item2 = await createItem("mouse", 19.99, 1);

await cartService.addItem(myCart, item1);
// await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, 0);
await cartService.removeItem(myCart)

await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);