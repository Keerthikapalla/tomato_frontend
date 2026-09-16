/* =========================================================
   TOMATO MENU JAVASCRIPT
========================================================= */


/* =========================================================
   RESTAURANT MENUS
========================================================= */

const restaurantMenus = {

    "meghana-foods": {

        name: "Meghana Foods",
        cuisine: "Andhra • Biryani • South Indian",
        rating: "4.6",

        items: [

            {
                id: "mf1",
                name: "Chicken Biryani",
                price: 280,
                category: "Biryani",
                type: "Non-Veg",
                description: "Aromatic basmati rice with spicy Andhra chicken.",
                image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "mf2",
                name: "Paneer Biryani",
                price: 240,
                category: "Biryani",
                type: "Veg",
                description: "Flavourful biryani with soft paneer pieces.",
                image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "mf3",
                name: "Chicken 65",
                price: 220,
                category: "Starters",
                type: "Non-Veg",
                description: "Crispy spicy South Indian chicken starter.",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "mf4",
                name: "Paneer Tikka",
                price: 190,
                category: "Starters",
                type: "Veg",
                description: "Grilled paneer with aromatic spices.",
                image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "mf5",
                name: "Chicken Fried Rice",
                price: 210,
                category: "Main Course",
                type: "Non-Veg",
                description: "Wok tossed rice with chicken and vegetables.",
                image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "mf6",
                name: "Gulab Jamun",
                price: 90,
                category: "Desserts",
                type: "Veg",
                description: "Soft sweet dumplings soaked in sugar syrup.",
                image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=90"
            }

        ]
    },


    "pizza-express": {

        name: "PizzaExpress",
        cuisine: "Pizza • Italian • Pasta",
        rating: "4.5",

        items: [

            {
                id: "pe1",
                name: "Margherita Pizza",
                price: 249,
                category: "Pizza",
                type: "Veg",
                description: "Classic pizza with tomato, mozzarella and basil.",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "pe2",
                name: "Farmhouse Pizza",
                price: 399,
                category: "Pizza",
                type: "Veg",
                description: "Loaded with fresh vegetables and cheese.",
                image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "pe3",
                name: "Chicken Pizza",
                price: 449,
                category: "Pizza",
                type: "Non-Veg",
                description: "Cheesy pizza topped with juicy chicken.",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "pe4",
                name: "Garlic Bread",
                price: 149,
                category: "Starters",
                type: "Veg",
                description: "Crispy garlic bread with butter.",
                image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "pe5",
                name: "Chocolate Cake",
                price: 159,
                category: "Desserts",
                type: "Veg",
                description: "Rich and soft chocolate cake.",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=90"
            }

        ]
    },


    "dash-and-coop": {

        name: "Dash & Coop",
        cuisine: "Burgers • American • Fast Food",
        rating: "4.7",

        items: [

            {
                id: "dc1",
                name: "Classic Chicken Burger",
                price: 249,
                category: "Burgers",
                type: "Non-Veg",
                description: "Juicy chicken patty with fresh lettuce.",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "dc2",
                name: "Cheese Burger",
                price: 229,
                category: "Burgers",
                type: "Veg",
                description: "Crispy patty with melted cheese.",
                image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "dc3",
                name: "French Fries",
                price: 129,
                category: "Starters",
                type: "Veg",
                description: "Golden crispy salted fries.",
                image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "dc4",
                name: "Chocolate Shake",
                price: 169,
                category: "Drinks",
                type: "Veg",
                description: "Creamy chocolate milkshake.",
                image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=90"
            }

        ]
    },


    "vidyarthi-bhavan": {

        name: "Vidyarthi Bhavan",
        cuisine: "South Indian • Breakfast",
        rating: "4.6",

        items: [

            {
                id: "vb1",
                name: "Masala Dosa",
                price: 90,
                category: "Main Course",
                type: "Veg",
                description: "Crispy dosa with traditional potato masala.",
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "vb2",
                name: "Idli Vada",
                price: 80,
                category: "Main Course",
                type: "Veg",
                description: "Soft idlis with crispy vada and chutney.",
                image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "vb3",
                name: "Kesari Bath",
                price: 70,
                category: "Desserts",
                type: "Veg",
                description: "Traditional Karnataka sweet.",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=90"
            }

        ]
    },


    "karavalli": {

        name: "Karavalli",
        cuisine: "South Indian • Coastal",
        rating: "4.8",

        items: [

            {
                id: "ka1",
                name: "Coastal Fish Curry",
                price: 390,
                category: "Main Course",
                type: "Non-Veg",
                description: "Traditional coastal fish curry.",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "ka2",
                name: "Neer Dosa",
                price: 120,
                category: "Main Course",
                type: "Veg",
                description: "Soft traditional coastal dosa.",
                image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "ka3",
                name: "Chicken Ghee Roast",
                price: 350,
                category: "Starters",
                type: "Non-Veg",
                description: "Mangalorean style spicy chicken.",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=90"
            }

        ]
    },


    "wok-express": {

        name: "Wok Express",
        cuisine: "Chinese • Asian • Noodles",
        rating: "4.4",

        items: [

            {
                id: "we1",
                name: "Hakka Noodles",
                price: 190,
                category: "Chinese",
                type: "Veg",
                description: "Wok tossed noodles with vegetables.",
                image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "we2",
                name: "Chicken Noodles",
                price: 230,
                category: "Chinese",
                type: "Non-Veg",
                description: "Spicy noodles with chicken.",
                image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "we3",
                name: "Veg Manchurian",
                price: 180,
                category: "Chinese",
                type: "Veg",
                description: "Crispy vegetable balls in Manchurian sauce.",
                image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=600&q=90"
            }

        ]
    },


    "hard-rock-cafe": {

        name: "Hard Rock Cafe",
        cuisine: "American • Burgers • Continental",
        rating: "4.7",

        items: [

            {
                id: "hr1",
                name: "Classic Burger",
                price: 399,
                category: "Burgers",
                type: "Non-Veg",
                description: "Classic American style burger.",
                image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "hr2",
                name: "Chicken Wings",
                price: 349,
                category: "Starters",
                type: "Non-Veg",
                description: "Crispy spicy chicken wings.",
                image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "hr3",
                name: "Loaded Fries",
                price: 299,
                category: "Starters",
                type: "Veg",
                description: "Crispy fries loaded with cheese.",
                image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=90"
            }

        ]
    },


    "nagarjuna": {

        name: "Nagarjuna",
        cuisine: "Andhra • Biryani • South Indian",
        rating: "4.5",

        items: [

            {
                id: "ng1",
                name: "Andhra Chicken Biryani",
                price: 280,
                category: "Biryani",
                type: "Non-Veg",
                description: "Spicy authentic Andhra biryani.",
                image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "ng2",
                name: "Andhra Meals",
                price: 220,
                category: "Main Course",
                type: "Veg",
                description: "Traditional Andhra style meal.",
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=90"
            }

        ]
    },


    "sweet-moments": {

        name: "Sweet Moments",
        cuisine: "Desserts • Cakes • Bakery",
        rating: "4.6",

        items: [

            {
                id: "sm1",
                name: "Chocolate Cake",
                price: 399,
                category: "Desserts",
                type: "Veg",
                description: "Rich chocolate celebration cake.",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "sm2",
                name: "Red Velvet Cake",
                price: 449,
                category: "Desserts",
                type: "Veg",
                description: "Soft red velvet with cream cheese frosting.",
                image: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "sm3",
                name: "Brownie",
                price: 149,
                category: "Desserts",
                type: "Veg",
                description: "Warm fudgy chocolate brownie.",
                image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=90"
            }

        ]
    },


    "trippy-goat": {

        name: "Trippy Goat Cafe",
        cuisine: "Cafe • Pizza • Desserts",
        rating: "4.5",

        items: [

            {
                id: "tg1",
                name: "Cafe Special Pizza",
                price: 399,
                category: "Pizza",
                type: "Veg",
                description: "Special cafe style cheesy pizza.",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "tg2",
                name: "Cold Coffee",
                price: 159,
                category: "Drinks",
                type: "Veg",
                description: "Creamy chilled cafe coffee.",
                image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=90"
            }

        ]
    },


    "spice-garden": {

        name: "Spice Garden",
        cuisine: "North Indian • Chinese",
        rating: "4.2",

        items: [

            {
                id: "sg1",
                name: "Butter Chicken",
                price: 290,
                category: "Main Course",
                type: "Non-Veg",
                description: "Creamy tomato based butter chicken.",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "sg2",
                name: "Paneer Butter Masala",
                price: 240,
                category: "Main Course",
                type: "Veg",
                description: "Soft paneer in creamy tomato gravy.",
                image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "sg3",
                name: "Veg Noodles",
                price: 180,
                category: "Chinese",
                type: "Veg",
                description: "Chinese style vegetable noodles.",
                image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=90"
            }

        ]
    },


    "biriyani-zone": {

        name: "Biriyani Zone",
        cuisine: "Hyderabadi • Biryani • Kebabs",
        rating: "4.5",

        items: [

            {
                id: "bz1",
                name: "Hyderabadi Chicken Biryani",
                price: 290,
                category: "Biryani",
                type: "Non-Veg",
                description: "Authentic dum cooked Hyderabadi biryani.",
                image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "bz2",
                name: "Mutton Biryani",
                price: 340,
                category: "Biryani",
                type: "Non-Veg",
                description: "Tender mutton with aromatic rice.",
                image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&w=600&q=90"
            },

            {
                id: "bz3",
                name: "Chicken Kebab",
                price: 230,
                category: "Starters",
                type: "Non-Veg",
                description: "Juicy spicy grilled chicken kebab.",
                image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=90"
            }

        ]
    }

};


