import { headerItems } from "../../../constants/headerItems";
import "./header.scss";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";

const Header = () => {
  let [bool, showSidebar] = useState(false);
  let sideBar = headerItems.map((el, inx) => (
    <li className="sidebar__list__item" key={inx}>
      <a href="#" className="sidebar__list__link">
        {el}
      </a>
    </li>
  ));
  return (
    <header>
      <div
        onClick={() => showSidebar(false)}
        className={bool ? "overlay" : ""}
      ></div>
      <div className={bool ? "sidebar showSidebar" : "sidebar"}>
        <h1 className="sidebar__close" onClick={() => showSidebar(false)}>
          x
        </h1>
        {sideBar}
      </div>
      <nav className="container">
        <div className="nav__left">
          <a href="../../index.html" className="nav__logo">
            LOGO
          </a>
        </div>
        <ul className="nav__left__list">
          {headerItems.map((el, inx) => (
            <li className="nav__list__item" key={inx}>
              <a href="#" className="nav__list__link">
                {el}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav__right">
          <GiHamburgerMenu
            className="nav__hamburger"
            onClick={() => showSidebar(true)}
          />
          <div className="nav__btns">
            <IoSearch className="search__icon" />
            <MdOutlineShoppingCart className="shopping__icon" />
            <CiUser className="user__icon" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
