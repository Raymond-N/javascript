import React, {useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {

    const [productList, setProductList] = useState([]);

    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm productList={productList} setProductList={setProductList} />
            <hr/>
            <ProductList productList={productList} setProductList={setProductList} />
        </div>
    )
}

export default Main;