import React  from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function List({products}) {
    return (
        <div className="main" >
            {
                products.map((items) => (
                    <NavLink to={`/product-details/${items.id}`} key={items.id}>
                        <div  className="Container">
                                <img src={items.imageUrl} alt="this is product image" className="img"></img>
                                <span className="name"> {items.name}</span>
                            </div>
                    </NavLink>
                ))
            }
        </div>
    )
}

export default List;
