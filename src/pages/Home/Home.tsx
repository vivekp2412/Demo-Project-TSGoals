import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "src/Components/Button";
import CardContainer from "src/pages/Home/CardContainer/CardContainer";
import { useAppSelector } from "src/store";
import { calculateTotalQuantity } from "src/utils/cart";
import styles from "./home.module.css";
import Title from "./PageTitle/Title";
const Home = () => {
  const navigate = useNavigate();
  const handleCartButtonClick = useCallback(() => {
    navigate("/cart");
  }, []);
  const cart = useAppSelector((state) => state.cart.products);
  const cartQuantity = useMemo(() => calculateTotalQuantity(cart), [cart]);
  return (
    <div className={styles.homeContainer}>
      <Title />
      <CardContainer />
      <Button onClick={handleCartButtonClick}>Go to Cart {cartQuantity}</Button>
    </div>
  );
};
export default Home;
