import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'
import ProductForm from './ProductForm';

const EditProduct = (props) => {

    const {id} = useParams()
    
    const [product, setProduct] = useState({});

    const [loaded, setLoaded] = useState(false);
    
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data)
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const updateProduct = product => {
        axios.put(`http://localhost:8000/api/updateProduct/${id}`, product)
            .then(res => {
                console.log(res);
                navigate('/'); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='mt-2'>
            <h2>Edit Product</h2>
            {loaded && (
                <>
                    <ProductForm onSubmitProp={updateProduct} initialProduct={product} />
                </>
            )}
        </div>
    )
}
export default EditProduct;