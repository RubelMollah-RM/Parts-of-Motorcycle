import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'



const Headers = () => {
    window.scrollTo(0, 0);
    return (
        <div className="flex  justify-between navbar bg-gradient-to-br bg-gray-500 text-black z-10 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-11 p-2 shadow bg-gray-600 text-black top-0 rounded-box w-52">
                        <li><Link className='ml-4 text-white' to='/'>All Components</Link></li>
                        <li><Link className='ml-4 text-white' to='/orders'>Your Orders</Link></li>
                        <li><Link className='ml-4 text-white' to='/about'>About</Link></li>
                        <li><Link className='ml-4 text-white' to='/login'>Login</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl "> Parts-Of-<span className='text-red-600'>Motorcycle</span></Link>
            </div>
            <div className="navbar-center mr-10 hidden lg:flex">
                <div className="menu menu-horizontal px-1">
                    <NavLink className='ml-4 text-xl {({isActive}) => isActive ? " active":" undefined"}' to='/'>All Components</NavLink>
                    <NavLink className='ml-4 text-xl {({isActive}) => isActive ? " active":" undefined"}' to='/orders'>Your Orders</NavLink>
                    <NavLink className='ml-4 text-xl {({isActive}) => isActive ? " active":" undefined"}' to='/about'>About</NavLink>
                    <NavLink className='ml-4 text-xl {({isActive}) => isActive ? " active":" undefined"}' to='/login'>Login</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Headers;