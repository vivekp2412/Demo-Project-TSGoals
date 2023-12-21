import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "src/pages/Cart/CartPage";
import Home from "src/pages/Home/Home";
import Payment from "src/pages/Payment";
/**
 * Component to define the routing for the application.
 * Uses React Router's `BrowserRouter` and `Routes` to navigate between different pages.
 * It provides routes for the Home, Cart, Payment pages.
 *
 * @returns {JSX.Element} - JSX element for the application routes.
 */
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
