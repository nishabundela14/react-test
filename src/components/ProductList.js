import React, { useEffect, useState } from 'react';
import Category from './Category';
import List from './List';
import URL from '../config/Constants'
import axios from 'axios';

function ProductList() {
     const [category, setCategory] = useState([]);
     const [products, setProducts] = useState([]);
     const [categoryId, setCategoryId] = useState('1');

     useEffect(() => {
         getCategory();
     }, []);

     useEffect(() => {
        getProducts();
    }, [categoryId]);

     function getCategory(){
        axios.get(URL.CATEGORY).then((res) => {
            setCategory(res.data)
        })
     }

     function getProducts() {
        axios.get(`${URL.LIST}${categoryId}`).then((res) => {
            setProducts(res.data);
        });
    }

    function handleChange(e) {
        setCategoryId(e.target.value);
    }
    return (
        <div>
            <Category category={category} handleChange={handleChange}/>
            <List products={products} />
        </div>
    )
}

export default ProductList
