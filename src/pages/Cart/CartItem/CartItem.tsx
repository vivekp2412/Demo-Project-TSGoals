import React from "react";
import { Product } from "src/Types";
import styles from "./cartitem.module.css";

/**
 * Component for displaying a cart item.
 *
 * @param {Product} props - The properties for the Product.
 * @returns {JSX.Element} - JSX element for the cart item.
 */
const CartItem = (props: Product) => {
  const { name, image, amount, quantity } = props;
  return (
    <div className={styles.Item}>
      <div className={styles.Item_left}>
        <div className={styles.Item_image}>
          <img src={image} className={styles.Item_image} />
        </div>
      </div>
      <div className={styles.Item_title}>{name}</div>

      <div className={styles.Item_right}>
        <div>
          Quantity: <span>{quantity}</span>
        </div>
        <div className={styles.Item_price}>$ {amount * quantity}</div>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
