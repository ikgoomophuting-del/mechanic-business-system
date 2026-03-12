const express = require("express")
const cors = require("cors")

const bookingRoutes = require("./routes/bookingRoutes")
const serviceRoutes = require("./routes/serviceRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/bookings", bookingRoutes)
app.use("/api/services", serviceRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})
