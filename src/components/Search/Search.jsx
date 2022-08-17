import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import "./Search.scss";
import { useDispatch } from "react-redux";
import { getSearch } from "../../redux/slices/filterSlice";
import { Link,useLocation } from "react-router-dom";

export const Search = () => {
  const [value,setValue] = useState('')
  const dispatch = useDispatch()
  const locate = useLocation()


  const delayValue = useCallback(
    debounce(str=>{
      return dispatch(getSearch(str))
    },1000),[]
  )

  const onChangeValue = e => {
    setValue(e.target.value)
    delayValue(e.target.value)
  }
  return (
    <div className="blcok">
      <Link to='/'>
        <img src="images/logo.png" alt="" />
      </Link>
      {
        locate.pathname === '/' &&(
        <div className="search">
          <input type="text" placeholder="What are you looking for?"  value={value} onChange={onChangeValue} />
        </div>
        )
      }
    </div>
  );
};
