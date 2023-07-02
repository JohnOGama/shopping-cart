import cartItems from "../cartItems";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const CartItems = () => {
  const dispatch = useDispatch();
  const { color, size, ram, title, price, cartItems, img, total } = useSelector(
    (store) => store.cart
  );
  // if (cartItems < 1) {
  //   return (
  //     <div>
  //       <h1>Your Cart is empty</h1>
  //     </div>
  //   );
  // }
  return (
    <>
      <div className="w-full">
        <div className="max-w-[900px] mx-auto">
          <h1 className="font-[500] text-3xl mt-0 pl-3 md:pl-0">
            Shopping Cart
          </h1>
          <hr className="bg-black w-full my-3 h-[2px]" />
          <header className="grid grid-cols-2 px-2">
            <h1 className="uppercase ">product details</h1>
            <div className="grid-cols-2 md:grid text-center grid md:grid-cols-3">
              <h1>Quantity</h1>
              <h1>Price</h1>
              <h1 className="hidden md:block">Total</h1>
            </div>
          </header>
          <div>
            {cartItems.map((item) => (
              <>
                <CartItem key={item.id} {...item} />
              </>
            ))}
          </div>
          <hr className="bg-black w-full my-3 h-[2px]" />
          <div className="flex justify-between px-4 md:px-0 md:pl-5 ">
            <h1 className="text-lg font-[600] md:text-3xl">Total</h1>
            <h1 className="mr-[30px] text-xl font-bold md:mr-[30px] md:text-lg2">
              ${total.toFixed(2)}
            </h1>
          </div>
          <div className="px-3 md:px-0">
            <button
              className="w-full border-2 border-black my-2 py-2"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div className=" md:bottom-[5%] md:right-[50%] md;translate-x-[50%] text-center my-10">
          <h1 className="text-sm ">
            {" "}
            © 2023 Made by{" "}
            <a
              href="https://www.facebook.com/CreatorVayne/"
              className="underline"
            >
              Ogama
            </a>{" "}
          </h1>
          <div className="flex justify-center gap-3 mt-4">
            <a href="https://www.linkedin.com/in/johnogama/">
              <BsLinkedin size={20} />
            </a>
            <a href="https://github.com/JohnOGama">
              <BsGithub size={20} />
            </a>
            <a href="https://www.tiktok.com/@xandeveloper">
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
