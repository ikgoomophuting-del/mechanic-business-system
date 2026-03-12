async function loadBookings(){

const bookings = await getBookings()

const list = document.getElementById("bookings")

list.innerHTML = ""

bookings.forEach(b=>{

const li = document.createElement("li")

li.innerHTML = `${b.name} - ${b.service} - ${b.date}`

list.appendChild(li)

})

}

loadBookings()
