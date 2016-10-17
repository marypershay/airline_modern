function extendDeep(parent,child){
	var i,
		toStr = Object.prototype.toString,
		astr = "[object Array]";

	child = child || {};

	for (i in parent){
		if (parent.hasOwnProperty(i)){
			if (typeof parent[i] === "object"){
				child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
				extendDeep(parent[i], child[i]);
			} else{
				child[i] = parent[i];
			}
		}
	}
	return child;
}

var airplane = {
	cost: 0,
	weight: 0,
	model: "unknown", 
	maxSpeed: 0
}

var airbus = extendDeep(airplane);
airbus.company = "Airbus corp."

var airbusA230 = extendDeep(airbus);
airbusA230.model = "‎Airbus A230";
airbusA230.weight = 68000;

var boeing = extendDeep(airplane);
boeing.company = "Boeing corp."

var boeingMercury = extendDeep(boeing);
boeingMercury.model = "E-6 Mercury";
boeingMercury.maxSpeed = 870;

var boeingStratojet = extendDeep(boeing);
boeingStratojet.model = "B-47 Stratojet";
boeingStratojet.maxSpeed = 978;


var airport = {
	airplains : []
}

airport.airplains.push(boeingMercury);
airport.airplains.push(boeingStratojet);
airport.airplains.push(airbusA230);

console.log("Airport consist of ");
console.log(airport.airplains);