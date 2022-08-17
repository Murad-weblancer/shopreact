import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "../components/Category/Category";
import { Products } from "../components/Products/Products";
import { Skeleton } from "../components/Skeleton";
import { fetchProduct } from "../redux/slices/products";
import { useNavigate } from "react-router-dom";

import  qs  from "qs";
import { Pagination } from "../components/Pagination/Pagination";
export const Home = () => {
  const { products, status } = useSelector((state) => state.product);
  const { categoryId,search,page } = useSelector((state) => state.filter);
  const navigate =useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    const getApiProducts = async() => {
      dispatch(fetchProduct({ categoryId,search,page }));
    };
    getApiProducts();
  }, [categoryId,search,page]);

  useEffect(()=>{
    const urlProduct = qs.stringify({
        categoryId,search,page
    })
    navigate(`?${urlProduct}`)
  },[categoryId,search,page])
  return (
    <div className="container">
      <Category />
      <div className="goods__list">
        {status
          ? [...new Array(8)].map((obj, i) => <Skeleton key={i} />)
          : products.map((obj, i) => <Products key={i} {...obj} />)}
      </div>
      <Pagination/>
    </div>
  );
};
