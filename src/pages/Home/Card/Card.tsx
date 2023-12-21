import { Product } from "src/Types";
import style from "./card.module.css";
import { addToCart, removeFromCart } from "src/store/features/cart";
import Button from "src/Components/Button";
import { useAppDispatch, useAppSelector } from "src/store";
/**
 * Component representing a product card.
 *
 * @param {ProductType} props - The properties of the product.
 * @returns {JSX.Element} - JSX element for the other payment gateway.
 */
const ProductCard = (props: Product) => {
  const { name, amount, id, image } = props;
  const cart = useAppSelector((state) => state.cart.products);
  const product = cart.findIndex((product) => product.id === id);
  const dispatch = useAppDispatch();
  return (
    <div className={style.product_card}>
      <img className={style.product_card__image} src={image} />
      <p className={style.product_card__brand}>{name}</p>
      <p className={style.product_card__price}>${amount}</p>
      <div className={style.buttonContainer}>
        <Button
          onClick={() => {
            dispatch(
              addToCart({
                id,
                name,
                amount,
                quantity: 1,
                image,
              })
            );
          }}
        >
          +
        </Button>
        {cart[product]?.quantity ?? 0}
        <Button
          onClick={() => {
            dispatch(removeFromCart(id));
          }}
        >
          -
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
