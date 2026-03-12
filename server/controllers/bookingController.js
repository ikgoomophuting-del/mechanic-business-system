const db = require("../database/db")

exports.createBooking = async (req,res)=>{

const {name,service,date} = req.body

try{

await db.query(
"INSERT INTO bookings(name,service,date) VALUES($1,$2,$3)",
[name,service,date]
)

res.json({message:"Booking created"})

}catch(error){

res.status(500).json({error:error.message})

}

}

exports.getBookings = async (req,res)=>{

const bookings = await db.query("SELECT * FROM bookings")

res.json(bookings.rows)

}