/* =========================================================
   GET RESTAURANT ID FROM URL
========================================================= */

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const restaurantId =
    urlParams.get("restaurant");


const currentRestaurant =
    restaurantMenus[restaurantId];


/* =========================================================
   INVALID RESTAURANT
========================================================= */

if (!currentRestaurant) {

    document.body.innerHTML = `

        <div style="
            min-height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
            font-family:Poppins,sans-serif;
            background:#fffdf8;
            padding:30px;
        ">

            <div>

                <div style="
                    font-size:70px;
                ">
                    🍅
                </div>

                <h1 style="
                    color:#e52b2b;
                    margin-bottom:10px;
                ">
                    Restaurant not found
                </h1>

                <p style="
                    color:#777;
                    margin-bottom:20px;
                ">
                    Please select a restaurant
                    from the TOMATO home page.
                </p>

                <button
                    onclick="goHome()"
                    style="
                        border:none;
                        background:#e52b2b;
                        color:white;
                        padding:13px 25px;
                        border-radius:25px;
                        font-family:Poppins,sans-serif;
                        font-weight:700;
                        cursor:pointer;
                    "
                >
                    ← Go to Home
                </button>

            </div>

        </div>
    `;

}
else {

    initializeMenu();

}


/* =========================================================
   INITIALIZE
========================================================= */

