const { response } = require('express')
const express = require('express')
//Express boilerplate; also can set app as express()
const app = express()
const PORT = 8000
const cors = require('cors')
app.use(cors()) // need this so the server will allow local files to use the API!

//Add objects to the server that the server can respond with:
class RebirthPOI {
    constructor(dropzone, map){
        this.dropzone = dropzone
        this.map = map
    }
}
const stronghold = new RebirthPOI("Stronghold", "Rebirth Island")
const docks = new RebirthPOI("Docks", "Rebirth Island")
const livingQuarters = new RebirthPOI("Living Quarters", "Rebirth Island")
const nova = new RebirthPOI("Nova 6 Factory", "Rebirth Island")
const headquarters = new RebirthPOI("Headquarters", "Rebirth Island")
const controlCenter = new RebirthPOI("Control Center", "Rebirth Island")
const prisonCourtyard = new RebirthPOI("Prison Courtyard", "Rebirth Island")
const prisonInterior = new RebirthPOI("Prison - Interior", "Rebirth Island")
const prisonRoof = new RebirthPOI("Prison - Roof ", "Rebirth Island")
const harbor = new RebirthPOI("Harbor", "Rebirth Island")
const chemical = new RebirthPOI("Chemical Engineering", "Rebirth Island")
const decon = new RebirthPOI("Decon Zone", "Rebirth Island")
const bio = new RebirthPOI("Bioweapon Labs", "Rebirth Island")

app.get('/api/', (request, response)=>{ //looks like an EVENT LISTENER! Instead of a "click", it is a network request. 
    response.sendFile(__dirname + '/index.html') //Server will respond with this file, but it has to find it first! That's why we add  __dirname + (root folder to start looking)   
})

app.get('/random/', (request, response)=>{ 
    let randomNum = Math.ceil(Math.random()*13)
    let randomDropZone = ""
    if(randomNum == 1){
        randomDropZone = docks
    }else if(randomNum == 2){
        randomDropZone = livingQuarters
    }else if(randomNum == 3){
        randomDropZone = nova
    }else if(randomNum == 4){
        randomDropZone = headquarters
    }else if(randomNum == 5){
        randomDropZone = controlCenter
    }else if(randomNum == 6){
        randomDropZone = prisonCourtyard
    }else if(randomNum == 7){
        randomDropZone = prisonInterior 
    }else if(randomNum == 8){
        randomDropZone = prisonRoof
    }else if(randomNum == 9){
        randomDropZone = harbor
    }else if(randomNum == 10){
        randomDropZone = chemical
    }else if(randomNum == 11){
        randomDropZone = decon
    }else if(randomNum == 12){
        randomDropZone = bio 
    }else if(randomNum == 13){
        randomDropZone = stronghold
    }else{
        console.log("Error in Random function")
    }
    response.json(randomDropZone.dropzone)
})

app.listen(process.env.PORT || PORT, ()=>{ //process.env.PORT basically says use whatever port Heroku or host provides us.
    console.log(`Server is running . . . \nBetter go catch it! On port ${PORT}`)
})