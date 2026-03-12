const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const services = [
  { id: 1, name: "Oil Change", price: 500 },
  { id: 2, name: "Brake Repair", price: 1200 },
  { id: 3, name: "Engine Diagnostics", price: 900 }
]

let bookings = []

// Home route
app.get("/", (req, res) => {
  res.send("Mechanic Business API is running")
})

// Services
app.get("/services", (req, res) => {
  res.json(services)
})

// Create booking
app.post("/book", (req, res) => {
  const booking = req.body
  bookings.push(booking)
  res.json({ message: "Booking created" })
})

// Get bookings
app.get("/bookings", (req, res) => {
  res.json(bookings)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})