function initializeMenu() {

    const restaurantName =
        document.getElementById(
            "restaurantName"
        );

    const restaurantCuisine =
        document.getElementById(
            "restaurantCuisine"
        );

    const restaurantRating =
        document.getElementById(
            "restaurantRating"
        );


    restaurantName.textContent =
        currentRestaurant.name;


    restaurantCuisine.textContent =
        currentRestaurant.cuisine;


    restaurantRating.textContent =
        `★ ${currentRestaurant.rating}`;


    displayMenu(
        currentRestaurant.items
    );


    updateCartCount();

}


/* =========================================================
   CART
========================================================= */

let cart = loadCart();


function loadCart() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    "tomatoCart"
                )
            );

        return Array.isArray(saved)
            ? saved
            : [];

    }
    catch (error) {

        return [];

    }

}


/* =========================================================
   SAVE CART
========================================================= */

function saveCart() {

    localStorage.setItem(
        "tomatoCart",
        JSON.stringify(cart)
    );

    updateCartCount();

    displayMenu(
        getFilteredItems()
    );

}


/* =========================================================
   DISPLAY MENU
========================================================= */

function displayMenu(items) {

    const menuContainer =
        document.getElementById(
            "menuContainer"
        );

    const menuEmpty =
        document.getElementById(
            "menuEmpty"
        );


    menuContainer.innerHTML = "";


    if (items.length === 0) {

        menuContainer.style.display =
            "none";

        menuEmpty.style.display =
            "block";

        return;

    }


    menuContainer.style.display =
        "grid";

    menuEmpty.style.display =
        "none";


    items.forEach(
        function (item) {

            const cartItem =
                cart.find(
                    function (cartItem) {

                        return (
                            cartItem.id === item.id &&
                            cartItem.restaurantId === restaurantId
                        );

                    }
                );


            const quantity =
                cartItem
                    ? cartItem.quantity
                    : 0;


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "menu-card";


            card.innerHTML = `

                <div class="food-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        loading="lazy"
                        onerror="
                            this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=90';
                        "
                    >

                </div>


                <div class="food-info">

                    <span class="food-type">
                        ${item.type}
                    </span>


                    <h3>
                        ${item.name}
                    </h3>


                    <p class="food-description">
                        ${item.description}
                    </p>


                    <div class="food-bottom">

                        <span class="food-price">
                            ₹${item.price}
                        </span>


                        ${
                            quantity > 0

                            ?

                            `
                            <div class="quantity-control">

                                <button
                                    onclick="
                                        changeQuantity(
                                            '${item.id}',
                                            -1
                                        )
                                    "
                                >
                                    −
                                </button>

                                <strong>
                                    ${quantity}
                                </strong>

                                <button
                                    onclick="
                                        changeQuantity(
                                            '${item.id}',
                                            1
                                        )
                                    "
                                >
                                    +
                                </button>

                            </div>
                            `

                            :

                            `
                            <button
                                class="add-button"
                                onclick="
                                    addToCart(
                                        '${item.id}'
                                    )
                                "
                            >
                                ADD
                            </button>
                            `
                        }

                    </div>

                </div>

            `;


            menuContainer.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(itemId) {

    const item =
        currentRestaurant.items.find(
            function (food) {

                return food.id === itemId;

            }
        );


    if (!item) {
        return;
    }


    /*
       If another restaurant is already
       in cart, ask before replacing it.
    */

    if (
        cart.length > 0 &&
        cart[0].restaurantId !== restaurantId
    ) {

        const oldRestaurant =
            cart[0].restaurantName;


        const shouldReplace =
            window.confirm(
                `Your cart contains items from ${oldRestaurant}. Do you want to clear the cart and add items from ${currentRestaurant.name}?`
            );


        if (!shouldReplace) {
            return;
        }


        cart = [];

    }


    const existing =
        cart.find(
            function (cartItem) {

                return (
                    cartItem.id === itemId &&
                    cartItem.restaurantId === restaurantId
                );

            }
        );


    if (existing) {

        existing.quantity += 1;

    }
    else {

        cart.push({

            id: item.id,

            name: item.name,

            price: item.price,

            image: item.image,

            quantity: 1,

            restaurantId:
                restaurantId,

            restaurantName:
                currentRestaurant.name

        });

    }


    saveCart();

}


/* =========================================================
   CHANGE QUANTITY
========================================================= */

function changeQuantity(
    itemId,
    amount
) {

    const item =
        cart.find(
            function (cartItem) {

                return (
                    cartItem.id === itemId &&
                    cartItem.restaurantId === restaurantId
                );

            }
        );


    if (!item) {
        return;
    }


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                function (cartItem) {

                    return !(
                        cartItem.id === itemId &&
                        cartItem.restaurantId === restaurantId
                    );

                }
            );

    }


    saveCart();

}


/* =========================================================
   FILTERED ITEMS
========================================================= */

function getFilteredItems() {

    const searchInput =
        document.getElementById(
            "foodSearch"
        );


    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const activeButton =
        document.querySelector(
            ".category-button.active"
        );


    const category =
        activeButton
            ? activeButton.dataset.category
            : "all";


    return currentRestaurant.items.filter(
        function (item) {

            const matchesSearch =

                item.name
                    .toLowerCase()
                    .includes(search)

                ||

                item.description
                    .toLowerCase()
                    .includes(search);


            const matchesCategory =

                category === "all"

                ||

                item.category === category;


            return (
                matchesSearch &&
                matchesCategory
            );

        }
    );

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

document
    .querySelectorAll(".category-button")
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            ".category-button"
                        )
                        .forEach(
                            function (btn) {

                                btn.classList.remove(
                                    "active"
                                );

                            }
                        );


                    button.classList.add(
                        "active"
                    );


                    displayMenu(
                        getFilteredItems()
                    );

                }
            );

        }
    );


