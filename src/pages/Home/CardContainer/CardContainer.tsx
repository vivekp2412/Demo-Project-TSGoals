import { productInfo } from "src/Constant/data";
import ProductCard from "src/pages/Home/Card";
import styles from "./cardContainer.module.css";
const CardContainer = () => {
  const productCards = productInfo.map((product, index) => {
    return (
      <ProductCard
        key={index}
        id={product.id}
        name={product.name}
        amount={product.amount}
        image={product.image}
        quantity={product.quantity}
      />
    );
  });
  return <div className={styles.container}>{productCards}</div>;
};
export default CardContainer;
