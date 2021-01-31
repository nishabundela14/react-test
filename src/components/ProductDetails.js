import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import URL from '../config/Constants'
import axios from 'axios';

function ProductDetails({match}) {
    let product = useParams();
    const [detail, setDetail] = useState([])
    useEffect(() => {
        getProducts();
    }, []);

    function getProducts() {
        axios.get(`${URL.DETAILS}${product.id}`).then((res) => {
            setDetail(res.data);
        });
    }
    console.log(detail)

    return (
        <div>
            <h1>Products Details Page</h1>
            <hr />
            {
                detail.map((item) => (
                <div key={item.id}>
                    <img src={item.imageUrl} className="img1" />
                    <div className="main1">
                        <div className="wrapper">
                            <span>Category : </span>
                            <span>{item.categoryId}</span>
                        </div>
                        <div className="wrapper">
                            <span>Product Name : </span>
                            <span>{item.name}</span>
                        </div>
                        <div className="wrapper">
                            <span>Product Description : </span>
                            <span>{item.description}</span>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default ProductDetails
