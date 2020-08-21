import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => { // retreive each type in ingredients object
            return [...Array(props.ingredients[ingKey])].map((_, i) => { // return jsx for each number
                return <BurgerIngredient key={ingKey + i} type={ingKey} />
            });
        })
        .reduce((arr, el) => { // reduce to a single array instead of array of arrays
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />

        </div>
    );
};

export default withRouter(burger);