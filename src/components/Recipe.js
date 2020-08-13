import React from "react";
import IngredientList from "./IngredientsList";
import Instructions from "./Instructions";

function Recipe({ name, ingredients, steps }) {
	return (
		<section id={name.toLowerCase().replace(/ /g, "-")}>
			<h1>{name}</h1>
			<IngredientList list={ingredients} />
			<Instructions title="Cooking Instructions" steps={steps} />
		</section>
	);
}
export default Recipe;

//This shows us that a recipe
//should display the name of the recipe, a list of ingredients, and some
//cooking instructions
