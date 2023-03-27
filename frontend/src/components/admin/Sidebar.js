import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-wrapper">
        <nav id="sidebar">
          <ul className="list-unstyled components">
            <li>
              <Link href="#">
                <i className="fa fa-tachometer"></i> Dashboard
              </Link>
            </li>

            <li>
              <a
                href="#productSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fa fa-product-hunt"></i> Products
              </a>
              <ul className="collapse list-unstyled" id="productSubmenu">
                <li>
                  <a href="#">
                    <i className="fa fa-clipboard-list"></i> All
                  </a>
                </li>

                <li>
                  <Link href="#">
                    <i className="fa fa-plus"></i> Create
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="#">
                <i className="fa fa-shopping-basket"></i> Orders
              </Link>
            </li>

            <li>
              <Link href="#">
                <i className="fa fa-users"></i> Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
