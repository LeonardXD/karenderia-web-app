// LOAD SALES DATA FROM LOCAL STORAGE
let totalOrders = JSON.parse(localStorage.getItem("totalOrders")) || 0;
let dailySales = JSON.parse(localStorage.getItem("dailySales")) || 0;

// DISPLAY SALES SUMMARY
const ordersDisplay = document.getElementById("totalOrders");
const salesDisplay = document.getElementById("dailySales");

if (ordersDisplay && salesDisplay) {
    ordersDisplay.textContent = totalOrders;
    salesDisplay.textContent = dailySales;
}

const menuItems = [
    { name: "Chicken Adobo", description: "Classic Filipino chicken adobo", price: 120 },
    { name: "Pork Sinigang", description: "Sour pork soup with vegetables", price: 130 },
    { name: "Beef Caldereta", description: "Spicy beef stew", price: 150 },
    { name: "Fried Bangus", description: "Crispy fried milkfish", price: 110 },
    { name: "Rice", description: "Steamed white rice", price: 20 }
];

let order = [];
let total = 0;

const menuList = document.getElementById("menuList");
const orderList = document.getElementById("orderList");
const totalDisplay = document.getElementById("total");

/* DISPLAY MENU */
menuItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <h4>${item.name} - ₱${item.price}</h4>
      <p>${item.description}</p>
      <button onclick="addToOrder(${index})">Add</button>
    `;
    menuList.appendChild(div);
});

/* ADD ITEM */
function addToOrder(index) {
    order.push(menuItems[index]);
    total += menuItems[index].price;
    updateOrder();
}

/* UPDATE ORDER */
function updateOrder() {
    orderList.innerHTML = "";

    order.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        ${item.name} - ₱${item.price}
        <button onclick="removeItem(${index})">Remove</button>
      `;
        orderList.appendChild(li);
    });

    totalDisplay.textContent = total;
}

/* REMOVE ITEM */
function removeItem(index) {
    total -= order[index].price;
    order.splice(index, 1);
    updateOrder();
}

/* PLACE ORDER */
function placeOrder() {
    if (order.length === 0) {
        alert("Your order is empty!");
        return;
    }

    alert(`Order placed successfully!\nTotal: ₱${total}`);
    order = [];
    total = 0;
    updateOrder();
}
