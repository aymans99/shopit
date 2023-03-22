import React from "react";
import logo from "../../images/shopit_logo.png";
import Search from "./Search";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userActions";

const Header = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logout successfull");
  };
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

        <div className="col-12 col-md-3 mt-4 mt-md-0 ml-0 text-center">
          <Link to="/">
            <span id="cart" className="ml-3">
              Cart
            </span>
            <span className="ml-1" id="cart_count">
              2
            </span>
          </Link>
          {user ? (
            <div className="ml-4 dropdown d-inline">
              <Link
                to="#!"
                className="btn dropdown-toggle text-white mr-5"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  />
                  <span>{user && user.name}</span>
                </figure>
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user && user.role === "admin" && (
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                )}
                <Link className="dropdown-item" to="/orders/me">
                  Orders
                </Link>
                <Link className="dropdown-item" to="/me">
                  Profile
                </Link>
                <Link
                  className="dropdown-item text-danger"
                  to="/"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <button
                className="btn ml-4"
                id="login_btn"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
