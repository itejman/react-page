import React from 'react';
import styles from "./ListItem.module.scss";

const ListItem = ({title, image, prices, isbn, description, link}) => (
    <li className={styles.listItem__container}>
        <img src={image} alt={title}></img>
        <ol className={styles.listItem__data}>
            <li className={styles.listItem__dataBookTitle}>{title}</li>
            <li className={styles.listItem__dataBookPrice}>{prices}</li>
            <li className={styles.listItem__dataBookIsbn}>{isbn}</li>
            <li className={styles.listItem__dataBookDescription}>{description}</li>
            <li className={styles.listItem__dataBookLink}><a href={link} target="blank">Buy now</a></li>
        </ol>
    </li>
);

export default ListItem;