import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]:e.target.value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newProduct', product)
            .then(res => {
                console.log(res);
                setProduct({
                    title: '',
                    price: 0,
                    description: ''
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" name="title" onChange={changeHandler} value={product.title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" name="price" step=".01" onChange={changeHandler} value={product.price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="textarea" name="description" onChange={changeHandler} value={product.description}/>
            </p>
            <input type="submit" value="Create"/>
        </form>
    )
}
export default ProductForm;