import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss'; 

const NavBar = () => (
    <nav>
        <ul className={styles.navWrapper}>
            <li className={styles.navItem}>
                <NavLink exact to="/" activeClassName={styles.navItemLinkActive} className={styles.navItemLink}>Main Page</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to="/articles" activeClassName={styles.navItemLinkActive} className={styles.navItemLink}>Articles</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to="/books" activeClassName={styles.navItemLinkActive} className={styles.navItemLink}>Books</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to="/videos" activeClassName={styles.navItemLinkActive} className={styles.navItemLink}>Videos</NavLink>
            </li>
            <li className={styles.navItem}>
                <button className={styles.navItemAdd}>Add new</button>
            </li>
        </ul>
    </nav>
);

export default NavBar;