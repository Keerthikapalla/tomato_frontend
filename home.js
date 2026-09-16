/* =========================================================
   TOMATO HOME JAVASCRIPT
========================================================= */


/* =========================================================
   RESTAURANTS
========================================================= */

const restaurants = [

    {
        id: "meghana-foods",
        name: "Meghana Foods",
        cuisine: "Andhra • Biryani • South Indian",
        category: "South Indian",
        area: "Koramangala",
        rating: "4.6",
        time: "30–35 min",
        price: "₹500 for two",
        offer: "20% OFF",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: "pizza-express",
        name: "PizzaExpress",
        cuisine: "Pizza • Italian • Pasta",
        category: "Pizza",
        area: "Malleshwaram",
        rating: "4.5",
        time: "25–30 min",
        price: "₹700 for two",
        offer: "15% OFF",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: "dash-and-coop",
        name: "Dash & Coop",
        cuisine: "Burgers • American • Fast Food",
        category: "Burgers",
        area: "Residency Road",
        rating: "4.7",
        time: "25–30 min",
        price: "₹700 for two",
        offer: "FREE DELIVERY",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: "vidyarthi-bhavan",
        name: "Vidyarthi Bhavan",
        cuisine: "South Indian • Breakfast",
        category: "South Indian",
        area: "Basavanagudi",
        rating: "4.6",
        time: "25–30 min",
        price: "₹250 for two",
        offer: "POPULAR",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: "karavalli",
        name: "Karavalli",
        cuisine: "South Indian • Coastal",
        category: "South Indian",
        area: "Residency Road",
        rating: "4.8",
        time: "35–40 min",
        price: "₹1800 for two",
        offer: "TOP RATED",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: "wok-express",
        name: "Wok Express",
        cuisine: "Chinese • Asian • Noodles",
        category: "Chinese",
        area: "Marathahalli",
        rating: "4.4",
        time: "25–30 min",
        price: "₹450 for two",
        offer: "10% OFF",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: "hard-rock-cafe",
        name: "Hard Rock Cafe",
        cuisine: "American • Burgers • Continental",
        category: "Burgers",
        area: "St. Marks Road",
        rating: "4.7",
        time: "30–35 min",
        price: "₹3500 for two",
        offer: "POPULAR",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: "nagarjuna",
        name: "Nagarjuna",
        cuisine: "Andhra • Biryani • South Indian",
        category: "South Indian",
        area: "Indiranagar",
        rating: "4.5",
        time: "30–35 min",
        price: "₹600 for two",
        offer: "15% OFF",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: "sweet-moments",
        name: "Sweet Moments",
        cuisine: "Desserts • Cakes • Bakery",
        category: "Desserts",
        area: "Whitefield",
        rating: "4.6",
        time: "25–30 min",
        price: "₹450 for two",
        offer: "10% OFF",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: "trippy-goat",
        name: "Trippy Goat Cafe",
        cuisine: "Cafe • Pizza • Desserts",
        category: "Pizza",
        area: "Ashok Nagar",
        rating: "4.5",
        time: "25–30 min",
        price: "₹1500 for two",
        offer: "NEW",
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: "spice-garden",
        name: "Spice Garden",
        cuisine: "North Indian • Chinese",
        category: "North Indian",
        area: "BTM Layout",
        rating: "4.2",
        time: "30–40 min",
        price: "₹400 for two",
        offer: "20% OFF",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: "biriyani-zone",
        name: "Biriyani Zone",
        cuisine: "Hyderabadi • Biryani • Kebabs",
        category: "North Indian",
        area: "HSR Layout",
        rating: "4.5",
        time: "30–35 min",
        price: "₹600 for two",
        offer: "BESTSELLER",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=90"
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const restaurantGrid =
    document.getElementById("restaurantGrid");

const restaurantCount =
    document.getElementById("restaurantCount");

const restaurantSubtitle =
    document.getElementById("restaurantSubtitle");

const noResults =
    document.getElementById("noResults");

const searchInput =
    document.getElementById("searchInput");

const heroSearch =
    document.getElementById("heroSearch");

const locationSelect =
    document.getElementById("locationSelect");

const ropeTomato =
    document.getElementById("ropeTomato");

const tomatoMessage =
    document.getElementById("tomatoMessage");

const ropeTrack =
    document.getElementById("tomatoRopeTrack");

const heroTomato =
    document.getElementById("heroTomato");

const cartCount =
    document.getElementById("cartCount");


/* =========================================================
   DISPLAY RESTAURANTS
========================================================= */

function displayRestaurants(list) {

    restaurantGrid.innerHTML = "";

    restaurantCount.textContent = list.length;


    if (list.length === 0) {

        restaurantGrid.style.display = "none";

        noResults.style.display = "block";

        return;
    }


    restaurantGrid.style.display = "grid";

    noResults.style.display = "none";


    list.forEach((restaurant, index) => {

        const card =
            document.createElement("article");


        card.className =
            "restaurant-card";


        card.style.animationDelay =
            `${index * 0.05}s`;


        card.innerHTML = `

            <div class="restaurant-image">

                <img
                    src="${restaurant.image}"
                    alt="${restaurant.name}"
                    loading="lazy"
                    onerror="
                        this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=90';
                    "
                >

                <div class="offer">
                    ${restaurant.offer}
                </div>

                <div class="rating">
                    ★ ${restaurant.rating}
                </div>

            </div>


            <div class="restaurant-info">

                <h3>
                    ${restaurant.name}
                </h3>

                <div class="cuisine">
                    ${restaurant.cuisine}
                </div>

                <div class="restaurant-details">

                    <span>
                        📍 ${restaurant.area}
                    </span>

                    <span>
                        🕒 ${restaurant.time}
                    </span>

                </div>

            </div>
        `;


        card.addEventListener(
            "click",
            function () {
                openRestaurant(restaurant.id);
            }
        );


        restaurantGrid.appendChild(card);

    });

}


/* =========================================================
   OPEN RESTAURANT
========================================================= */

function openRestaurant(restaurantId) {

    const restaurant =
        restaurants.find(
            item => item.id === restaurantId
        );


    if (!restaurant) {

        console.error(
            "Restaurant ID not found:",
            restaurantId
        );

        return;
    }


    /* Save selected restaurant */

    localStorage.setItem(
        "selectedRestaurant",
        JSON.stringify(restaurant)
    );


    /* Happy tomato */

    if (ropeTomato) {

        ropeTomato.classList.remove("climbing");

        ropeTomato.classList.add("happy");

        tomatoMessage.textContent =
            `YAY! ${restaurant.name} ❤️`;

    }


    if (heroTomato) {

        heroTomato.classList.add(
            "hero-happy"
        );

    }


    /* Open correct menu */

    setTimeout(
        function () {

            window.location.href =
                "menu.html?restaurant=" +
                encodeURIComponent(
                    restaurant.id
                );

        },
        650
    );

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter");


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(
                    function (btn) {
                        btn.classList.remove(
                            "active"
                        );
                    }
                );


                button.classList.add(
                    "active"
                );


                const category =
                    button.dataset.filter;


                if (category === "all") {

                    displayRestaurants(
                        restaurants
                    );

                    return;
                }


                const filtered =
                    restaurants.filter(
                        function (restaurant) {

                            return (
                                restaurant.category ===
                                category
                            );

                        }
                    );


                displayRestaurants(
                    filtered
                );

            }
        );

    }
);


