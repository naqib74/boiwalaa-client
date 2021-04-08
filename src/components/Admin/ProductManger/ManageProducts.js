import React, { useEffect, useState } from 'react';

const ManageProducts = ({book}) => {
    const handleDelete = (id) =>{
        
    }
    return (
        <div className="d-flex justify-content-center p-3 ms-5">
            <h3 className="ms-5 px-5">{book.name}</h3>
            <h4 className="ms-5 px-5">{book.authorName}</h4>
            <h5 className="ms-5 px-5">{book.price}</h5>
            <button className="btn btn-danger" onClick={() =>handleDelete(book._id)}>Delete</button>
        </div>
    );
};

export default ManageProducts;