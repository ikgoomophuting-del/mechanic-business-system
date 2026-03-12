async function loadServiceOptions(){

const services = await getServices()

const dropdown = document.getElementById("service")

services.forEach(service => {

const option = document.createElement("option")

option.value = service.name
option.textContent = `${service.name} - R${service.price}`

dropdown.appendChild(option)

})

}

async function bookService(){

const name = document.getElementById("name").value
const service = document.getElementById("service").value
const date = document.getElementById("date").value

await createBooking({
name,
service,
date
})

alert("Booking successful")

}

loadServiceOptions()
