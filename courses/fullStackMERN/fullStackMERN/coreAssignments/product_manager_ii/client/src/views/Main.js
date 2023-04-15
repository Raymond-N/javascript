import React, {useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {

    const [products, setProducts] = useState([]);

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm products={products} setProducts={setProducts} />
            <hr/>
            <ProductList products={products} setProducts={setProducts} />
        </div>
    )
}

export default Main;