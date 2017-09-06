var SolarSystem = (function(oldSolarSystem){
	const star = ["twinkle", "little", "star"];

	oldSolarSystem.getStar = function(){
		return star;
	}

	oldSolarSystem.setStar = function(newStar){
		star.push(newStar);
	}

	oldSolarSystem.explodingStar = function(removeStar){
		star.pop();
	}

	oldSolarSystem.shiftyStars = function(){
		stars.shift();
	}

	return oldSolarSystem;
})(SolarSystem || {});
