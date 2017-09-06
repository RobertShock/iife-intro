// let Something = (function(oldSomething){
// 	const animals = ["cat", "dog"];

// 	oldSomething.niceFunction = function(){
// 		console.log("im a nice function");
// 	}

// 	return oldSomething;

// })(Something || {});


var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "urnaus", "neptune"];
	const spacecraft = ["sputnik", "apollo", "opportunity", "orion"];

	oldSolarSystem.getPlanets = function(){
		return planets;
	};

	oldSolarSystem.setPlanet = function(newPlanet){
		planets.push(newPlanet);
	}

	oldSolarSystem.getSpacecraft = function(){
		return spacecraft;
	}

	oldSolarSystem.setSpaceCraft = function(){
		spacecraft.push(newSpacecraft);
	}

	return oldSolarSystem;
})(SolarSystem || {});


let myPlanets = SolarSystem.getPlanets();
console.log("myPlanets", myPlanets);







