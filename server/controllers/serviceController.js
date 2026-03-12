const db = require("../database/db")

exports.getServices = async (req,res)=>{

try{

const services = await db.query("SELECT * FROM services")

res.json(services.rows)

}catch(error){

res.status(500).json({error:error.message})

}

}
