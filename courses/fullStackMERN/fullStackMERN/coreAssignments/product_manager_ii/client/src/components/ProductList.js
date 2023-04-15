import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const {products, setProducts} = props;

    useEffect(()=> {
        axios.get('http://localhost:8000/api/allProducts')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <h1>All Products:</h1>
            {
                products.map((product, index) => (
                    <div key={index}>
                        <p>
                            <Link to={'/api/oneProduct/' + product._id}>{product.title}</Link>
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList;