import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { BiLogoRedux } from "react-icons/bi";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <>
      <div className="w-full px-4 ">
        <div className="max-w-[900px]  mx-auto  py-4 flex justify-between items-center">
          <h1 className="font-[400] text-2xl flex items-center gap-2">
            STORE REDUX <BiLogoRedux />
          </h1>
          <div className="flex items-center relative border-2 px-4 py-1 ">
            <BsFillCartFill size={15} />
            <h1 className="font-medium text-md ml-2">Cart</h1>
            <div className="rounded-full w-[25px] h-[25px] absolute top-[-10px] right-[-10px] bg-[#7BB8D7] text-center">
              <span className="  text-white "> {amount ? amount : 0}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
