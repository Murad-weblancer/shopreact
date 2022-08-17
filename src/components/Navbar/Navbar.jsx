import React from "react";
import { useSelector } from "react-redux";
import { Search } from "../Search/Search";
import { Link } from "react-router-dom";
import "./Navabr.scss";
export const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  const itemsCount = items.reduce((sum, obj) => sum + obj.count, 0);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-menu">
            <li>(907) 555-0101</li>
            {/* <li>Sing in</li> */}
            <li>
              <Link to='/cart'>
              Cart
              {
                itemsCount ? <span style={{marginLeft:'10px'}}>{itemsCount}</span> : null
              }
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Search />
      </div>
    </>
  );
};
