// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
            `;
}

function validateInput(testInput) {
    //testInput = "";
    if(testInput === ""){
        return "Empty";
    }
    else if(isNaN(testInput)){
        return "Not a Number";
    }
    else if(!isNaN(testInput)){
        return "Is a Number";
    }
    return " ";
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // Possibly work needed on if else if statements
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `CoPilot ${copilot} is ready for launch`;
    

    if(fuelLevel < 10000){
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Not enough fuel for the journey";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        console.log("fuelLevel log");
    }
    if(cargoLevel > 10000){
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Too much mass for the shuttle to take off";
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        console.log("cargoLevel log");
    }
    if(fuelLevel >= 10001 && cargoLevel <= 9999){
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        console.log("Ready for launch");
    }
}
  
            


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json){
            return response.json(planetsReturned);
        })
        });

    return planetsReturned;
}

function pickPlanet(planets) {
   return planets (Math.ceil(Math.random)) + 1;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
