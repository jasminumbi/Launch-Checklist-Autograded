// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    let button = this.document.getElementById("formSubmit");

    button.addEventListener("click", function(event){
        event.preventDefault();
        const pilotInput = document.querySelector("input[name = pilotName]").value;
        const copilotInput = document.querySelector("input[name = copilotName]").value;
        const fuelLevelInput = document.querySelector("input[name = fuelLevel]").value;
        const cargoMassInput = document.querySelector("input[name = cargoMass]").value;
        const list = document.querySelector("faultyItems");

        formSubmission(document, list, pilotInput, copilotInput, fuelLevelInput, cargoMassInput);
    });

    let listedPlanets;
   
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    })
    
 });