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
        <img src="https://lh3.googleusercontent.com/wlGzI91DWwCF2bwME-p9ykfe4kLN-CHZ6Iie0NCopWMBb8-ZgP47bgt5MyoEZerWzxpo40C_CZn-ujj-6z9TeH-W9WF0o5XYa1om6YAeydDwnk2nNBO4w8LMdFBXt55l74KnOrgm7D3H_EfJEcYfzxnA4cM4V7BIHDIvYua5ya_BVtYPcrgrWVugi368sJKnvjDs81Oi-jklk9qAs9q3OHe8nDLc70uMaOK1TE5QxEmMAPCmiqEsdwtE9BpHVa5Cza0I6U_0vfm-vU6XugqL7Js2965wPU5y1YIUjpPz_YfH9ZRcVMMzby5RCYdUWIjuzmIQ9mkKUsX5S4Fcj2UO9bJprirbq0bHGxwYJXlBmGUREw1Lhq06BNeKUEG0B6PwhXh08ebUrwnKpgkonm8u4etFNel16W4mtyMZTs9IPlis07o3Z13x2qasH8R2XGYwvF3zEEfmOWeQEzCq7PFObI3NFayvNvw_i77yvlUC9Xz84w_SDfIacaH2Hidy0lLtR3FE71IcOS-EZcA0IFKO9OtZuOK0zAIcy-dQYctyrlZ7H8TpQv3eTfkKqgdm0A1pAoQIeMBDVCbyuHGnVXMdHw0_zBsn0LASjWL0Fvcr-iYySG0WexCvge_Du3rIoxlTc36ZFsVnbpj420bwfNJ4wOMZGSMy424hN9JWEqq12FgfkHgpvWs4kVshLoPVZCjSejRxrwVlV-rXPCnzc9axJRuA39JXxM0YzWxK31iSSdTO1KazaKONrxy9TDQfNo2ZfbcdOuPzfJmF02YmTMIjBZCGho4851L1=w187-h64-no?authuser=0" alt="" />
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