/* =========================================================
   SEARCH FOOD
========================================================= */

const foodSearch =
    document.getElementById(
        "foodSearch"
    );


foodSearch.addEventListener(
    "input",
    function () {

        displayMenu(
            getFilteredItems()
        );

    }
);


/* =========================================================
   UPDATE CART COUNT
========================================================= */

function updateCartCount() {

    let count = 0;


    cart.forEach(
        function (item) {

            count +=
                Number(item.quantity) || 0;

        }
    );


    const menuCartCount =
        document.getElementById(
            "menuCartCount"
        );


    if (menuCartCount) {

        menuCartCount.textContent =
            count;

    }


    const bottomCart =
        document.getElementById(
            "bottomCart"
        );


    const bottomCartItems =
        document.getElementById(
            "bottomCartItems"
        );


    if (bottomCartItems) {

        bottomCartItems.textContent =
            `${count} item${count === 1 ? "" : "s"}`;

    }


    if (bottomCart) {

        if (count > 0) {

            bottomCart.classList.add(
                "show"
            );

        }
        else {

            bottomCart.classList.remove(
                "show"
            );

        }

    }

}


/* =========================================================
   OPEN CART
========================================================= */

function openCart() {

    displayCart();


    const overlay =
        document.getElementById(
            "cartOverlay"
        );


    overlay.classList.add(
        "show"
    );

}


