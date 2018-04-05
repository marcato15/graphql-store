import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from "react-router-dom";

const ProductInfo = ({ data }) => {
    if(data.loading){
        return "Loading...";
    }
    const { product } = data;
    const desc = product.desc ? <p>{product.desc}</p> : null;
    return (
    <div>
		<Link to="/">Back</Link>
        <h2>{product.title}</h2>
        <h4>{product.price}</h4>
        {desc}
    </div>
    );
}


const query = gql`
    query getProduct($id: ID!){ 
      product(id: $id){
        id
        title
        price
        desc
      }
    }`;

export default graphql(query)(ProductInfo);
