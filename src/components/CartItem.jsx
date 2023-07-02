import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../redux/cartSlice";

const CartItem = ({ img, title, color, size, ram, amount, price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-5">
      <hr className="bg-black w-full my-3 h-[2px]" />
      <div className="grid  grid-cols-2 pr-5">
        <div className="flex">
          <img src={img} alt={title} className="w-[150px]" />
          <div className=" flex-col justify-center gap-5 hidden md:flex">
            <h1>{title}</h1>
            <p className="text-gray-400">
              Colour <span className="text-black">{color}</span>
            </p>
            <p className="text-gray-400">
              Storage <span className="text-black">{size}</span>
            </p>
            <p className="text-gray-400">
              Memory <span className="text-black">{ram}</span>
            </p>
          </div>
        </div>
        <div className="my-5 text-center relative">
          <div className="grid md:grid-cols-3 grid-cols-2  ">
            <div className="">
              <button onClick={() => dispatch(increase({ id }))}>
                <BsChevronUp />
              </button>
              <h1>{amount}</h1>
              <button
                onClick={() => {
                  if (amount === 1) {
                    dispatch(removeItem(id));
                    return;
                  }
                  dispatch(decrease({ id }));
                }}
              >
                <BsChevronDown />
              </button>
            </div>
            <div className="flex justify-center lg:ml-0 ml-10">
              <h1 className="my-6 text-[#169fe4] md:ml-[30px]">${price}</h1>
            </div>
            <div className="hidden md:block">
              <h1 className="my-6 text-[#169fe4] md:ml-[30px]">${price}</h1>
            </div>
            <button
              onClick={() => dispatch(removeItem(id))}
              className="absolute bottom-0 ml-[48px] mb-[-10px] right-0 text-sm  whitespace-nowrap px-4 py-1 underline"
            >
              Remove Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
