import React, { useState } from 'react';

import css from '../Admin/Admin.css'
import AddProducts from './AddProducts/AddProducts';
import ProductManager from './ProductManger/ProductManager';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Admin = () => {
  
    return (
        <div>
            <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/addProducts">Add Products</Link>
            </li>
            <li>
              <Link to="/manageProduct">Manage Product</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/addProducts">
           <AddProducts></AddProducts>
          </Route>
          <Route path="/manageProduct">
          <ProductManager></ProductManager>
          </Route>
          <Route path="/">
          <AddProducts></AddProducts>
          </Route>
        </Switch>
      </div>
    </Router>
           
        </div>
    );
};

export default Admin;