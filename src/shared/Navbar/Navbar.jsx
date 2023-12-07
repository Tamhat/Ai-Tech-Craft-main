import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/data";
import Logo from "../../assets/Logo/Logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import "./Navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleOutSideNav = (e) => {
      if (!navRef.current.contains(e.target)) {
        setIsNavShowing(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideNav);

    return () => {
      document.removeEventListener("mousedown", handleOutSideNav);
    };
  }, []);

  return (
    <nav>
      <div className="container nav__container">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="Logo" title="Logo" />
          </NavLink>
        </div>

        <ul className={`menu ${isNavShowing && "active"}`} ref={navRef}>
          {navLinks &&
            navLinks?.map(({ id, title, path }) => {
              return (
                <li className="menu__item" key={id}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => isActive ? "activeNav" : undefined}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
        </ul>

        <div
          className="mobile__menu"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <CgClose /> : <HiOutlineMenuAlt3 />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
