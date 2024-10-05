import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Authlayout from "./components/auth/layout";
import { Register } from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AdminLayout from "./components/admin-view/AdminLayout";
import Features from "./pages/admin-view/Features";
import Products from "./pages/admin-view/Products";
import Dashbord from "./pages/admin-view/Dashbord";
import Orders from "./pages/admin-view/Orders";
import ShoppingLayout from "./components/shopping-view/ShoppingLayout";
import Notfound from "./pages/notfound/Notfound";
import Home from "./pages/shopping-view/Home";
import Checkout from "./pages/shopping-view/Checkout";
import Acount from "./pages/shopping-view/Acount";
import { ProductListing } from "./pages/shopping-view/ProductListing";
import CheckAuth from "./components/common/CheckAuth";
import Unauthrized from "./pages/notfound/Unauthrized";
const App = () => {
  const isAuthenticated = false;
  const user = null;
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Authlayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashbord" element={<Dashbord />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="features" element={<Features />} />
        </Route>

        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="list" element={<ProductListing />} />
          <Route path="account" element={<Acount />} />
        </Route>
        <Route path="*" element={<Notfound />}></Route>
        <Route path="unauth-page" element={<Unauthrized />}></Route>
      </Routes>
    </div>
  );
};

<Authlayout />;

export default App;
