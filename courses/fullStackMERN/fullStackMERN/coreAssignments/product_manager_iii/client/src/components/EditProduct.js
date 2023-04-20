import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'

const EditProduct = (props) => {

    const navigate = useNavigate();

    const {id} = useParams()

    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateProduct/${id}`, product)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div className='mt-2'>
            <h2>Edit Product</h2>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" name="title" onChange={changeHandler}  value={product.title}/>
                    {
                        errors.title?
                        <p className='text-danger'>{errors.title.message}</p>:
                        null
                    }
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="number" name="price" step=".01" onChange={changeHandler}  value={product.price} />
                    {
                        errors.price?
                        <p className='text-danger'>{errors.price.message}</p>:
                        null
                    }
                </p>
                <p>
                    <label>Description</label><br/>
                    <input type="textarea" name="description" onChange={changeHandler}  value={product.description} />
                    {
                        errors.description?
                        <p className='text-danger'>{errors.description.message}</p>:
                        null
                    }
                </p>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}
export default EditProduct;