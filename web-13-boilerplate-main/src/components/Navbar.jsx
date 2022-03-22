import React from "react";
import {NavLink} from 'react-router-dom';
const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    //map through the link ad display it in header
    <div className="navbar">
<h1>Movies App</h1>

<div className="navlink">
<NavLink activeclassName="active" className="link" to="/">Home</NavLink>
<NavLink activeclassName="active" className="link" to="/about">About</NavLink>
<NavLink activeclassName="active" className="link" to="/Movies">Movies</NavLink>
<NavLink activeclassName="active" className="link" to="/MoviesDashboard">MoviesDashboard</NavLink>

</div>


    </div>
  );
};