/* =========================================================
   SEARCH
========================================================= */

function searchRestaurants(value) {

    const search =
        String(value || "")
            .toLowerCase()
            .trim();


    if (search === "") {

        displayRestaurants(
            restaurants
        );

        return;
    }


    const filtered =
        restaurants.filter(
            function (restaurant) {

                return (

                    restaurant.name
                        .toLowerCase()
                        .includes(search)

                    ||

                    restaurant.cuisine
                        .toLowerCase()
                        .includes(search)

                    ||

                    restaurant.area
                        .toLowerCase()
                        .includes(search)

                );

            }
        );


    displayRestaurants(
        filtered
    );


    const section =
        document.getElementById(
            "restaurantsSection"
        );


    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function (event) {

            searchRestaurants(
                event.target.value
            );

        }
    );

}


if (heroSearch) {

    heroSearch.addEventListener(
        "input",
        function (event) {

            searchRestaurants(
                event.target.value
            );

        }
    );

}


/* =========================================================
   LOCATION
========================================================= */

if (locationSelect) {

    locationSelect.addEventListener(
        "change",
        function () {

            const location =
                locationSelect.value;


            if (location === "Bengaluru") {

                restaurantSubtitle.textContent =
                    "Discover the best restaurants in Bengaluru";

                displayRestaurants(
                    restaurants
                );

                return;
            }


            const filtered =
                restaurants.filter(
                    function (restaurant) {

                        return (
                            restaurant.area
                                .toLowerCase()
                                .includes(
                                    location.toLowerCase()
                                )
                        );

                    }
                );


            restaurantSubtitle.textContent =
                `Restaurants available in ${location}`;


            displayRestaurants(
                filtered
            );

        }
    );

}


