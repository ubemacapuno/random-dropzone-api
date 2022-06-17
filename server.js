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

class CalderaPOI {
    constructor(dropzone, map){
        this.dropzone = dropzone
        this.map = map
    }
}
const arsenal = new CalderaPOI("Arsenal","Caldera")
const docksCaldera = new CalderaPOI("Docks","Caldera")
const runway = new CalderaPOI("Runway","Caldera")
const ruins = new CalderaPOI("Ruins","Caldera")
const mines = new CalderaPOI("Mines","Caldera")
const peak = new CalderaPOI("Peak","Caldera")
const beachHead = new CalderaPOI("Beach Head","Caldera")
const village= new CalderaPOI("Village","Caldera")
const lagoon = new CalderaPOI("Lagoon","Caldera")
const airfield = new CalderaPOI("Airfield","Caldera")
const fields = new CalderaPOI("Fields","Caldera")
const subPen = new CalderaPOI("Sub Pen","Caldera")
const powerPlant = new CalderaPOI("Power Plant","Caldera")
const capital = new CalderaPOI("Capital","Caldera")
const resort = new CalderaPOI("Resort","Caldera")

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
        randomDropZone = "Error in Random 1 calculation"
        console.log("Error in Random 1 calculation")
    }
    response.json(randomDropZone.dropzone)
})

app.get('/random2/', (request, response)=>{ 
    let randomNum = Math.ceil(Math.random()*15)
    let randomDropZoneTwo = ""
    switch (randomNum){
        case 1:
            randomDropZoneTwo = arsenal;
            break;
        case 2:
            randomDropZoneTwo = docksCaldera;
            break;
        case 3:
            randomDropZoneTwo = runway;
            break;
        case 4:
            randomDropZoneTwo = ruins;
            break;
        case 5:
            randomDropZoneTwo = mines;
            break;
        case 6:
            randomDropZoneTwo = peak;
            break;
        case 7:
            randomDropZoneTwo = beachHead;
            break;
        case 8:
            randomDropZoneTwo = village;
            break;
        case 9:
            randomDropZoneTwo = lagoon;
            break;
        case 10:
            randomDropZoneTwo = airfield;
            break;
        case 11:
            randomDropZoneTwo = fields;
            break;
        case 12:
            randomDropZoneTwo = subPen;
            break;
        case 13:
            randomDropZoneTwo = powerPlant;
            break;
        case 14:
            randomDropZoneTwo = capital;
            break;
        case 15:
            randomDropZoneTwo = resort;
            break;
        default:
            randomDropZoneTwo = ' Encountered error in Random 2 calculation!'
    }
    response.json(randomDropZoneTwo.dropzone)
})

app.listen(process.env.PORT || PORT, ()=>{ //process.env.PORT basically says use whatever port Heroku or host provides us.
    console.log(`Server is running . . . \nBetter go catch it! On port ${PORT}`)
})