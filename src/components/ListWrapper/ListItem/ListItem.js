import React from 'react';
import styles from "./ListItem.module.scss";

const ListItem = (props) => (
    <li className={styles.listItem__container}>
        <img src={props.image} alt={props.title}></img>
        <ol className={styles.listItem__data}>
            <li className={styles.listItem__dataBookTitle}>{props.title}</li>
            <li className={styles.listItem__dataBookPrice}>{props.prices}</li>
            <li className={styles.listItem__dataBookIsbn}>{props.isbn}</li>
            <li className={styles.listItem__dataBookDescription}>{props.description}</li>
            <li className={styles.listItem__dataBookLink}><a href={props.link} target="blank">Buy now</a></li>
        </ol>
    </li>
);

export default ListItem;