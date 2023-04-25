import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    const {productList, setProductList} = props;

    const {initialProduct, onSubmitProp} = props;

    const [product, setProduct] = useState(initialProduct);

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({product})
    }

    return (
        <div>
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
                <input type="submit"/>
            </form>
        </div>
    )
}
export default ProductForm;