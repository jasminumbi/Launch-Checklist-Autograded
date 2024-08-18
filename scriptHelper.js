// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById('missionTarget');
    let planetInfo = `
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
   missionTarget.innerHTML = planetInfo;
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(testInput)) {
        return "Not a Number";
    }
    else {return "Is a Number";}
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotName = validateInput(pilot);
    let copilotName = validateInput(copilot);
    let fuel = validateInput(fuelLevel);
    let cargo = validateInput(cargoLevel);

    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

    
    let readyForLaunch = true;

    pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;

    if (Number(fuel) < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        readyForLaunch = false;
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } 
    else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        readyForLaunch = true;
    }
    if (Number(cargo) > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        readyForLaunch = false;
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        readyForLaunch = true;    
    }

    if (Number(fuel) < 10000 && Number(cargo) > 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        readyForLaunch = false;
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        readyForLaunch = true;
        }
    faultyItems.style.visibility = "visible";
    
    if(readyForLaunch) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length);
    let selectedPlanet = planets[randomPlanet];
    return selectedPlanet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;