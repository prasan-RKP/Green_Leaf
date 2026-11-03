/* script.js */

const menuData = {
  breakfast: [
    {
      name: "Masala Dosa",
      description: "Crispy rice crepe filled with spiced potato, served with sambar & chutney.",
      price: 80,
      image: "./dosa.avif",
    },
    {
      name: "Idli (2 pieces)",
      description: "Steamed rice cakes, soft and fluffy, served with sambar and coconut chutney.",
      price: 35,
      image: "./idli.jpg",
    },
    {
      name: "Poha",
      description: "Flattened rice tempered with turmeric, mustard seeds, and fresh coriander.",
      price: 35,
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Upma",
      description: "Savory semolina porridge cooked with vegetables and aromatic spices.",
      price: 40,
      image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Aloo Paratha",
      description: "Whole wheat flatbread stuffed with spiced potato, served with curd and pickle.",
      price: 60,
      image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=200&q=80",
    },
  ],
  lunch: [
    {
      name: "Veg Biryani",
      description: "Fragrant basmati rice layered with mixed vegetables and saffron.",
      price: 120,
      image: "https://images.pexels.com/photos/7837978/pexels-photo-7837978.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Chicken Biryani",
      description: "Aromatic rice cooked with tender chicken and traditional spices.",
      price: 180,
      image: "https://wsrv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F05%2F100%2525_Homemade_Biryani.jpg&w=200&output=webp",
    },
    {
      name: "Dal Fry",
      description: "Yellow lentils tempered with cumin, garlic, and onions.",
      price: 80,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Paneer Butter Masala",
      description: "Cottage cheese cubes in a rich, creamy tomato gravy.",
      price: 160,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Kadai Paneer",
      description: "Paneer cooked with bell peppers and freshly ground kadai masala.",
      price: 170,
      image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Chicken Curry",
      description: "Home-style chicken curry with a thick, spiced gravy.",
      price: 180,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Butter Chicken",
      description: "Tandoori chicken simmered in a velvety tomato-butter sauce.",
      price: 220,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Fish Curry",
      description: "Coastal-style fish curry with coconut and tamarind.",
      price: 190,
      image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Veg Thali",
      description: "Assorted vegetarian dishes served with rice, roti, and dessert.",
      price: 140,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Jeera Rice",
      description: "Basmati rice tempered with cumin seeds and ghee.",
      price: 80,
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=200&q=80",
    },
  ],
  dinner: [
    {
      name: "Butter Chicken",
      description: "Creamy tomato chicken curry, a dinner classic.",
      price: 220,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Garlic Naan",
      description: "Tandoor-baked flatbread topped with garlic and coriander.",
      price: 50,
      image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Palak Paneer",
      description: "Cottage cheese cubes in a smooth spinach gravy.",
      price: 150,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Dal Makhani",
      description: "Slow-cooked black lentils with butter and cream.",
      price: 140,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Chicken Biryani",
      description: "Fragrant rice with marinated chicken, cooked dum-style.",
      price: 180,
      image: "https://wsrv.nl/?url=upload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F05%2F100%2525_Homemade_Biryani.jpg&w=200&output=webp",
    },
    {
      name: "Malai Kofta",
      description: "Potato and paneer dumplings in a rich cashew gravy.",
      price: 160,
      image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Tandoori Roti",
      description: "Whole wheat flatbread baked in a clay oven.",
      price: 20,
      image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Egg Curry",
      description: "Boiled eggs simmered in a spiced onion-tomato gravy.",
      price: 100,
      image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Veg Fried Rice",
      description: "Stir-fried rice with crunchy vegetables and soy sauce.",
      price: 100,
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Fish Curry",
      description: "Tangy fish curry with coconut milk and curry leaves.",
      price: 190,
      image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Mix Veg Curry",
      description: "Seasonal vegetables cooked in a mild, spiced gravy.",
      price: 120,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Veg Thali",
      description: "Complete meal with assorted curries, rice, and bread.",
      price: 140,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    },
  ],
};

const mealLabels = {
  breakfast: "Popular Breakfasts",
  lunch: "Main Courses",
  dinner: "Dinner",
};

const menuListEl = document.getElementById("menu-list");
const sectionTitleEl = document.getElementById("section-title");
const cartAmountEl = document.getElementById("cart-amount");
const tabs = document.querySelectorAll(".tab");

let cart = {};

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(price);
}

function updateCartDisplay() {
  const total = Object.values(cart).reduce((sum, item) => sum + item.price * item.qty, 0);
  cartAmountEl.textContent = formatPrice(total);
}

function renderMenu(meal) {
  const items = menuData[meal];
  sectionTitleEl.textContent = mealLabels[meal];
  menuListEl.innerHTML = "";

  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "menu-card";

    const img = document.createElement("img");
    img.className = "menu-image";
    img.src = item.image;
    img.alt = item.name;
    img.loading = "lazy";

    const info = document.createElement("div");
    info.className = "menu-info";

    const name = document.createElement("h3");
    name.className = "menu-name";
    name.textContent = item.name;

    const desc = document.createElement("p");
    desc.className = "menu-desc";
    desc.textContent = item.description;

    const bottom = document.createElement("div");
    bottom.className = "menu-bottom";

    const price = document.createElement("span");
    price.className = "menu-price";
    price.textContent = formatPrice(item.price);

    const qtyControls = document.createElement("div");
    qtyControls.className = "qty-controls";

    const minusBtn = document.createElement("button");
    minusBtn.className = "qty-btn";
    minusBtn.textContent = "−";
    minusBtn.setAttribute("aria-label", `Remove one ${item.name}`);

    const qtyValue = document.createElement("span");
    qtyValue.className = "qty-value";
    qtyValue.textContent = cart[item.name]?.qty || 0;

    const plusBtn = document.createElement("button");
    plusBtn.className = "qty-btn";
    plusBtn.textContent = "+";
    plusBtn.setAttribute("aria-label", `Add one ${item.name}`);

    // Quantity logic
    plusBtn.addEventListener("click", () => {
      if (!cart[item.name]) {
        cart[item.name] = { ...item, qty: 1 };
      } else {
        cart[item.name].qty += 1;
      }
      qtyValue.textContent = cart[item.name].qty;
      updateCartDisplay();
    });

    minusBtn.addEventListener("click", () => {
      if (cart[item.name] && cart[item.name].qty > 0) {
        cart[item.name].qty -= 1;
        qtyValue.textContent = cart[item.name].qty;
        if (cart[item.name].qty === 0) {
          delete cart[item.name];
        }
        updateCartDisplay();
      }
    });

    qtyControls.append(minusBtn, qtyValue, plusBtn);
    bottom.append(price, qtyControls);
    info.append(name, desc, bottom);
    card.append(img, info);
    menuListEl.appendChild(card);
  });

  tabs.forEach((tab) => {
    const isActive = tab.dataset.meal === meal;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });
}

// Tab click handlers
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    renderMenu(tab.dataset.meal);
  });
});

// Initial render
renderMenu("breakfast");
updateCartDisplay();