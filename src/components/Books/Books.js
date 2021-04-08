import React from 'react';
import { useHistory } from 'react-router';
import css from '../Books/Books.css'

const Books = ({ book }) => {
    const history =useHistory()
    const handleBuying =() =>{

        history.push('/checkout')
    }
    return (
        <div className="col-md-3 mb-3 ">
            <div className="card-item">
                <div>
                    <img style={{ height: '300px' }} src={book.imageURL} alt="" />
                    <h3>{book.name}</h3>
                    <h5>{book.authorName}</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <h5 className="px-3">{book.price}</h5>
                    <button className="btn btn-success" onClick={handleBuying}>Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Books;