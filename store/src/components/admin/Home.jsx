import React from "react";
import { graphql } from 'react-apollo';
import { Link } from "react-router-dom";
import LoadProducts from "../queries/LoadProducts";

const Home = ({ data }) => {
    if(data.loading){
        return "Loading...";
    }
    const { products } = data;
    const productList = products.map( product => (
        <li><Link to={`/admin/edit/${product.id}`}>{product.title}</Link></li>
    ));
    return (
    <div>
        <h2>Store Admin</h2>
        <p>Click on a product to edit</p>
        <ul>{productList}</ul>
		<Link to="/admin/new">Add Product</Link>
    </div>
    );
}



export default graphql(LoadProducts)(Home);
