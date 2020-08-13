import React from "react";

export default function IngredientsList({ list }) {
	return (
		<ul className="ingredients">
			{list.map((ingredient, i) => (
				<Ingredient key={i} {...ingredient} />
			))}
		</ul>
	);
}

// another way:

{
	/* <Ingredient
amount={ingredient.amount}
measurement={ingredient.measurement}
name={ingredient.name}
/> */
}
