async function loadServices(){

const services = await getServices()

const container = document.getElementById("services")

services.forEach(service=>{

const div = document.createElement("div")

div.innerHTML = `
<h3>${service.name}</h3>
<p>Price: R${service.price}</p>
`

container.appendChild(div)

})

}

loadServices()
