import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] =useState(null);

    const onSubmit = data => {
        const bookData = {
            name:data.name,
            authorName: data.authorName,
            price: data.price,
            imageURL: imageURL
        }
        const url =`http://localhost:4000/addBook`
        console.log(bookData)
        fetch(url,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(bookData)
            
        })
        .then(res =>console.log('server side response'))
    };
    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData =new FormData();
        imageData.set('key', '46a68b0af582485cbc177ed9206a9ff2')
        imageData.append('image', event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Book Name</label>
                <br/>
                <input name="name" placeholder="Book Name"  {...register("name")}/>
                <br/>
                <label htmlFor="name">Author Name</label>
                <br/>
                <input name="name" placeholder="Author Name" {...register("authorName")}/>
                <br/>
                <label htmlFor="price">Add Price</label>
                <br/>
                <input name="price" placeholder='price' {...register("price")}/>
                <br/>
                <input class="mt-3 " type="file" onChange={handleImageUpload}/>
                <br/>

                <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;