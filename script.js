function buyTicket(type){

let amount
let name

if(type === "single"){
amount = 450
name = "Sunset Alfresco Single Ticket"
}

if(type === "couple"){
amount = 750
name = "Sunset Alfresco Couples Ticket"
}

document.getElementById("amount").value = amount
document.getElementById("item_name").value = name

document.getElementById("payfast-form").submit()
}

const eventDate = new Date("April 12, 2026 18:00:00").getTime()

setInterval(function(){

const now = new Date().getTime()
const distance = eventDate - now
const days = Math.floor(distance / (1000 * 60 * 60 * 24))

document.getElementById("countdown").innerHTML =
days + " days until the experience"

},1000)
