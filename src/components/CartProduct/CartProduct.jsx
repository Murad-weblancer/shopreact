import React from 'react'
import './CartProduct.scss'
import { useDispatch, useSelector } from "react-redux";

import { AiFillPlusCircle,AiFillMinusCircle,AiFillCloseCircle } from "react-icons/ai";
import { decriment, deleteItems, increment } from '../../redux/slices/cartSlice';

export const CartProduct = ({title,imageUrl,price,id,count}) => {
    const {items} = useSelector(state=>state.cart)
    const itemsCount = items.find(obj=>obj.id === id);
    const dispatch = useDispatch()
  return (
    <div className='item-cart'>
        <div className="item-cart-first">
            <img src={imageUrl} alt="" />
            <h4> {title} </h4>
        </div>
        <div className="item-cart-second">
            <span className='minus'
            onClick={()=>dispatch(decriment(id))}
            > <AiFillMinusCircle className='icon'/> </span>
            <span className='count'>{itemsCount.count}</span>
            <span className='plus'> <AiFillPlusCircle className='icon'
            onClick={()=>dispatch(increment(id))}
            /> </span>
        </div>
        <div className="item-cart-third">
            <span className='price'> {price * count} $ </span>
        </div>
        <div className="item-cart-forth"
        onClick={()=>dispatch(deleteItems(id))}>
            <span>
                <AiFillCloseCircle className='icon two'/>
            </span>
        </div>
    </div>
  )
}
