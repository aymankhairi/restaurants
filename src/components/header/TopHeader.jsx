import React, { useContext, useEffect, useRef, useState } from "react";
import Logo from "../../img/restlogo2.png";
import { Link } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import "../../css/header.css";
import SearchBox from "./SearchBox";
import { useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
const NavLinks = [
  { title: "", link: "/" },
  { title: "Home", link: "/" },
  { title: "Menu", link: "/menu" },
  { title: "Our Story", link: "/about" },
  { title: "Book", link: "/book" },
  { title: "Gallery", link: "/gallery" },
  { title: "Visit", link: "/contact" },
];
function TopHeader() {
  const menuRef = useRef();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  return (
    <div className="top_header">
      <div className="container">
        <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
          <img src={Logo} alt="" />
        </Link>
        <div className="header_icons">
          <div
            className="mobile_menu_btn"
            onClick={(e) => {
              {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }
            }}
          >
            <div className="icons">
              <FiMenu />
            </div>
          </div>
          {/* <div className="icons">
            <FiMenu />
          </div> */}
          {/* </Link> */}
          <div
            ref={menuRef}
            className={`nav_links mobile_nav ${menuOpen ? "active" : ""}`}
          >
            <ul>
              {NavLinks.map((item) => (
                <li
                  // className={location.pathname === item.link ? "active" : ""}
                  className={`nav_item ${location.pathname === item.link ? "active" : ""}`}
                >
                  <Link
                    to={item.link}
                    key={item.link}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      setMenuOpen(false);
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
