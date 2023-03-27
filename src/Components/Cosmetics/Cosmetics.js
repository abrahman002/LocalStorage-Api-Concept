import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotral } from '../Utilities/fakedb';

const Cosmetics = () => {
    const [cosmetics,setCosmetics]=useState([]);

    useEffect(()=>{
        fetch('fake.json')
        .then(res => res.json())
        .then(data =>setCosmetics(data))
    },[])

    const total=getTotral(cosmetics)
    return (
        <div>
            <h1>Welcome My React World</h1>
            <p>Total-Price:{total}</p>
            {
                cosmetics.map(cosmetic=><Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;