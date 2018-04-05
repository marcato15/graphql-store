import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, withRouter } from "react-router-dom";

import UpdateProductForm from "./forms/UpdateProductForm";

const EditProduct = ({ data, history }) => {
    if(data.loading){
        return "Loading...";
    }
    const { product } = data;
    const desc = product.desc ? <p>{product.desc}</p> : null;
    return (
        <div>
            <div>
                <Link to="/admin">Back</Link>
            </div>
            <div>
                <UpdateProductForm {...product} onSubmit={()=>history.push("/admin")} /> 
            </div>
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

export default withRouter(graphql(query)(EditProduct));
