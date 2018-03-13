import React from 'react';
import { connect } from 'react-redux';

const CartButton = props => {
    return (
        <div>
        <button onClick={() => console.log('pls work')}>Cart</button>
        </div>
    )
}


export default CartButton;