/* =========================================================
   ROPE TOMATO SCROLL
========================================================= */

let scrollTimer = null;


function updateRopeTomato() {

    if (!ropeTomato || !ropeTrack) {
        return;
    }


    const scrollTop =
        window.scrollY;


    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


    if (pageHeight <= 0) {
        return;
    }


    const progress =
        Math.min(
            Math.max(
                scrollTop / pageHeight,
                0
            ),
            1
        );


    /*
        Keep tomato completely inside
        the rope track.
    */

    const maxTop =
        Math.max(
            ropeTrack.clientHeight -
            ropeTomato.offsetHeight -
            5,
            0
        );


    const topPosition =
        progress * maxTop;


    ropeTomato.style.top =
        `${topPosition}px`;


    /* Climbing animation */

    ropeTomato.classList.add(
        "climbing"
    );


    clearTimeout(
        scrollTimer
    );


    scrollTimer =
        setTimeout(
            function () {

                ropeTomato.classList.remove(
                    "climbing"
                );

            },
            180
        );


    /* Message */

    if (progress < 0.15) {

        tomatoMessage.textContent =
            "Hmm... what should we eat? 🤔";

    }
    else if (progress < 0.35) {

        tomatoMessage.textContent =
            "Let's explore! 🍅";

    }
    else if (progress < 0.60) {

        tomatoMessage.textContent =
            "So many restaurants! 😍";

    }
    else if (progress < 0.82) {

        tomatoMessage.textContent =
            "Keep scrolling! 🍅";

    }
    else {

        tomatoMessage.textContent =
            "I think I found something! ❤️";

    }

}


/* Scroll DOWN = tomato goes down */
/* Scroll UP   = tomato goes up */

window.addEventListener(
    "scroll",
    updateRopeTomato,
    {
        passive: true
    }
);


window.addEventListener(
    "resize",
    updateRopeTomato
);


/* =========================================================
   CART COUNT
========================================================= */

function updateCartCount() {

    if (!cartCount) {
        return;
    }


    let cart = [];


    try {

        cart =
            JSON.parse(
                localStorage.getItem(
                    "tomatoCart"
                )
            ) || [];

    }
    catch (error) {

        cart = [];

    }


    let count = 0;


    cart.forEach(
        function (item) {

            count +=
                Number(item.quantity) || 0;

        }
    );


    cartCount.textContent =
        count;

}


/* =========================================================
   GO HOME
========================================================= */

function goHome() {

    window.location.href =
        "home.html";

}


/* =========================================================
   INITIAL LOAD
========================================================= */

displayRestaurants(
    restaurants
);

updateCartCount();

updateRopeTomato();