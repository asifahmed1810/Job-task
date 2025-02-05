import React from 'react';
import { FaUser, FaBox, FaPlus, FaTrash, FaBars } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (

        <div className="flex min-h-screen ">
        {/* Sidebar */}
        <div className="w-64 bg-base-100 shadow-lg p-4 fixed h-full">
           
            <ul className="menu space-y-2">
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

        {/* Main Content */}
        <div className="flex-1 ml-64 p-6">
            <button className="btn btn-ghost lg:hidden">
                <FaBars className="text-2xl" />
            </button>
            <Outlet></Outlet>
        </div>
    </div>

    );
};

export default Navbar;
