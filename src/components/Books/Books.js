import React from 'react';

const Books = ({ book }) => {
    return (

        // <div class="row row-cols-1 row-cols-md-3 g-4 d-flex">
        //     <div class="col d-flex">
        //         <div class="card">
        //             <img style={{ height: '300px' }} src={book.imageURL} class="card-img-top" alt="..." />
        //             <div class="card-body">
        //                 <h5 class="card-title">{book.name}</h5>
        //                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="col-md-3 ">
             <img style={{height: '300px'}} src={book.imageURL} alt=""/>
             <h3>{book.name}</h3>

        </div>
    );
};

export default Books;