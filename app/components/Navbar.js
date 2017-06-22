import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <div>
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu" data-dropdown-menu>
                    <li className="menu-text">React Weather App</li>
                    <li>
                        <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get weather</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/address" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Address</NavLink>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li><input type="search" placeholder="Search weather"/></li>
                    <li><button type="button" className="button">Search</button></li>
                </ul>
            </div>
        </div>
    </div>

);

export default Navbar

// 1. Navlink ispolzuetsya vmesto prosto Link, tak kak Navlink mojet imet props v RR4
// 2. v slu4ae s Get weather ispolzuem exact, tak kak bez nego GW vsegda budet bold iz-za togo,4to ego path / vsegda sovpadaet s drugimi,
//i emu vsegda doblyaetsya class active
