import React from 'react';
import '../App.css';

function Category({category, handleChange}) {
    return (
        <div>
            <h1  className="main">Product Listing Page</h1>
            <form  className="main">
                    <select className="select" onChange={(e) => handleChange(e)}>
                        {
                            category.map((items) => (
                                <option value={items.id} key={items.id}>{items.name}</option>
                            ))
                        }
                    </select>
            </form>
            <hr/>
        </div>
    )
}

export default Category
