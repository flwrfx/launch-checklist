// Write your JavaScript code here!



window.addEventListener("load", function() {
   formSubmit.addEventListener("click", function() {//checks if strings r empty/numbers r numbers
       if (pilotName.value === "" || copilotName.value === "" || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
           alert("All fields must be filled properly. Do better."); //<!--Reword this?-->
           event.preventDefault();
       }
       
       if(fuelLevel.value < 10000){
         document.getElementById("faultyItems").style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch."
         launchStatus.style.color = "red";
         fuelStatus.innerHTML = "Fuel level too low for launch."
         event.preventDefault();
       } 
       if (cargoMass.value > 10000){
         document.getElementById("faultyItems").style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch."
         launchStatus.style.color = "red";
         cargoStatus.innerHTML = "Cargo mass too high for launch."
         event.preventDefault();
       }
       pilotStatus.innerHTML = `${pilotName.value} ready.`;
       copilotStatus.innerHTML = `${copilotName.value} ready.`;
       
   })//click
   
})//loadS

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json){
      let randomPlanet = Math.floor(Math.random() * 6);
      const misTarget = document.getElementById("missionTarget")
         misTarget.innerHTML =   `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[randomPlanet].name}</li>
                  <li>Diameter: ${json[randomPlanet].diameter}</li>
                  <li>Star: ${json[randomPlanet].star}</li>
                  <li>Distance from Earth: ${json[randomPlanet].distance}</li>
                  <li>Number of Moons: ${json[randomPlanet].moons}</li>
               </ol>
                  <img src="${json[randomPlanet].image}"></img>
                                    `
   })
})


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
