var SolarSystem = (function(oldSolarSystem){
	const spacecraft = ["sputnik", "apollo", "opportunity", "orion"];

	oldSolarSystem.getSpacecraft = function(){
		return spacecraft;
	}

	oldSolarSystem.setSpaceCraft = function(){
		spacecraft.push(newSpacecraft);
	}

oldSolarSystem.wreckSpacecraft = function(){
	spacecraft.pop();
}

	return oldSolarSystem;
})(SolarSystem || {});