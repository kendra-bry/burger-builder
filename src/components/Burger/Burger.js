import React from 'react';
import './Burger.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = ({ ingredients }) => {
	let transformedIngredients = Object.keys(ingredients)
		.map(igKey => [...Array(ingredients[igKey])].map((_, i) => <Ingredient key={igKey + i} type={igKey} />))
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients.</p>;
	}
	return (
		<div className='burger'>
			<Ingredient type='bread-top' />
			{transformedIngredients}
			<Ingredient type='bread-bottom' />
		</div>
	);
};

export default Burger;
