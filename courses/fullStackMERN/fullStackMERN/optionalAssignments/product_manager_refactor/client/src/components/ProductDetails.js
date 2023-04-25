import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductDetails = (props) => {

    const navigate = useNavigate();

    const [product, setProduct] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='mt-2'>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <br/>
            <Link className='btn btn-secondary m-1' to={`/editProduct/${product._id}`}>Edit</Link>
            <button className='btn btn-danger m-1' onClick={() => deleteHandler(product._id)}>Delete</button>
        </div>
    )
}
export default ProductDetails;