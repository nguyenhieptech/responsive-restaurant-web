import { useState, useContext } from 'react';
import { Link } from 'react-scroll';

import useScrollY from '../hooks/useScrollY';
import { ThemeContext } from '../contexts/ThemeContext';

// Scroll to an element on click in React js
// https://medium.com/how-to-react/scroll-to-an-element-on-click-in-react-js-8424e478bb9

interface NavBarItem {
  index: number;
  title: string;
  path: string;
  isActive: boolean;
}

function Header() {
  const windowScrollY = useScrollY();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const lightThemeIcon = 'bx bx-sun';
  const darkThemeIcon = 'bx bx-moon';

  // Manage mobile menu icon state (mobile view only)
  const [isMobileMenuIconActive, setIsMobileMenuIconActive] = useState(false);

  const [navBarData, setNavBarData] = useState([
    { index: 1, title: 'Home', path: 'home', isActive: true },
    { index: 2, title: 'About', path: 'about', isActive: false },
    { index: 3, title: 'Services', path: 'services', isActive: false },
    { index: 4, title: 'Menu', path: 'menu', isActive: false },
    { index: 5, title: 'App', path: 'app', isActive: false },
    { index: 6, title: 'Contact', path: 'contact', isActive: false },
  ]);

  function toggleMenu() {
    setIsMobileMenuIconActive(!isMobileMenuIconActive);
  }

  //  When an user clicks on a nav link:
  //    1. The link being clicked is going to be active. Others will not.
  //    2. (Mobile only) Hide nav menu when a link is being clicked.
  //  Set isActive of the clicked nav to be 'true', others will be 'false'.
  function handleClickOnNav(item: NavBarItem) {
    const newNavBarData = navBarData.map((navLink) => {
      return navLink.index !== item.index
        ? {
            ...navLink,
            isActive: false,
          }
        : {
            ...navLink,
            isActive: true,
          };
    });

    setNavBarData(newNavBarData);
    setIsMobileMenuIconActive(false);
  }

  return (
    <header
      className={windowScrollY >= 200 ? 'l-header scroll-header' : 'l-header'}
      id="header"
    >
      <nav className="nav container">
        <div>
          <Link to="home" className="nav__logo">
            Tasty Food
          </Link>
        </div>

        <div
          className={
            isMobileMenuIconActive ? 'nav__menu show-menu' : 'nav__menu'
          }
        >
          <ul className="nav__list">
            {navBarData.map((item) => {
              return (
                <li key={item.index} className="nav__item">
                  <Link
                    to={item.path}
                    spy={true}
                    className={
                      item.isActive ? 'nav__link active-link' : 'nav__link'
                    }
                    onClick={() => handleClickOnNav(item)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}

            <li>
              <i
                className={
                  theme === 'light'
                    ? `${lightThemeIcon} change-theme`
                    : `${darkThemeIcon} change-theme`
                }
                id="theme-button"
                onClick={toggleTheme}
              />
            </li>
          </ul>
        </div>

        {/* Mobile only */}
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu" onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
