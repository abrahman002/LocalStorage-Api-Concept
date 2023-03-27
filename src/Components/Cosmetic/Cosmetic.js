import React from 'react';
import { addToDb, removeDb } from '../Utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    // console.log(props)
    const {id,name,price}=props.cosmetic;

    const addToCart=id=>{
        // localStorage.setItem('Shopping-Cart',id)
        addToDb(id)
    }

    const removeCart=id=>{
        removeDb(id);
    }
    return (
        <div className='product'>
            <h2>Name:{name}</h2>
            <p>Price:{price}</p>
            <p><small>ID:{id}</small></p>
            <button onClick={()=>addToCart(id)}>Add to Cart</button>
            <button onClick={()=>removeCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;