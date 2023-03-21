import React from "react";
import logo from "../../images/shopit_logo.png";
import Search from "./Search";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          {/* <Routes>
            <Route render={({ history }) => <Search history={history} />} />
          </Routes> */}
          <Search />
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <button
            className="btn"
            id="login_btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <span id="cart" className="ml-3">
            Cart
          </span>
          <span className="ml-1" id="cart_count">
            2
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
