import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa"
import { assets } from '../../assets/assets'
import { motion, AnimatePresence } from "framer-motion";
import { ShopContext } from '../../Context/ShopContext';
import './Navbar.css'



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { getCartItemsCount } = useContext(ShopContext);

    return (
        <>
<div className="h-[30px] bg-gray-500 overflow-hidden relative">
    <div className='animate-scrollLoop text-sm text-white whitespace-nowrap'>
        <span className="px-4">Free Shipping on all orders over $100 🚚</span>
        <span className="px-4">Free Shipping on all orders over $100 🚚</span>
        <span className="px-4">Free Shipping on all orders over $100 🚚</span>
        <span className="px-4">Free Shipping on all orders over $100 🚚</span>
    </div>
               
            </div>
            <nav className="flex items-center justify-between px-6 py-4 shadow-md  bg-gray-100 text-gray-800 sticky top-0 z-50">

                {/* Logo */}
                <Link to={'/'}>
                    <div className="flex items-center gap-2">
                        <img src={assets.logo} alt="logo" className="w-[100px] " />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-gray-800 text-base font-semibold capitalize">
                    {[
                        { path: "/", label: "Home" },
                        { path: "/women", label: "Women" },
                        { path: "/men", label: "Men" },
                        { path: "/collections", label: "Collections" },
                        { path: "/bulk", label: "Bulk" },
                        { path: "/about", label: "About" },
                        { path: "/track-order", label: "Track Order" },
                        { path: "/contact", label: "Contact" },
                    ].map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex flex-col items-center transition-all duration-300 ${isActive ? "text-pink-600" : "text-gray-800 hover:text-gray-700"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <li>{item.label}</li>
                                    <hr
                                        className={`border-none outline-none h-0.5 bg-pink-600 transition-all duration-500 ${isActive ? "w-3/5 opacity-100" : "w-0 opacity-0"}`}
                                    />
                                </>
                            )}
                        </NavLink>
                    ))}
                </ul>


                {/* Icons */}
                <div className="flex items-center gap-4 text-gray-800 text-lg">
                    <Link>
                        <FaSearch className="hover:text-gray-600 cursor-pointer" />
                    </Link>

                    {/* Cart with badge */}
                    <Link to="/cart" className="relative">
                        <FaShoppingCart className="hover:text-gray-600 cursor-pointer" />
                        {getCartItemsCount() > 0 && (
                            <span className="absolute -top-2 -right-3  bg-violet-800 text-white text-xs  rounded-full w-5 h-5 flex items-center justify-center  font-medium shadow-md ">
                                {getCartItemsCount()}
                            </span>
                        )}
                    </Link>

                    <Link to="/login">
                        <FaUser className="hover:text-gray-600 cursor-pointer" />
                    </Link>

                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>


                {/* Mobile Menu */}
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute top-16 left-0 w-full bg-[#eb1c77]  shadow-lg md:hidden"
                    >
                        <ul className="flex flex-col items-center gap-5 py-6 text-white text-base capitalize font-medium">

                            {[
                                { path: "/", label: "Home" },
                                { path: "/women", label: "Women" },
                                { path: "/men", label: "Men" },
                                { path: "/collections", label: "Collections" },
                                { path: "/about", label: "About" },
                                { path: "/bulk", label: "Bulk" },
                                { path: "/track-order", label: "Track Order" },
                                { path: "/contact", label: "Contact" },
                            ].map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex flex-col items-center transition-all duration-300"

                                >

                                    {({ isActive }) => (
                                        <>
                                            <li>{item.label}</li>
                                            <hr
                                                className={`border-none outline-none h-0.5 bg-white transition-all duration-500 ${isActive ? "w-3/5 opacity-100" : "w-0 opacity-0"}`}
                                            />
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </nav>
        </>
    )
}

export default Navbar
