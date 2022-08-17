import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addItems, deleteItems } from '../redux/slices/cartSlice'
import { Link } from "react-router-dom";
import './Single.scss'
export const Single = () => {
  const {single,items} = useSelector(state=>state.cart)
  const someitems = items.some(obj=>obj.id === single.id)
  const dispatch = useDispatch()
  const filterItems = () => {
  if(someitems){
    dispatch(deleteItems(single.id))
  }else{
    dispatch(addItems(single))
  }
}
  return (
    <div className="single container">
      <div className="single__images">

        <div className="single__images--big"><img src={single.imageUrl} alt=""/></div>
      </div>
      <div className="single__content">
        <h2 className="single__content--title">{single.title}</h2>  <span className="single__content--price"> {single.price} $</span><span className="single__content--info">Product Highlights</span>
        <ul className="single__content--list">
          <li>128 GB ROM</li>
          <li>13.72 cm (5.4 inch) Super Retina XDR Display</li>
          <li>12MP + 12MP | 12MP Front Camera</li>
          <li>A14 Bionic Chip with Next Generation Neural Engine Processor</li>
          <li>Ceramic Shield</li>
          <li>IP68 Water Resistance</li>
          <li>All Screen OLED Display</li>
          <li>The shipment for this product will begin from 14th November 2020</li>
        </ul>
        <div className="single__content--btn"><span className="btn-dark">
          <Link to='/cart'>
            cart
          </Link>
          </span>
  
        {
          someitems ? (
            <span className="btn-dark" onClick={filterItems}> ADDED</span>
          ): (
            <span className="btn-dark" onClick={filterItems}>BUY</span>
          )
        }
        </div>
      </div>
    </div>
  )
}
