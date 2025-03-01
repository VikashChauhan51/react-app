
import { useState, useEffect } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <NavigationMenu.Root>
        <NavigationMenu.List className="navbar">
          {/* Left: Logo (always visible) */}
          <div className="navbar-left">
            <div className="logo">
              <Link to="/">Logo</Link>
            </div>
          </div>

          {/* Desktop Menu (Center & Right) */}
          <div className="desktop-menu">
            <div className="navbar-center">
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link to="/about">About</Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link to="/events">Events</Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link to="/annual">Annual Report</Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link to="/team">Teams</Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link to="/blogs">Blogs</Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link to="/sign-up">Sign Up</Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </div>
            <div className="navbar-right">
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link to="/signin" className="signin-btn">
                    Sign In
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </div>
          </div>

          {/* Mobile: Hamburger Toggle */}
          <div className="mobile-only">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="hamburger-btn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      {/* Mobile Side Menu: Render only if mobile and mobileMenuOpen is true */}
      {isMobile && mobileMenuOpen && (
        <div className="mobile-side-menu">
          <div className="mobile-side-menu-header">
            <div className="logo">
              <Link to="/" onClick={toggleMobileMenu}>
                Logo
              </Link>
            </div>
            <button
              onClick={toggleMobileMenu}
              aria-label="Close menu"
              className="close-btn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <nav className="mobile-side-menu-links">
            <Link to="/about" onClick={toggleMobileMenu}>
              About
            </Link>
            <Link to="/events" onClick={toggleMobileMenu}>
              Events
            </Link>
            <Link to="/annual" onClick={toggleMobileMenu}>
              Annual Report
            </Link>
            <Link to="/team" onClick={toggleMobileMenu}>
              Teams
            </Link>
            <Link to="/blogs" onClick={toggleMobileMenu}>
              Blogs
            </Link>
            <Link to="/sign-up" onClick={toggleMobileMenu}>
              Sign Up
            </Link>
            <Link to="/signin" onClick={toggleMobileMenu}>
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
