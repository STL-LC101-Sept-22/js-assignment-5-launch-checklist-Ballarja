// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === ""){
        return "Empty";
    }
    else if(isNaN(testInput)){
        return "Not a Number";
    }
    else if(!isNaN(testInput)){
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    validateInput();
    let launchForm = document.querySelector("form");
    
    if(pilot === "Empty" || copilot === "Empty"){
        alert("All Fields Are Required!!");
    }
    else if(fuelLevel === "Empty" || cargoLevel === "Empty"){
        alert("All Fields Are Required!!");
    }
    else if(pilot === "Is a Number" || copilot === "Is a Number"){
        alert("Enter Valid Information");
    }
    else if(fuelLevel === "Not a Number" || cargoLevel === "Not a Number"){
        alert("Enter Valid Information");
    }

}
  
            


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
