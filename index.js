function extendDeep(parent,child){
	var i,
		toStr = Object.prototype.toString,
		astr = "[object Array]";

	//child = child || {};

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



function Airplane(cost, weight){
	this.cost = 0;
	this.weight = 0;
}

var airplane = new Airplane();
console.log(airplane);

var x = extendDeep(Airplane, Airbus);
function Airbus(model) {
	this.model = model || 0;
}


var airbusik = new Airbus();

console.log(x.cost);