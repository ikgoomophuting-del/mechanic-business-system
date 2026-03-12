const API_URL = "https://your-render-api.onrender.com/api"

async function getServices(){

const res = await fetch(`${API_URL}/services`)
return res.json()

}

async function createBooking(data){

await fetch(`${API_URL}/bookings`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

})

}

async function getBookings(){

const res = await fetch(`${API_URL}/bookings`)
return res.json()

}
