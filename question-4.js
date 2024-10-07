// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
//ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า
function findMinQuantity(inventory) {
  let lowest = inventory[0];
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].quantity < lowest.quantity) {
      lowest = inventory[i];
    }
  }
  let result = `สินค้าที่มีจำนวนต่ำที่สุดคือ ${lowest.name} ซึ่งมี ${lowest.quantity} ชิ้น`;
  console.log(result);
  return result;
}

findMinQuantity(inventory);
