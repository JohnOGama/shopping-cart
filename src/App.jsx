import CartItems from "./components/CartItems";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { calculate } from "./redux/cartSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(calculate());
  }, [cartItems]);
  return (
    <>
      <Navbar />
      <CartItems />
    </>
  );
}

export default App;