/* =========================================================
   CLOSE CART
========================================================= */

function closeCart() {

    const overlay =
        document.getElementById(
            "cartOverlay"
        );


    overlay.classList.remove(
        "show"
    );

}


/* =========================================================
   DISPLAY CART
========================================================= */

function displayCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );


    const cartRestaurantName =
        document.getElementById(
            "cartRestaurantName"
        );


    const itemTotal =
        document.getElementById(
            "itemTotal"
        );


    const cartTotal =
        document.getElementById(
            "cartTotal"
        );


    const restaurantCart =
        cart.filter(
            function (item) {

                return (
                    item.restaurantId ===
                    restaurantId
                );

            }
        );


    cartRestaurantName.textContent =
        currentRestaurant.name;


    cartItems.innerHTML = "";


    if (restaurantCart.length === 0) {

        cartItems.innerHTML = `

            <div style="
                padding:35px 10px;
                text-align:center;
                color:#777;
            ">

                <div style="
                    font-size:50px;
                ">
                    🍅
                </div>

                <p>
                    Your cart is empty.
                </p>

            </div>

        `;


        itemTotal.textContent =
            "₹0";


        cartTotal.textContent =
            "₹40";


        return;
    }


    let total = 0;


    restaurantCart.forEach(
        function (item) {

            total +=
                item.price *
                item.quantity;


            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "cart-item";


            row.innerHTML = `

                <div>

                    <div class="cart-item-name">
                        ${item.name}
                    </div>

                    <div class="cart-item-price">
                        ₹${item.price}
                        ×
                        ${item.quantity}
                    </div>

                </div>


                <div class="cart-controls">

                    <button
                        onclick="
                            cartChange(
                                '${item.id}',
                                -1
                            )
                        "
                    >
                        −
                    </button>


                    <strong>
                        ${item.quantity}
                    </strong>


                    <button
                        onclick="
                            cartChange(
                                '${item.id}',
                                1
                            )
                        "
                    >
                        +
                    </button>

                </div>

            `;


            cartItems.appendChild(
                row
            );

        }
    );


    itemTotal.textContent =
        `₹${total}`;


    cartTotal.textContent =
        `₹${total + 40}`;

}


/* =========================================================
   CART MODAL QUANTITY
========================================================= */

function cartChange(
    itemId,
    amount
) {

    changeQuantity(
        itemId,
        amount
    );


    displayCart();

}


/* =========================================================
   CHECKOUT
========================================================= */

function checkout() {

    const restaurantCart =
        cart.filter(
            function (item) {

                return (
                    item.restaurantId ===
                    restaurantId
                );

            }
        );


    if (restaurantCart.length === 0) {

        alert(
            "Please add an item to your cart first. 🍅"
        );

        return;
    }


    localStorage.setItem(
        "tomatoCheckout",
        JSON.stringify(
            restaurantCart
        )
    );


    /*
       For now this connects to your
       future checkout page.

       If checkout.html already exists,
       uncomment the next line.
    */

    // window.location.href = "checkout.html";


    alert(
        "Your order is ready for checkout! 🍅❤️"
    );

}


/* =========================================================
   GO HOME
========================================================= */

function goHome() {

    window.location.href =
        "home.html";

}


/* =========================================================
   CLOSE CART WHEN CLICKING OUTSIDE
========================================================= */

const cartOverlay =
    document.getElementById(
        "cartOverlay"
    );


if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                cartOverlay
            ) {

                closeCart();

            }

        }
    );

}