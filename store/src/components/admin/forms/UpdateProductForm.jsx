import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ProductForm from "../../ProductForm";

const query = gql`
    mutation updateProduct(
        $id: ID!,
        $title: String,
        $desc: String,
        $price: Float
       ){ 
      updateProduct(id: $id,title:$title,desc:$desc,price:$price){
        id
        title
        price
        desc
      }
    }`;
export default graphql(query)(ProductForm);
