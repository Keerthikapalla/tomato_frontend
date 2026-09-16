
/* =====================================================
   TOMATO PAYMENT PAGE
===================================================== */


/* =========================
   GET ELEMENTS
========================= */

const paymentOptions =
    document.querySelectorAll(".payment-option");

const paymentPanels =
    document.querySelectorAll(".payment-panel");

const placeOrderButton =
    document.getElementById("placeOrderButton");

const successOverlay =
    document.getElementById("successOverlay");

const continueHome =
    document.getElementById("continueHome");


/* =========================
   PAYMENT METHOD SWITCHING
========================= */

paymentOptions.forEach(option => {

    option.addEventListener("click", function () {

        const method =
            this.dataset.method;


        /* Remove active */

        paymentOptions.forEach(item => {

            item.classList.remove("active");

        });


        paymentPanels.forEach(panel => {

            panel.classList.remove("active");

        });


        /* Add active */

        this.classList.add("active");


        const selectedPanel =
            document.getElementById(method);


        if (selectedPanel) {

            selectedPanel.classList.add("active");

        }

    });

});



/* =========================
   ADDRESS
========================= */

const changeAddressButton =
    document.getElementById(
        "changeAddressButton"
    );

const addressForm =
    document.getElementById(
        "addressForm"
    );

const saveAddress =
    document.getElementById(
        "saveAddress"
    );

const cancelAddress =
    document.getElementById(
        "cancelAddress"
    );

const newAddress =
    document.getElementById(
        "newAddress"
    );

const newPhone =
    document.getElementById(
        "newPhone"
    );


const deliveryAddress =
    document.getElementById(
        "deliveryAddress"
    );

const addressPhone =
    document.getElementById(
        "addressPhone"
    );



/* OPEN ADDRESS FORM */

changeAddressButton.addEventListener(
    "click",
    function () {

        addressForm.classList.toggle(
            "show"
        );

    }
);



/* SAVE ADDRESS */

saveAddress.addEventListener(
    "click",
    function () {

        const address =
            newAddress.value.trim();

        const phone =
            newPhone.value.trim();


        if (address === "") {

            alert(
                "Please enter your delivery address."
            );

            return;

        }


        deliveryAddress.textContent =
            address;


        if (phone !== "") {

            addressPhone.textContent =
                "📞 " + phone;

        }


        localStorage.setItem(
            "deliveryAddress",
            address
        );


        if (phone !== "") {

            localStorage.setItem(
                "deliveryPhone",
                phone
            );

        }


        addressForm.classList.remove(
            "show"
        );

    }
);



/* CANCEL ADDRESS */

cancelAddress.addEventListener(
    "click",
    function () {

        addressForm.classList.remove(
            "show"
        );

    }
);



/* =========================
   LOAD SAVED ADDRESS
========================= */

function loadAddress() {

    const savedAddress =
        localStorage.getItem(
            "deliveryAddress"
        );

    const savedPhone =
        localStorage.getItem(
            "deliveryPhone"
        );


    if (savedAddress) {

        deliveryAddress.textContent =
            savedAddress;

    }


    if (savedPhone) {

        addressPhone.textContent =
            "📞 " + savedPhone;

    }

}


loadAddress();



/* =========================
   CART TOTAL
========================= */

function getCartTotal() {

    let total = 0;


    /*
       Expected cart structure:

       localStorage.setItem(
           "tomatoCart",
           JSON.stringify(cart)
       );

       Each item should contain:

       {
           name: "Chicken Biryani",
           price: 250,
           quantity: 2
       }
    */


    const cart =
        JSON.parse(
            localStorage.getItem(
                "tomatoCart"
            )
        ) || [];


    cart.forEach(item => {

        total +=
            Number(item.price) *
            Number(item.quantity || 1);

    });


    return total;

}



function updateSummary() {

    const itemTotal =
        getCartTotal();


    const deliveryFee =
        itemTotal >= 499
            ? 0
            : 40;


    const platformFee =
        5;


    const tax =
        Math.round(
            itemTotal * 0.05
        );


    const finalTotal =
        itemTotal +
        deliveryFee +
        platformFee +
        tax;


    document.getElementById(
        "itemTotal"
    ).textContent =
        "₹" + itemTotal;


    document.getElementById(
        "deliveryFee"
    ).textContent =
        deliveryFee === 0
            ? "FREE"
            : "₹" + deliveryFee;


    document.getElementById(
        "taxAmount"
    ).textContent =
        "₹" + tax;


    document.getElementById(
        "totalAmount"
    ).textContent =
        "₹" + finalTotal;


    document.getElementById(
        "payAmount"
    ).textContent =
        finalTotal;


    return finalTotal;

}


const finalPayableAmount =
    updateSummary();



/* =========================
   UPI VERIFY
========================= */

const verifyUpi =
    document.getElementById(
        "verifyUpi"
    );

const upiId =
    document.getElementById(
        "upiId"
    );

const upiMessage =
    document.getElementById(
        "upiMessage"
    );


verifyUpi.addEventListener(
    "click",
    function () {

        const value =
            upiId.value.trim();


        if (
            value === "" ||
            !value.includes("@")
        ) {

            upiMessage.textContent =
                "Please enter a valid UPI ID.";

            upiMessage.style.color =
                "#e23744";

            return;

        }


        upiMessage.textContent =
            "✓ UPI ID verified successfully.";

        upiMessage.style.color =
            "#2d8a3c";

    }
);



/* =========================
   CARD NUMBER FORMAT
========================= */

const cardNumber =
    document.getElementById(
        "cardNumber"
    );


cardNumber.addEventListener(
    "input",
    function () {

        let value =
            this.value.replace(
                /\D/g,
                ""
            );


        value =
            value.substring(
                0,
                16
            );


        let formatted = "";


        for (
            let i = 0;
            i < value.length;
            i++
        ) {

            if (
                i > 0 &&
                i % 4 === 0
            ) {

                formatted += " ";

            }

            formatted += value[i];

        }


        this.value =
            formatted;

    }
);



/* =========================
   EXPIRY FORMAT
========================= */

const expiry =
    document.getElementById(
        "expiry"
    );


expiry.addEventListener(
    "input",
    function () {

        let value =
            this.value.replace(
                /\D/g,
                ""
            );


        value =
            value.substring(
                0,
                4
            );


        if (
            value.length >= 3
        ) {

            value =
                value.substring(
                    0,
                    2
                ) +
                " / " +
                value.substring(
                    2
                );

        }


        this.value =
            value;

    }
);



/* =========================
   PLACE ORDER
========================= */

placeOrderButton.addEventListener(
    "click",
    function () {

        const activeMethod =
            document.querySelector(
                ".payment-option.active"
            );


        if (!activeMethod) {

            alert(
                "Please select a payment method."
            );

            return;

        }


        const method =
            activeMethod.dataset.method;


        /* UPI validation */

        if (method === "upi") {

            const upi =
                upiId.value.trim();


            if (
                upi === "" ||
                !upi.includes("@")
            ) {

                alert(
                    "Please enter and verify your UPI ID."
                );

                return;

            }

        }


        /* Card validation */

        if (method === "card") {

            const number =
                cardNumber.value.replace(
                    /\s/g,
                    ""
                );

            const expiryValue =
                expiry.value.trim();

            const cvv =
                document.getElementById(
                    "cvv"
                ).value.trim();

            const name =
                document.getElementById(
                    "cardName"
                ).value.trim();


            if (
                number.length !== 16 ||
                expiryValue.length < 4 ||
                cvv.length !== 3 ||
                name === ""
            ) {

                alert(
                    "Please enter valid card details."
                );

                return;

            }

        }


        /* Net banking */

        if (method === "netbanking") {

            const bank =
                document.getElementById(
                    "bankSelect"
                ).value;


            if (bank === "") {

                alert(
                    "Please select your bank."
                );

                return;

            }

        }


        /* Wallet */

        if (method === "wallet") {

            const wallet =
                document.querySelector(
                    'input[name="wallet"]:checked'
                );


            if (!wallet) {

                alert(
                    "Please select a wallet."
                );

                return;

            }

        }


        /* =========================
           ORDER SUCCESS
        ========================= */

        const orderNumber =
            Math.floor(
                100000 +
                Math.random() * 900000
            );


        document.getElementById(
            "orderNumber"
        ).textContent =
            orderNumber;


        localStorage.setItem(
            "lastOrderNumber",
            orderNumber
        );


        /*
           Clear cart after
           successful order.
        */

        localStorage.removeItem(
            "tomatoCart"
        );


        successOverlay.classList.add(
            "show"
        );

    }
);



/* =========================
   CONTINUE HOME
========================= */

continueHome.addEventListener(
    "click",
    function () {

        window.location.href =
            "home.html";

    }
);