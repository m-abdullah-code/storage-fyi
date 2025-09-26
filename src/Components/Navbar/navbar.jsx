import React, { useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import mainLogo from "../../assets/main-logo.svg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubMenu = (id) => {
        setOpenSubMenu(openSubMenu === id ? null : id);
    };

    const menuItem = [
        { id: "works", label: "How it Works" },
        { id: "agents", label: "Find Agents" },
        {
            id: "resources",
            label: "Resources",
            subMenu: [
                { id: "d1", label: "Demo 1" },
                { id: "d2", label: "Demo 2" }
            ],
        },
        { id: "contact", label: "Contact Us" },
    ];

    return (
        <nav className="bg-white">
            <div className="side-space">
                <div className="flex justify-between items-center py-5">
                    {/* Logo */}
                    <a href="#" className="mainLogo">
                        <img src={mainLogo} alt="img" />
                    </a>

                    {/* Desktop Menu */}
                    <ul className="nav-items hidden lg:flex items-center space-x-8 relative">
                        {menuItem.map((item) => (
                            <li key={item.id} className="relative group">
                                <button className="cursor-pointer flex items-center gap-1">
                                    {item.label}
                                    {item.subMenu && (
                                        <FaAngleDown className="text-sm transition-transform duration-200 group-hover:rotate-180" />
                                    )}
                                </button>

                                {/* Sub Menu */}
                                {item.subMenu && (
                                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-40">
                                        {item.subMenu.map((sub) => (
                                            <li key={sub.id}>
                                                <a
                                                    href={`#${sub.id}`}
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    {sub.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Nav Buttons */}
                    <div className="nav-btns hidden lg:flex items-center gap-5">
                        <button className="sign-out font-bold cursor-pointer transition-all">Signout</button>
                        <button className="join-now font-bold cursor-pointer transition-all">Join Now</button>
                    </div>

                    {/* Hamburger Icon */}
                    <button
                        className="lg:hidden text-2xl cursor-pointer"
                        onClick={toggleMenu}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="relative p-5">
                        {/* Close Button */}
                        <div className="absolute top-5 right-3">
                            <FaTimes
                                className="text-xl cursor-pointer"
                                onClick={toggleMenu}
                            />
                        </div>

                        {/* Menu Items */}
                        <ul className="space-y-4 mt-7">
                            {menuItem.map((item) => (
                                <li key={item.id}>
                                    <button
                                        className="w-full flex justify-between items-center font-medium"
                                        onClick={() =>
                                            item.subMenu ? toggleSubMenu(item.id) : null
                                        }
                                    >
                                        {item.label}
                                        {item.subMenu && (
                                            <FaAngleDown
                                                className={`ml-2 transition-transform ${openSubMenu === item.id ? "rotate-180" : ""
                                                    }`}
                                            />
                                        )}
                                    </button>

                                    {/* Sub Menu (Accordion) */}
                                    {item.subMenu && openSubMenu === item.id && (
                                        <ul className="pl-4 space-y-2">
                                            {item.subMenu.map((sub) => (
                                                <li key={sub.id}>
                                                    <a
                                                        href={`#${sub.id}`}
                                                        className="block text-gray-700 hover:text-black"
                                                    >
                                                        {sub.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Nav Buttons inside Mobile Menu */}
                        <div className="mt-6 flex flex-col gap-3">
                            <button className="sign-out font-bold cursor-pointer">
                                Signout
                            </button>
                            <button className="join-now font-bold cursor-pointer">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
