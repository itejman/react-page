import React from 'react';
import styles from "./ListItem.module.scss";
import PropTyes from 'prop-types';

const ListItem = ({title, image, prices, isbn, description, link}) => (
    <li className={styles.listItem__container}>
        <img src={image} alt={title} className={styles.listItem__photo}></img>
        <ol className={styles.listItem__data}>
            <li className={styles.listItem__dataBookTitle}>{title}</li>
            <li className={styles.listItem__dataBookPrice}>{prices}</li>
            <li className={styles.listItem__dataBookIsbn}>{isbn}</li>
            <li className={styles.listItem__dataBookDescription}>{description}</li>
            <li className={styles.listItem__dataBookLink}><a href={link} target="blank">Buy now</a></li>
        </ol>
    </li>
);

ListItem.proptyes = {
    id: PropTyes.number.isRequired,
    title: PropTyes.string.isRequired,
    image: PropTyes.string,
    prices: PropTyes.string.isRequired,
    isbn: PropTyes.string.isRequired,
    description: PropTyes.string,
    link: PropTyes.string.isRequired,
}

ListItem.defaultProps = {
    image: 'http://i.imgur.com/J5LVHEL.jpg',
    description: 'Lorem ipsum dolor malesuada mauris nec ultrices. Ut condimentum tellus sed convallis faucibus. Nulla vehicula dolor in ex hendrerit gravida.'
}


export default ListItem;