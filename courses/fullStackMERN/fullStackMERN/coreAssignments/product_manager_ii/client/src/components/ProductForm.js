import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    const {products, setProducts} = props;

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newProduct', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                console.log(res.data)
                setProducts([...products, res.data]);
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={submitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" name="price" step=".01" onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br/>
                <input type="textarea" name="description" onChange={(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit" value="Create"/>
        </form>
    )
}
export default ProductForm;