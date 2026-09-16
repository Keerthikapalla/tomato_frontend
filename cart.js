
/* =====================================================
   TOMATO CART PAGE JAVASCRIPT
===================================================== */


/* =====================================================
   DEFAULT PROFILE
===================================================== */

function createDefaultProfileImage() {

    return "data:image/svg+xml," + encodeURIComponent(`
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

            <text
                x="50"
                y="63"
                text-anchor="middle"
                font-size="48">
                👤
            </text>

        </svg>
    `);
}


/* =====================================================
   PROFILE
===================================================== */

const profileName =
    document.getElementById("profileName");

const profileImage =
    document.getElementById("profileImage");


function loadProfile() {

    const name =
        localStorage.getItem("userName");

    const picture =
        localStorage.getItem("userPicture");


    profileName.textContent =
        name || "Guest";


    if (picture) {

        profileImage.src =
            picture;

    } else {

        profileImage.src =
            createDefaultProfileImage();

    }

}


loadProfile();


/* =====================================================
   LOCATION
===================================================== */

const deliveryLocation =
    document.getElementById(
        "deliveryLocation"
    );


const savedLocation =
    localStorage.getItem(
        "selectedLocation"
    );


if (savedLocation) {

    deliveryLocation.textContent =
        savedLocation;

}


/* =====================================================
   CART DATA
===================================================== */

function getCart() {

    const savedCart =
        localStorage.getItem("tomatoCart");


    if (!savedCart) {

        return [];

    }


    try {

        const cart =
            JSON.parse(savedCart);

        return Array.isArray(cart)
            ? cart
            : [];

    } catch {

        return [];

    }

}


let cart =
    getCart();


/* =====================================================
   SAVE CART
===================================================== */

function saveCart() {

    localStorage.setItem(
        "tomatoCart",
        JSON.stringify(cart)
    );

}


/* =====================================================
   CART ELEMENTS
===================================================== */

const cartItems =
    document.getElementById(
        "cartItems"
    );

const emptyCart =
    document.getElementById(
        "emptyCart"
    );

const itemCount =
    document.getElementById(
        "itemCount"
    );

const itemTotal =
    document.getElementById(
        "itemTotal"
    );

const deliveryFee =
    document.getElementById(
        "deliveryFee"
    );

const platformFee =
    document.getElementById(
        "platformFee"
    );

const taxAmount =
    document.getElementById(
        "taxAmount"
    );

const grandTotal =
    document.getElementById(
        "grandTotal"
    );


/* =====================================================
   DISPLAY CART
===================================================== */

function displayCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.style.display =
            "none";

        emptyCart.style.display =
            "block";

        itemCount.textContent =
            "0 items";

        updateBill();

        return;

    }


    cartItems.style.display =
        "block";

    emptyCart.style.display =
        "none";


    let totalQuantity = 0;


    cart.forEach(
        (item, index) => {

            totalQuantity +=
                Number(item.quantity);


            const cartItem =
                document.createElement(
                    "div"
                );

            cartItem.className =
                "cart-item";


            const totalPrice =
                Number(item.price) *
                Number(item.quantity);


            cartItem.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        onerror="this.src='${createDefaultFoodImage()}'"
                    >

                </div>


                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ${item.category || "Delicious food"}
                    </p>

                    <span class="cart-item-price">
                        ₹${item.price}
                    </span>

                </div>


                <div class="quantity-box">

                    <button
                        onclick="decreaseQuantity(${index})">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>


                <div class="item-total">
                    ₹${totalPrice}
                </div>

            `;


            cartItems.appendChild(
                cartItem
            );

        }
    );


    itemCount.textContent =
        totalQuantity +
        (totalQuantity === 1
            ? " item"
            : " items");


    updateBill();

}


/* =====================================================
   DEFAULT FOOD IMAGE
===================================================== */

function createDefaultFoodImage() {

    return "data:image/svg+xml," +
        encodeURIComponent(`

        <svg xmlns="http://www.w3.org/2000/svg"
             width="500"
             height="350">

            <rect
                width="100%"
                height="100%"
                fill="#fff1ed"
            />

            <text
                x="50%"
                y="50%"
                text-anchor="middle"
                dominant-baseline="middle"
                font-size="70">

                🍽️

            </text>

        </svg>

    `);

}


/* =====================================================
   INCREASE QUANTITY
===================================================== */

function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();

    displayCart();

}


/* =====================================================
   DECREASE QUANTITY
===================================================== */

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }


    saveCart();

    displayCart();

}


/* =====================================================
   BILL CALCULATION
===================================================== */

function updateBill() {

    let total = 0;


    cart.forEach(
        item => {

            total +=
                Number(item.price) *
                Number(item.quantity);

        }
    );


    let delivery = 40;

    let platform = 5;

    let tax =
        Math.round(total * 0.05);


    /*
       FREE DELIVERY
       FOR ORDERS ABOVE ₹499
    */

    if (total >= 499) {

        delivery = 0;

    }


    if (total === 0) {

        delivery = 0;
        platform = 0;
        tax = 0;

    }


    const finalAmount =
        total +
        delivery +
        platform +
        tax;


    itemTotal.textContent =
        "₹" + total;


    deliveryFee.textContent =
        delivery === 0
            ? "FREE"
            : "₹" + delivery;


    platformFee.textContent =
        "₹" + platform;


    taxAmount.textContent =
        "₹" + tax;


    grandTotal.textContent =
        "₹" + finalAmount;

}


/* =====================================================
   RECOMMENDATION DATA
===================================================== */

const recommendations = [

    {
        name: "Chicken Biryani",
        category: "Biryani",
        price: 220,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=700&q=90"
    },

    {
        name: "Margherita Pizza",
        category: "Pizza",
        price: 299,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=90"
    },

    {
        name: "Classic Burger",
        category: "Burger",
        price: 180,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=90"
    },

    {
        name: "Masala Dosa",
        category: "South Indian",
        price: 120,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=90"
    },

    {
        name: "Chocolate Cake",
        category: "Dessert",
        price: 180,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=90"
    },

    {
        name: "Hakka Noodles",
        category: "Chinese",
        price: 190,
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=90"
    }

];


/* =====================================================
   RECOMMENDATIONS
===================================================== */

const recommendationGrid =
    document.getElementById(
        "recommendationGrid"
    );


function displayRecommendations() {

    recommendationGrid.innerHTML =
        "";


    /*
       Find categories already
       present in cart.
    */

    const cartCategories =
        cart.map(
            item =>
                item.category
                    ?.toLowerCase()
        );


    let sortedRecommendations =
        [...recommendations];


    /*
       Show similar categories first.
    */

    sortedRecommendations.sort(
        (a, b) => {

            const aMatch =
                cartCategories.includes(
                    a.category.toLowerCase()
                );

            const bMatch =
                cartCategories.includes(
                    b.category.toLowerCase()
                );


            return bMatch - aMatch;

        }
    );


    sortedRecommendations
        .slice(0, 4)
        .forEach(
            item => {

                const card =
                    document.createElement(
                        "div"
                    );

                card.className =
                    "recommendation-card";


                card.innerHTML = `

                    <div class="recommendation-image">

                        <img
                            src="${item.image}"
                            alt="${item.name}"
                            onerror="this.src='${createDefaultFoodImage()}'"
                        >

                    </div>


                    <div class="recommendation-info">

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ${item.category}
                        </p>


                        <div class="recommendation-bottom">

                            <span class="recommendation-price">
                                ₹${item.price}
                            </span>

                            <button
                                class="add-recommendation">

                                + ADD

                            </button>

                        </div>

                    </div>

                `;


                const addButton =
                    card.querySelector(
                        ".add-recommendation"
                    );


                addButton.addEventListener(
                    "click",
                    function () {

                        addRecommendationToCart(
                            item
                        );

                    }
                );


                recommendationGrid.appendChild(
                    card
                );

            }
        );

}


/* =====================================================
   ADD RECOMMENDATION TO CART
===================================================== */

function addRecommendationToCart(
    product
) {

    const existingItem =
        cart.find(
            item =>
                item.name ===
                product.name
        );


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            name: product.name,

            category:
                product.category,

            price:
                product.price,

            image:
                product.image,

            quantity: 1

        });

    }


    saveCart();

    displayCart();

    displayRecommendations();


    /*
       Small confirmation
    */

    alert(
        product.name +
        " added to your cart!"
    );

}


/* =====================================================
   COUPON
===================================================== */

const couponButton =
    document.getElementById(
        "couponButton"
    );


couponButton.addEventListener(
    "click",
    function () {

        const total =
            cart.reduce(
                (sum, item) =>
                    sum +
                    Number(item.price) *
                    Number(item.quantity),
                0
            );


        if (total === 0) {

            alert(
                "Add items to your cart first."
            );

            return;

        }


        if (total >= 499) {

            alert(
                "🎉 You already get FREE delivery on this order!"
            );

        } else {

            alert(
                "🎁 Coupon feature can be connected to your backend later."
            );

        }

    }
);


/* =====================================================
   PAYMENT
===================================================== */

const paymentButton =
    document.getElementById(
        "paymentButton"
    );


paymentButton.addEventListener(
    "click",
    function () {

        if (cart.length === 0) {

            alert(
                "Your cart is empty. Please add some delicious food first!"
            );

            return;

        }


        /*
           Later you can replace this
           with your real payment page.
        */

        window.location.href =
            "payment.html";

    }
);


/* =====================================================
   INITIAL LOAD
===================================================== */

displayCart();

displayRecommendations();
