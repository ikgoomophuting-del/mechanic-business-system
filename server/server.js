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

/* ---------------- API DASHBOARD ---------------- */

app.get("/", (req, res) => {
  res.json({
    name: "Mechanic Business API",
    description: "Backend API for mechanic workshop booking platform",
    version: "1.0",
    status: "Running",
    endpoints: [
      {
        method: "GET",
        route: "/services",
        description: "List available services"
      },
      {
        method: "POST",
        route: "/book",
        description: "Create a booking"
      },
      {
        method: "GET",
        route: "/bookings",
        description: "View all bookings"
      }
    ]
  })
})

/* ---------------- SERVICES ---------------- */

app.get("/services", (req, res) => {
  res.json(services)
})

/* ---------------- CREATE BOOKING ---------------- */

app.post("/book", (req, res) => {

  const booking = {
    id: bookings.length + 1,
    name: req.body.name,
    service: req.body.service,
    date: req.body.date
  }

  bookings.push(booking)

  res.json({
    message: "Booking created successfully",
    booking
  })

})

/* ---------------- VIEW BOOKINGS ---------------- */

app.get("/bookings", (req, res) => {
  res.json(bookings)
})

/* ---------------- SERVER ---------------- */

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
