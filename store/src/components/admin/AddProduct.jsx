import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from "react-router-dom";

import CreateProductForm from "./forms/CreateProductForm";

const AddProduct = ({ history }) => {
    return (
        <div>
            <div>
                <Link to="/admin">Back</Link>
            </div>
            <div>
                <CreateProductForm onSubmit={()=>history.push("/admin")} /> 
            </div>
        </div>
    );
}



export default AddProduct;
