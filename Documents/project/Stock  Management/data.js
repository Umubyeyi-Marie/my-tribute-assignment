class StockManagement {
    constructor() {
        this.stock = [];
    }
    // adding of items
    addItemToStock(item) {
        this.stock.push(item);
        console.log(`Item added to stock: ${item.name}`);
    }
    //listing of items
    listItemsInStock() {
        console.log('Items in stock:');
        this.stock.forEach((item) => {
            console.log(`Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`);
        });
    }
    //updating of items
    updateItemInStock(itemId, updatedQuantity) {
        const foundItem = this.stock.find((item) => item.id === itemId);

        if (foundItem) {
            foundItem.quantity = updatedQuantity;
            console.log(`Item updated: ${foundItem.name}, New Quantity: ${foundItem.quantity}`);
        } else {
            console.log('Item not found in stock.');
        }
    }
    
   //listing of available items 
  listAvailableItems() {
    const availableItems = this.stock.filter((item) => item.quantity > 0);

    if (availableItems.length > 0) {
      console.log('Available items in stock:');
      availableItems.forEach((item) => {
        console.log(`ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`);
      });
    } else {
      console.log('No available items in stock.');
    }
  }
  //finding items in the stock
  findItemById(itemId) {
    const foundItem = this.stock.find((item) => item.id === itemId);

    if (foundItem) {
      console.log(`Item found: ID: ${foundItem.id}, Name: ${foundItem.name}, Quantity: ${foundItem.quantity}, Price: ${foundItem.price}`);
    } else {
      console.log('Item not found in stock.');
    }
  }

    }

    


// let use this example

const stockManager = new StockManagement();

const item1 = {
    id :23456,
    name: "apple juice",
    quantity: 13,
    price: 5000,
};
const item2 ={
    id : 14567,
    name : "mango juice",
    quantity :17,
    price : 800
}
const item3 = {
    id : 45673,
    name :"strawberry juice",
    quantity : 19,
    price : 850
}


//adding data in the stock
stockManager.addItemToStock(item3);
stockManager.addItemToStock(item2);
stockManager.addItemToStock(item1);

stockManager.listItemsInStock();

//updating data in the stock 
const itemIdToUpdate = item1.id;
const updatedQuantity = 6;
stockManager.updateItemInStock(itemIdToUpdate, updatedQuantity);

stockManager.listItemsInStock();
//listing available item in stock
stockManager.listAvailableItems();
//finding item in the stock
const itemIdToFind = item.id;
stockManager.findItemById(itemIdToFind);
