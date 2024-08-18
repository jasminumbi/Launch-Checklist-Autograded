// Write your JavaScript code here!


window.addEventListener("load", function() {

    let listedPlanets;
   
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        let target = document.getElementById("missionTarget");
        addDestinationInfo(target, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    })

    
    let button = document.getElementById("formSubmit");

    button.addEventListener("click", function(event){
        event.preventDefault();
        const pilotInput = document.querySelector("input[name=pilotName]").value;
        const copilotInput = document.querySelector("input[name=copilotName]").value;
        const fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
        const cargoMassInput = document.querySelector("input[name=cargoMass]").value;
        const list = document.querySelector("faultyItems");

        formSubmission(document, list, pilotInput, copilotInput, fuelLevelInput, cargoMassInput);
    });
    
 });