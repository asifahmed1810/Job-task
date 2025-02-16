import React from "react";
import { FaUser, FaBox, FaPlus, FaTrash, FaBars } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-amber-500">
        <div className="md:sticky md:top-0">
          <ul className="menu p-4 md:py-8">
            <li>
              <NavLink to="/" className="flex items-center gap-2">
                <FaUser /> All Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="flex items-center gap-2">
                <FaBox /> All Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-product" className="flex items-center gap-2">
                <FaPlus /> Add Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/delete-product" className="flex items-center gap-2">
                <FaTrash /> Delete Products
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Navbar;
