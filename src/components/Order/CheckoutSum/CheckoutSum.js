import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSum.module.css'

const checkoutSum = (props) => {
    return (
        <div className={classes.CheckoutSum}>
            <h1>We hope it tatses good</h1>
                <Burger ingredients={props.ingredients}/>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSum;