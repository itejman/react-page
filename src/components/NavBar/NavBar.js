import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => (
    <nav>
        <ul className={styles.navWrapper}>
            <li className={styles.navItem}>
                <NavLink to="/" className={styles.navItemLink}>Main Page</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to="/articles" className={styles.navItemLink}>Articles</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to="/books" className={styles.navItemLink}>Books</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to="/videos" className={styles.navItemLink}>Videos</NavLink>
            </li>
        </ul>
    </nav>
);

export default NavBar;