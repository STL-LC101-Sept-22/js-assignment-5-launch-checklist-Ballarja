
// Write your JavaScript code here!
window.addEventListener("load", function() {

    document.getElementById("faultyItems").style.visibility = "hidden";
    let form = document.querySelector("form");

      form.addEventListener("submit", function(event) {
       const pilotInput = document.querySelector("input[name=pilotName]").textContent;
       const copilotInput = document.querySelector("input[name=copilotName]").textContent;
       const fuelInput = document.querySelector("input[name=fuelLevel]").textContent;
       const cargoInput = document.querySelector("input[name=cargoMass]").textContent;
       const list = document.querySelector("input[name=faultyItems]");
       
       if(validateInput(pilotInput) === "Empty" || validateInput(copilotInput) === "Empty" 
       || validateInput(fuelInput) === "Is a Number" || validateInput(cargoInput) === "Is a Number"){
            alert("All Fields Are Required!!");
            console.log("script.js log");
            event.preventDefault();
       }
        formSubmission(document, list, pilotInput, copilotInput, fuelInput, cargoInput);
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
 
 