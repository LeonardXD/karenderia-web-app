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