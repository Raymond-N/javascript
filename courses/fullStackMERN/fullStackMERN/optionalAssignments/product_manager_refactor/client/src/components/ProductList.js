import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const {productList, setProductList} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then((res) => {
                console.log(res);
                setProductList(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
            .then((res) => {
                console.log(res);
                const updatedProductList = productList.filter((product) => product._id !== id)
                setProductList(updatedProductList)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>All Products:</h1>
            {
                productList.map((product) => (
                    <div className='border border-dark m-2' key={product._id}>
                        <h4>
                            <Link to={`/viewProduct/${product._id}`}>{product.title}</Link>
                        </h4>
                        <p>
                            <Link className='btn btn-secondary m-1' to={`/editProduct/${product._id}`}>Edit</Link>
                            <button className='btn btn-danger m-1' onClick={() => deleteHandler(product._id)}>Delete</button>
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList;