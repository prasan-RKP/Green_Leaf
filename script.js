
/*
  HOTEL DIGITAL MENU

  Edit item names and prices here.
  Prices are in Indian rupees (₹).
*/

const menuData = {
  // 10 BREAKFAST ITEMS
  breakfast: [
    { name: "Plain Dosa", price: 50 },
    { name: "Masala Dosa", price: 80 },
    { name: "Idli (2 pieces)", price: 35 },
    { name: "Vada (2 pieces)", price: 40 },
    { name: "Idli Vada Combo", price: 55 },
    { name: "Poha", price: 35 },
    { name: "Upma", price: 40 },
    { name: "Aloo Paratha", price: 60 },
    { name: "Poori Bhaji", price: 55 },
    { name: "Bread Omelette", price: 50 }
  ],

  // 30 LUNCH ITEMS
  lunch: [
    { name: "Steamed Rice", price: 50 },
    { name: "Jeera Rice", price: 80 },
    { name: "Veg Pulao", price: 100 },
    { name: "Veg Biryani", price: 120 },
    { name: "Chicken Biryani", price: 180 },
    { name: "Egg Biryani", price: 130 },
    { name: "Dal Fry", price: 80 },
    { name: "Dal Tadka", price: 100 },
    { name: "Plain Dal", price: 50 },
    { name: "Paneer Butter Masala", price: 160 },
    { name: "Kadai Paneer", price: 170 },
    { name: "Shahi Paneer", price: 180 },
    { name: "Mix Veg Curry", price: 120 },
    { name: "Aloo Gobi", price: 100 },
    { name: "Chole Masala", price: 100 },
    { name: "Rajma Masala", price: 110 },
    { name: "Veg Kofta Curry", price: 140 },
    { name: "Mushroom Masala", price: 150 },
    { name: "Chicken Curry", price: 180 },
    { name: "Butter Chicken", price: 220 },
    { name: "Chicken Kadai", price: 210 },
    { name: "Fish Curry", price: 190 },
    { name: "Egg Curry", price: 100 },
    { name: "Roti", price: 12 },
    { name: "Butter Roti", price: 18 },
    { name: "Plain Naan", price: 30 },
    { name: "Butter Naan", price: 40 },
    { name: "Plain Curd", price: 40 },
    { name: "Green Salad", price: 50 },
    { name: "Veg Thali", price: 140 }
  ],

  // 25 DINNER ITEMS
  dinner: [
    { name: "Chapati", price: 12 },
    { name: "Butter Chapati", price: 18 },
    { name: "Plain Paratha", price: 30 },
    { name: "Butter Naan", price: 40 },
    { name: "Garlic Naan", price: 50 },
    { name: "Tandoori Roti", price: 20 },
    { name: "Steamed Rice", price: 50 },
    { name: "Jeera Rice", price: 80 },
    { name: "Veg Fried Rice", price: 100 },
    { name: "Veg Biryani", price: 120 },
    { name: "Paneer Butter Masala", price: 160 },
    { name: "Kadai Paneer", price: 170 },
    { name: "Palak Paneer", price: 150 },
    { name: "Dal Tadka", price: 100 },
    { name: "Dal Makhani", price: 140 },
    { name: "Malai Kofta", price: 160 },
    { name: "Mix Veg Curry", price: 120 },
    { name: "Mushroom Masala", price: 150 },
    { name: "Chicken Curry", price: 180 },
    { name: "Butter Chicken", price: 220 },
    { name: "Chicken Biryani", price: 180 },
    { name: "Chicken Fried Rice", price: 150 },
    { name: "Fish Curry", price: 190 },
    { name: "Egg Curry", price: 100 },
    { name: "Veg Thali", price: 140 }
  ]
};

// Meal category names
const mealLabels = {
  breakfast: "Breakfast",
  lunch: "Lunch",
  dinner: "Dinner"
};

// Get HTML elements
const menuList = document.getElementById("menu-list");
const mealTitle = document.getElementById("meal-title");
const itemCount = document.getElementById("item-count");

const mealTabs = document.querySelectorAll(".meal-tab");

// Format prices as Indian rupees
function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(price);
}

// Display the selected meal's menu
function renderMenu(meal) {
  const items = menuData[meal];

  // Update the heading and item count
  mealTitle.textContent = mealLabels[meal];
  itemCount.textContent = `${items.length} items`;

  // Remove the previously displayed items
  menuList.replaceChildren();

  // Create a row for each item
  items.forEach((item) => {
    const row = document.createElement("li");
    row.className = "menu-item";

    const name = document.createElement("span");
    name.className = "item-name";
    name.textContent = item.name;

    const price = document.createElement("span");
    price.className = "item-price";
    price.textContent = formatPrice(item.price);

    row.append(name, price);
    menuList.appendChild(row);
  });

  // Highlight the selected category
  mealTabs.forEach((tab) => {
    const isActive = tab.dataset.meal === meal;

    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });
}

// Add click events to all three category buttons
mealTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    renderMenu(tab.dataset.meal);
  });
});

// Display item counts on the category buttons
Object.keys(menuData).forEach((meal) => {
  document.getElementById(`${meal}-count`).textContent =
    `${menuData[meal].length} items`;
});

// Display breakfast when the website first opens
renderMenu("breakfast");
