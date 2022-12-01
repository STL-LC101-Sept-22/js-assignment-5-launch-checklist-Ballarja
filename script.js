
// Write your JavaScript code here!
window.addEventListener("load", function() {

    document.getElementById("faultyItems").style.visibility = "hidden";
    let form = document.querySelector("form");

      form.addEventListener("submit", function(event) {
       let pilotInput = document.querySelector("input[name=pilotName]").value;
       let copilotInput = document.querySelector("input[name=copilotName]").value;
       let fuelInput = document.querySelector("input[name=fuelLevel]").value;
       let cargoInput = document.querySelector("input[name=cargoMass]").value;
       let list = document.querySelector("input[name=faultyItems]");
       
       if(validateInput(pilotInput) === "Empty" || validateInput(copilotInput) === "Empty" 
       || validateInput(fuelInput) === "Not a Number" || validateInput(cargoInput) === "Not a Number"){
            alert("All Fields Are Required!!");
       }
       else if(validateInput(pilotInput) === "Is a Number" || validateInput(copilotInput) === "Is a Number" 
       || validateInput(fuelInput) === "Empty" || validateInput(cargoInput) === "Empty"){
            alert("All Fields Are Required!!");
       }
       event.preventDefault();
        formSubmission(document, list, pilotInput, copilotInput, fuelInput, cargoInput);
      });
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let currentPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, currentPlanet.name, currentPlanet.diameter, currentPlanet.star, currentPlanet.distance, currentPlanet.moons, currentPlanet.image)
    })
    
 });
 
 