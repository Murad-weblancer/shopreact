import React from "react";
import "./Category.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCategory} from "../../redux/slices/filterSlice";

export const Category = () => {
  const { categoryId,phone,noutes } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const categoryList = ["All", "Phones", "Laptop", "Tech", "Tv"];



  return (
    <>
      <ul className="category">
        {categoryList.map((obj, i) => (
          <li
            key={i}
            className={categoryId === i ? "active" : ""}
            onClick={() => dispatch(getCategory(i))}
          >
            {obj}
          </li>
        ))}
      </ul>

    </>
  );
};
