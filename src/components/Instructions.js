import React from "react";

export default function Instructions({ title, steps }) {
	return (
		<section className="instructions">
			<h2>{title}</h2>
			{steps.map((s, i) => (
				<p key={i}>{s}</p>
			))}
		</section>
	);
}
// we can reuse this component for cooking instructions: Baking Instructions,” “Prep Instructions,” or a “Pre-cook Checklist”—anything
// that has steps.
