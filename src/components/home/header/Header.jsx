import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkIcon from "@mui/icons-material/Work";
import GridViewIcon from "@mui/icons-material/GridView";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 200);
  });
  return (
    <header className="header">
      <div className="container flex">
        <div className="logo">
          <Link to="/">
            <img src="./assets/StudyWithUs2.png" alt="logo" />
          </Link>
        </div>
        <div className="nav">
          <ul
            className={sidebar ? "nav-links-sidebar" : "nav-links"}
            onClick={() => setSidebar(false)}
          >
            <li>
              <Link to="/board">
                <h4>자유게시판</h4>
              </Link>
            </li>
            <li>
              <Avatar sx={{ width: 35, height: 35 }} />
            </li>
            {/* <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li> */}
            {/* <li className="icon">
              <SearchOutlinedIcon className="HeaderIcon" />
              <WorkIcon className="HeaderIcon" />
              <GridViewIcon className="HeaderIcon" />
            </li> */}
          </ul>
        </div>
        <button
          className="navbar-items-icon"
          onClick={() => setSidebar(!sidebar)}
        >
          {sidebar ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};
