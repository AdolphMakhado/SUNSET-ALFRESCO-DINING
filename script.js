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
