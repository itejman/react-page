import React from 'react'
import styles from './ListWrapper.module.scss';
import ListItem from './ListItem/ListItem';
import { reactBook } from '../../data/reactBook';

const ListWrapper = () => (
    <ul className={styles.ListWrapper__wrapper}>
        {reactBook.map(item => (
            <ListItem key={item.id} {...item} />
        ))}
    </ul>
);

export default ListWrapper; 