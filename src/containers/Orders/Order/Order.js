import React from 'react';

import classes from './Order.module.css'

const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ing => {
        return <span
                style={{
                    textTransform: 'Capitalize',
                    display: 'inline-block',
                    border: '1px solid #ccc',
                    margin: '0 8px'
                }}
                key={ing.name}>{ing.name} ({ing.amount})</span>
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price USD <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
}

export default order;