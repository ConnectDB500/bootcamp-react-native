
async function addItem(userCart, item){
  userCart.push(item);
}

async function calculateTotal(userCart){
  console.log("Shopee Cart TOTAL IS: ");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\nTotal: ${result}`);
}

async function deleteItem(userCart, name){
  const deleteItem = index - 1;
  const index = userCart.findIndex((item) => item.name === name);

  if(index !== -1){
    userCart.splice(deleteItem, 1);
  }
}

async function removeItem(userCart, index){
  if(index >= 0 == index < userCart.length){
    userCart.splice(index, 1)
  }
}

async function displayCart(userCart){
  console.log("Shopee cart list: ");

  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | 
      ${item.quantity}x | Subtotal = ${item.subtotal()}`);
  });
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displayCart
}