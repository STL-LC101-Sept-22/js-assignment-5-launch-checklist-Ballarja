// Write your JavaScript code here!

window.addEventListener("load", function() {
    
    let form = document.querySelector("form");

      form.addEventListener("submit", function(event) {
       let pilotInput = document.querySelector("input[name=pilotName]");
       let copilotInput = document.querySelector("input[name=copilotName]");
       let fuelInput = document.querySelector("input[name=fuelLevel]");
       let cargoInput = document.querySelector("input[name=cargoMass]");
       
       if(pilot === "Empty" || copilot === "Empty" || fuelLevel === "Empty" || cargoLevel === "Empty"){
            alert("All Fields Are Required!!");
            event.preventDefault();
       }
        formSubmission(document, pilotInput, copilotInput, fuelInput, cargoInput);
      });
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    //listedPlanetsResponse.then(function (result) {
    //    listedPlanets = result;
    
        console.log(listedPlanets);
   // }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
// });
 
 