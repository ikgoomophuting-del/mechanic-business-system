async function bookService(){

const name = document.getElementById("name").value
const service = document.getElementById("service").value
const date = document.getElementById("date").value

await createBooking({name,service,date})

alert("Booking successful")

}
