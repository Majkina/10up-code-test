import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserDetails } from "../../redux/Login/selectors";
import { logout } from "../../redux/Login/effects";

import "./header.css";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => getUserDetails(state));

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header
      className="site-header"
      role="banner"
      itemScope="itemscope"
      itemType="http://schema.org/WPHeader"
    >
      <h1
        className="site-title"
        itemScope
        itemType="http://schema.org/Organization"
      >
        10up Blog
      </h1>

      <nav
        className="site-navigation"
        role="navigation"
        itemScope="itemscope"
        itemType="http://schema.org/SiteNavigationElement"
      >
        <a
          href="#menu-main-nav"
          id="js-menu-toggle"
          className="site-menu-toggle"
        >
          <span className="screen-reader-text">Primary Menu</span>
          <span aria-hidden="true">☰</span>
        </a>

        <ul id="menu-main-nav" className="primary-menu">
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1912">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
            <Link to="/about">About</Link>
          </li>
          {!user.email ? (
            <li className="logged-out menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
              <Link to="login">Login</Link>
            </li>
          ) : (
            <li className="logged-in menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
              {/* Under normal circumstances I would replace the anchor tag with a button,
              however under the constraints of this exercise I won't change the html */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
