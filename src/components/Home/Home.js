import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';

const Home = () => {

    const [books , setBooks] =useState([])

    useEffect( () =>{
        fetch('https://infinite-sea-92018.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="row ">
            {
                books.length === 0 && <h3 className="text-center mx-auto">Loading.....</h3>
            }
            {
                books.map(book =><Books book={book}></Books>)
            }
        </div>
    );
};

export default Home;