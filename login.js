/* =====================================================
   TOMATO HOME PAGE JAVASCRIPT
===================================================== */

/* =====================================================
   PROFILE IMAGE
===================================================== */

const profileImage = document.getElementById("profileImage");

const menuProfileImage = document.getElementById("menuProfileImage");

const menuProfileName = document.getElementById("menuProfileName");

const menuProfileEmail = document.getElementById("menuProfileEmail");

function createDefaultProfileImage() {
  return (
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="100"
                 height="100"
                 viewBox="0 0 100 100">

                <circle
                    cx="50"
                    cy="50"
                    r="50"
                    fill="#ffe5dc"
                />

                <circle
                    cx="50"
                    cy="38"
                    r="17"
                    fill="#e23744"
                />

                <path
                    d="M20 85
                       C20 65 34 55 50 55
                       C66 55 80 65 80 85"
                    fill="#e23744"
                />

            </svg>
        `)
  );
}

function loadProfile() {
  const userName = localStorage.getItem("userName");

  const userEmail = localStorage.getItem("userEmail");

  const userPicture = localStorage.getItem("userPicture");

  const defaultImage = createDefaultProfileImage();

  /* ONLY PROFILE IMAGE IS SHOWN */

  profileImage.src = userPicture || defaultImage;

  menuProfileImage.src = userPicture || defaultImage;

  menuProfileName.textContent = userName || "My Account";

  menuProfileEmail.textContent = userEmail || "Welcome to TOMATO";
}

loadProfile();

/* =====================================================
   LOGOUT
===================================================== */

const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function () {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userPicture");

  window.location.href = "login.html";
});

/* =====================================================
   LOCATION
===================================================== */

const locationSelect = document.getElementById("locationSelect");

function loadSavedLocation() {
  const savedLocation = localStorage.getItem("selectedLocation");

  if (!savedLocation) {
    return;
  }

  const option = [...locationSelect.options].find(
    (option) => option.value === savedLocation,
  );

  if (option) {
    locationSelect.value = savedLocation;
  }
}

loadSavedLocation();

locationSelect.addEventListener("change", function () {
  localStorage.setItem("selectedLocation", this.value);

  filterByLocation(this.value);
});

/* =====================================================
   CART
===================================================== */

const CART_KEY = "tomatoCart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function updateCartCount() {
  const cart = getCart();

  const totalQuantity = cart.reduce(
    (total, item) => total + Number(item.quantity),
    0,
  );

  const cartCount = document.getElementById("cartCount");

  cartCount.textContent = totalQuantity;
}

updateCartCount();

/* =====================================================
   PLUS BUTTON
===================================================== */

const plusButtons = document.querySelectorAll(".plus-button");

plusButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const id = this.dataset.id;

    const name = this.dataset.name;

    const price = Number(this.dataset.price);

    const image = this.dataset.image;

    let cart = getCart();

    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        id: id,

        name: name,

        price: price,

        image: image,

        quantity: 1,
      });
    }

    saveCart(cart);

    updateQuantityOnPage(id);

    updateCartCount();
  });
});

/* =====================================================
   MINUS BUTTON
===================================================== */

const minusButtons = document.querySelectorAll(".minus-button");

minusButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const id = this.dataset.id;

    let cart = getCart();

    const existingItem = cart.find((item) => item.id === id);

    if (!existingItem) {
      return;
    }

    existingItem.quantity--;

    if (existingItem.quantity <= 0) {
      cart = cart.filter((item) => item.id !== id);
    }

    saveCart(cart);

    updateQuantityOnPage(id);

    updateCartCount();
  });
});

/* =====================================================
   UPDATE QUANTITY DISPLAY
===================================================== */

function updateQuantityOnPage(id) {
  const quantityElement = document.querySelector(`.quantity[data-id="${id}"]`);

  if (!quantityElement) {
    return;
  }

  const cart = getCart();

  const item = cart.find((item) => item.id === id);

  quantityElement.textContent = item ? item.quantity : 0;
}

function loadAllQuantities() {
  const quantities = document.querySelectorAll(".quantity");

  quantities.forEach((element) => {
    updateQuantityOnPage(element.dataset.id);
  });
}

loadAllQuantities();

/* =====================================================
   RESTAURANTS
===================================================== */

const restaurantCards = [...document.querySelectorAll(".restaurant-card")];

const restaurantGrid = document.getElementById("restaurantGrid");

const noResults = document.getElementById("noResults");

/* =====================================================
   LOCATION FILTER
===================================================== */

function filterByLocation(location) {
  let visibleCount = 0;

  restaurantCards.forEach((card) => {
    const cardLocation = card.dataset.location;

    if (location === "Bengaluru" || cardLocation === location) {
      card.style.display = "";

      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
}

/* =====================================================
   CATEGORY FILTER
===================================================== */

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach((card) => {
  card.addEventListener("click", function () {
    const category = this.dataset.category;

    filterByCategory(category);

    document.getElementById("restaurants").scrollIntoView({
      behavior: "smooth",
    });
  });
});

function filterByCategory(category) {
  let visibleCount = 0;

  restaurantCards.forEach((card) => {
    const cardCategory = card.dataset.category.toLowerCase();

    if (cardCategory.includes(category.toLowerCase())) {
      card.style.display = "";

      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
}

/* =====================================================
   SEARCH
===================================================== */

const searchInput = document.getElementById("searchInput");

const searchButton = document.getElementById("searchButton");

function performSearch() {
  const value = searchInput.value.trim().toLowerCase();

  if (!value) {
    showAllRestaurants();

    return;
  }

  let visibleCount = 0;

  restaurantCards.forEach((card) => {
    const name = card.dataset.name.toLowerCase();

    const category = card.dataset.category.toLowerCase();

    const location = card.dataset.location.toLowerCase();

    const text = card.innerText.toLowerCase();

    if (
      name.includes(value) ||
      category.includes(value) ||
      location.includes(value) ||
      text.includes(value)
    ) {
      card.style.display = "";

      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";

  document.getElementById("restaurants").scrollIntoView({
    behavior: "smooth",
  });
}

searchButton.addEventListener("click", performSearch);

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

/* =====================================================
   SEARCH SUGGESTIONS
===================================================== */

const searchSuggestions = document.getElementById("searchSuggestions");

const suggestions = [
  "Biryani",
  "Pizza",
  "Burger",
  "Dosa",
  "Cake",
  "Chinese",
  "Chicken",
  "Indian",
  "Koramangala",
  "Indiranagar",
  "Whitefield",
  "HSR Layout",
  "Jayanagar",
];

searchInput.addEventListener("input", function () {
  const value = this.value.trim().toLowerCase();

  if (!value) {
    searchSuggestions.classList.remove("show");

    return;
  }

  const matches = suggestions.filter((item) =>
    item.toLowerCase().includes(value),
  );

  if (!matches.length) {
    searchSuggestions.classList.remove("show");

    return;
  }

  searchSuggestions.innerHTML = "";

  matches.slice(0, 6).forEach((item) => {
    const div = document.createElement("div");

    div.className = "suggestion-item";

    div.textContent = "🔍 " + item;

    div.addEventListener("click", function () {
      searchInput.value = item;

      searchSuggestions.classList.remove("show");

      performSearch();
    });

    searchSuggestions.appendChild(div);
  });

  searchSuggestions.classList.add("show");
});

/* =====================================================
   CLOSE SEARCH SUGGESTIONS
===================================================== */

document.addEventListener("click", function (event) {
  if (!event.target.closest(".search-box")) {
    searchSuggestions.classList.remove("show");
  }
});

/* =====================================================
   LOCATION CARDS
===================================================== */

const locationCards = document.querySelectorAll(".location-card");

locationCards.forEach((card) => {
  card.addEventListener("click", function () {
    const location = this.dataset.location;

    locationSelect.value = location;

    localStorage.setItem("selectedLocation", location);

    filterByLocation(location);

    document.getElementById("restaurants").scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* =====================================================
   SORT
===================================================== */

const sortSelect = document.getElementById("sortSelect");

sortSelect.addEventListener("change", function () {
  const value = this.value;

  const sorted = [...restaurantCards];

  if (value === "rating") {
    sorted.sort((a, b) => Number(b.dataset.rating) - Number(a.dataset.rating));
  }

  if (value === "delivery") {
    sorted.sort(
      (a, b) => Number(a.dataset.delivery) - Number(b.dataset.delivery),
    );
  }

  sorted.forEach((card) => restaurantGrid.appendChild(card));
});

/* =====================================================
   FAVOURITES
===================================================== */

const heartButtons = document.querySelectorAll(".heart-button");

heartButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.stopPropagation();

    this.classList.toggle("liked");

    this.textContent = this.classList.contains("liked") ? "♥" : "♡";
  });
});

/* =====================================================
   SHOW ALL
===================================================== */

function showAllRestaurants() {
  restaurantCards.forEach((card) => {
    card.style.display = "";
  });

  noResults.style.display = "none";
}

/* =====================================================
   PROFILE IMAGE ERROR HANDLING
===================================================== */

profileImage.addEventListener("error", function () {
  this.src = createDefaultProfileImage();
});

menuProfileImage.addEventListener("error", function () {
  this.src = createDefaultProfileImage();
});
