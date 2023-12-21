import { useNavigate } from "react-router-dom";
import Button from "src/Components/Button";
import CartAmount from "src/pages/Cart/CartAmount";
import CartItem from "src/pages/Cart/CartItem";
import { useAppDispatch, useAppSelector } from "src/store";
import { resetCart } from "src/store/features/cart";
import styles from "./cartpage.module.css";
/**
 * component for displaying the shopping cart.
 *
 * @returns {JSX.Element} - JSX element for the shopping cart.
 */
const CartPage = () => {
  const navigate = useNavigate();
  //getting Cart Details from Store
  const cart = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();

  const handleBackButton = () => {
    navigate("/");
  };

  const handlePaymentButton = () => {
    navigate("/payment");
    dispatch(resetCart());
  };
  const cartItem = cart?.map((product) => (
    <CartItem
      id={product.id}
      amount={product.amount}
      image={product.image}
      name={product.name}
      quantity={product.quantity}
    />
  ));
  return (
    <>
      <div className={styles.container}>
        <h1>CART</h1>
        {cart?.length === 0 && <h3>Empty Cart</h3>}
        <ul className={styles.items}>{cartItem}</ul>
        {cart?.length > 0 && (
          <>
            <div className={styles.amount}>
              <CartAmount />
            </div>
            <div className={styles.buttonContainer}>
              <Button onClick={() => handleBackButton()}>
                Go Back to Home
              </Button>
              <Button onClick={() => handlePaymentButton()}>
                Proceed to Pay
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
