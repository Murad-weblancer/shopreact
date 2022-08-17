import React from "react";
import "./Cart.scss";
import { BsCartDash } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CartProduct } from "../components/CartProduct/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearItems } from "../redux/slices/cartSlice";

export const Cart = () => {
  const { items,totalPrice } = useSelector((state) => state.cart);
  const itemsCount = items.reduce((sum, obj) => sum + obj.count, 0);
    const dispatch = useDispatch()
  if (items.length === 0) {
    return (
      <div className="container">
        <div className="empty">
            <img className="empty-img" src="images/empty.png" alt="" />
            <Link to='/'>
                <button> Go Back </button>
            
            </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="top-cart">
        <div className="top-cart-left">
          <BsCartDash className="icon" />
          <h1>Cart</h1>
        </div>
        <div className="top-cart-right"
        onClick={()=>dispatch(clearItems())}
        >
          <RiDeleteBin6Fill className="icon" />
          <h3>Clear</h3>
        </div>
      </div>
      {items.map((obj, i) => (
        <CartProduct key={i} {...obj} />
      ))}
      <div className="bottom-cart">
        <div className="bottom-cart-top">
          <h3>
            Number of products: <span>{itemsCount} pcs.</span>
          </h3>
          <h3>
            Amount <span>{totalPrice} $.</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
