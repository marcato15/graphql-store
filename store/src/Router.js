import React from "react";
import { Switch, Route } from 'react-router-dom'

import StoreHome from "./components/store/Home";
import ProductInfo from "./components/store/ProductInfo";

import AdminHome from "./components/admin/Home";
import AddProduct from "./components/admin/AddProduct";
import EditProduct from "./components/admin/EditProduct";

const Router = () => (
    <Switch>
        <Route exact path='/' component={StoreHome}/>
        <Route exact path='/products/:id' render={
            ({ match })=> {
                return <ProductInfo id={match.params.id} />;
            }}
        />
        <Route exact path='/admin' component={AdminHome}/>
        <Route exact path='/admin/new' component={AddProduct}/>
        <Route exact path='/admin/edit/:id' render={
            ({ match })=> {
                return <EditProduct id={match.params.id} />;
            }}
        />
    </Switch>
);

export default Router;
