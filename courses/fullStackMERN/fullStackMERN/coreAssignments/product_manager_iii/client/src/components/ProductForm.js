import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    const {productList, setProductList} = props;

    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newProduct', product)
            .then((res) => {
                console.log(res)
                setProduct({
                    title: '',
                    price: 0,
                    description: ''
                })
                setProductList([...productList, res.data])
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
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
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}
export default ProductForm;