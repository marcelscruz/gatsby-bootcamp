import React from 'react'
import { Link } from 'gatsby'

// import 'components/header.module.scss'
import headerStyles from 'components/header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link
          className={headerStyles.title}
          activeClassName={headerStyles.activeNavItem}
          to="/"
        >
          Marcel Cruz
        </Link>
      </h1>
      <ul className={headerStyles.navList}>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
