
let selectedPrice = 0;
let selectedName = "";

function selectTicket(name, price) {
selectedPrice = price;
selectedName = name;
document.getElementById("checkout").classList.remove("hidden");
document.getElementById("selected-ticket").innerText =
"Selected: " + name + " - R" + price;
calculateTotal();
}

function calculateTotal() {
let qty = document.getElementById("quantity").value;
let total = selectedPrice * qty;
document.getElementById("total").innerText = "Total: R" + total;
}

function proceedToPayment() {
let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let qty = document.getElementById("quantity").value;
let total = selectedPrice * qty;

if(name.length < 3) return alert("Enter valid name");
if(!email.includes("@")) return alert("Enter valid email");
if(phone.length < 8) return alert("Enter valid phone number");

let orderId = "SAD-" + Math.floor(Math.random()*1000000);

document.getElementById("pf_payment_id").value = orderId;
document.getElementById("pf_amount").value = total;
document.getElementById("pf_item").value = selectedName + " x" + qty;
document.getElementById("pf_name").value = name;
document.getElementById("pf_email").value = email;

document.getElementById("payfast-form").submit();
}
