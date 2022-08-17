import React from "react";
import "./Products.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingle } from "../../redux/slices/cartSlice";
export const Products = ({title,price,imageUrl,id}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getSinglePage = () =>{
    const products = {
      title,price,imageUrl,id
    }
    dispatch(getSingle(products))
    navigate('/single')
  }
  return (

      <div className="goods__list--item goods-item">
        <div className="goods-item__img">
          <img src={imageUrl} alt="" />
        </div>
        <div className="goods-item__content">
          <h3>{title}</h3>
          <p>{price}$</p>
        </div>
        <span className="goods-item__btn" onClick={getSinglePage}>
          buy
        </span>
      </div>

  );
};
