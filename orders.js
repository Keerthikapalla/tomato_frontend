/* =====================================================
   TOMATO ORDER HISTORY JAVASCRIPT
===================================================== */


/* =====================================================
   PROFILE
===================================================== */

function loadProfile() {

    const userName =
        localStorage.getItem("userName");

    const profileName =
        document.getElementById("profileName");

    if (userName) {

        profileName.textContent =
            userName;

    } else {

        profileName.textContent =
            "Guest";

    }

}


loadProfile();


/* =====================================================
   GET ORDERS
===================================================== */

function getOrders() {

    const savedOrders =
        localStorage.getItem("tomatoOrders");

    if (!savedOrders) {

        return [];

    }

    try {

        return JSON.parse(savedOrders);

    } catch (error) {

        console.error(
            "Unable to read orders",
            error
        );

        return [];

    }

}


/* =====================================================
   DISPLAY ORDERS
===================================================== */

function displayOrders() {

    const orders =
        getOrders();

    const ordersList =
        document.getElementById("ordersList");

    const emptyOrders =
        document.getElementById("emptyOrders");


    ordersList.innerHTML = "";


    /* NO ORDERS */

    if (orders.length === 0) {

        emptyOrders.style.display =
            "block";

        return;

    }


    emptyOrders.style.display =
        "none";


    /* DISPLAY EACH ORDER */

    orders.forEach(
        (order, index) => {

            const card =
                createOrderCard(
                    order,
                    index
                );

            ordersList.appendChild(
                card
            );

        }
    );

}


/* =====================================================
   CREATE ORDER CARD
===================================================== */

function createOrderCard(
    order,
    index
) {

    const card =
        document.createElement(
            "article"
        );

    card.className =
        "order-card";


    /* ORDER ITEMS */

    let itemsHTML = "";


    if (
        order.items &&
        order.items.length > 0
    ) {

        order.items.forEach(
            item => {

                itemsHTML += `

                    <div class="order-item">

                        <div class="item-left">

                            <div class="item-icon">
                                ${item.emoji || "🍴"}
                            </div>

                            <div>

                                <div class="item-name">
                                    ${item.name}
                                </div>

                                <div class="item-quantity">
                                    Qty: ${item.quantity}
                                </div>

                            </div>

                        </div>

                        <div class="item-price">
                            ₹${item.price * item.quantity}
                        </div>

                    </div>

                `;

            }
        );

    }


    /* ORDER DATE */

    let orderDate =
        order.date ||
        "Recently";


    /* ORDER STATUS */

    const status =
        order.status ||
        "Order Delivered";


    /* RESTAURANT */

    const restaurant =
        order.restaurant ||
        "TOMATO Restaurant";


    /* TOTAL */

    const total =
        order.total ||
        0;


    /* ADDRESS */

    const address =
        order.address ||
        "Delivery address";


    /* ORDER ID */

    const orderId =
        order.orderId ||
        "TMT" +
        Date.now();


    card.innerHTML = `

        <div class="order-header">

            <div>

                <div class="restaurant-name">
                    ${restaurant}
                </div>

                <div class="order-id">
                    Order ID: ${orderId}
                </div>

            </div>

            <span class="order-status">
                ${status}
            </span>

        </div>


        <div class="order-info">

            <span>
                📅 ${orderDate}
            </span>

            <span>
                💳 ${order.paymentMethod || "Online Payment"}
            </span>

        </div>


        <div class="order-items">

            ${itemsHTML}

        </div>


        <div class="order-bottom">

            <div class="delivery-address">

                📍

                <strong>
                    Delivered to:
                </strong>

                ${address}

            </div>


            <div class="total-section">

                <div class="total-label">
                    Total Amount
                </div>

                <div class="total-amount">
                    ₹${total}
                </div>

            </div>

        </div>


        <div class="order-actions">

            <button
                class="reorder-button"
                onclick="reorder(${index})"
            >
                🔄 Reorder
            </button>


            <button
                class="details-button"
                onclick="showOrderDetails(${index})"
            >
                View Details
            </button>

        </div>

    `;


    return card;

}


/* =====================================================
   REORDER
===================================================== */

function reorder(index) {

    const orders =
        getOrders();

    const selectedOrder =
        orders[index];


    if (
        !selectedOrder ||
        !selectedOrder.items
    ) {

        alert(
            "Unable to reorder this item."
        );

        return;

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(
            selectedOrder.items
        )
    );


    window.location.href =
        "cart.html";

}


/* =====================================================
   ORDER DETAILS
===================================================== */

function showOrderDetails(index) {

    const orders =
        getOrders();

    const order =
        orders[index];


    if (!order) {

        return;

    }


    alert(

        "ORDER DETAILS\n\n" +

        "Restaurant: " +
        (order.restaurant || "TOMATO") +

        "\n\nOrder ID: " +
        (order.orderId || "N/A") +

        "\n\nDate: " +
        (order.date || "N/A") +

        "\n\nAddress: " +
        (order.address || "N/A") +

        "\n\nPayment: " +
        (order.paymentMethod || "Online") +

        "\n\nTotal: ₹" +
        (order.total || 0)

    );

}


/* =====================================================
   LOAD
===================================================== */

displayOrders();