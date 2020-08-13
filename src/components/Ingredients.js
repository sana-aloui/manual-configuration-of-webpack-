import React from "react";

export default function Ingredients({ amount, measurment, name }) {
	return (
		<li>
			{amount} {measurment}
			{name}
		</li>
	);
}

//Here, we assume each ingredient has an amount, a measurement, and a
//name. We destructure those values from our props object and display
//them each in independent classed span elements.
