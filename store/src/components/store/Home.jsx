import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from "react-router-dom";

const Home = ({ data }) => {
    if(data.loading){
        return "Loading...";
    }
    const { products } = data;
    const productList = products.map( product => (
        <li><Link to={`/products/${product.id}`}>{product.title}</Link></li>
    ));
    return (
    <div>
        <h2>Products</h2>
        <ul>{productList}</ul>
    </div>
    );
}


const query = gql`
    query { 
      products {
        id
        title
        price
        desc
      }
    }`;

export default graphql(query)(Home);
