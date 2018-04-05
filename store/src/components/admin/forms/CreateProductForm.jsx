import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ProductForm from "../../ProductForm";

const query = gql`
    mutation addProduct(
        $title: String!,
        $desc: String,
        $price: Float!
       ){ 
      addProduct(title:$title,desc:$desc,price:$price){
        id
        title
        price
        desc
      }
    }`;
export default graphql(query)(ProductForm);
