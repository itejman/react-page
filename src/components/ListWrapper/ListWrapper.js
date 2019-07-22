import React from 'react'
import styles from './ListWrapper.module.scss';
import ListItem from './ListItem/ListItem';
import { reactBook } from '../../data/reactBook';

const ListWrapper = () => (
    <ul className={styles.ListWrapper__wrapper}>
        {reactBook.map(item => (
            <ListItem 
                title={item.title}
                image={item.image}
                prices={item.prices}
                isbn={item.isbn}
                description={item.description}
                link={item.link}
            />
        ))}
    </ul>
);

export default ListWrapper;