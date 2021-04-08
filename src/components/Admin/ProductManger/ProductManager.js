import React, { useEffect, useState } from 'react';
import ManageProducts from './ManageProducts';

const ProductManager = () => {
    const [dbData ,setDbData] =useState()
    useEffect( ()=>{
        fetch('https://infinite-sea-92018.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setDbData(data))
    },[])
    return (
        <div>
            {
                dbData?.map(book => <ManageProducts book={book}></ManageProducts>)
            }
        </div>
    );
};

export default ProductManager;