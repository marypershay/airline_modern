var extend = require('./extend');
var airplane = require('./airplane');

function Airbus(model) {
	var airbus = extendDeep(new airplane.Airplane());
	airbus.model = model || 0;
}