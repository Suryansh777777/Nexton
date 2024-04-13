import React, { useEffect, useState } from "react";
import logo from "../assets/Icon.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setisSticky] = useState(false);

  //settoggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {
        setisSticky(true);
      } else {
        setisSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Services", path: "services" },
    { link: "About", path: "about" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav>
        <div>
          <a href="#home" src={logo}>
            Nexcent
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
