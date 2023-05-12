import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsCart, BsHeart, BsStar, BsStarFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import { useAPI } from "../../../Context/ContextProvider";

const ProductDetails = () => {
  const alert = useAlert();
  const { changes,setChanges } = useAPI();
  const { productId } = useParams();
  const [cart, setCart] = React.useState();
  const [cartCount, setCartCount] = React.useState(1);
  const [price, setPrice] = React.useState();
  const [wishList, setWishList] = React.useState();
  const [cartData, setCartData] = React.useState([]);

  useEffect(() => {
    setPrice(cart?.price * cartCount);
  }, [cart?.price, cartCount]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_PATH}/addToCart/${productId}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [productId]);

  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    setWishList(JSON.parse(localStorage.getItem("wishList")) || []);
  }, []);

  const addLocalStorage = (id) => {
    setChanges(!changes);
    const findProduct = cartData?.find((item) => item?.id === id);
    console.log(findProduct);
    if (findProduct) {
      const filteredProduct = cartData?.filter(
        (item) => item?.id !== findProduct?.id
      );
      localStorage?.setItem(
        "cart",
        JSON.stringify([
          ...filteredProduct,
          {
            productId: productId,
            id: id,
            productImage: `${cart.productImage}`,
            name: `${cart.name}`,
            price: price,
            quantity: findProduct?.quantity + cartCount,
          },
        ])
      );
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...cartData,
          {
            productId: productId,
            id: id,
            productImage: `${cart.productImage}`,
            name: `${cart.name}`,
            price: price,
            quantity: cartCount,
          },
        ])
      );
    }
    alert.success("Product Added to Cart");
  };

  const addWishList = (id) => {
    setChanges(!changes);
    const findProduct = wishList?.find((item) => item?.id === id);
    if (findProduct) {
      const filteredProduct = wishList?.filter(
        (item) => item?.id !== findProduct?.id
      );
      localStorage?.setItem(
        "wishList",
        JSON.stringify([
          ...filteredProduct,
          {
            productId: productId,
            id: id,
            productImage: `${cart.productImage}`,
            name: `${cart.name}`,
            price: price,
            quantity: findProduct?.quantity + cartCount,
          },
        ])
      );
    } else {
      localStorage.setItem(
        "wishList",
        JSON.stringify([
          ...wishList,
          {
            productId: productId,
            id: id,
            productImage: `${cart.productImage}`,
            name: `${cart.name}`,
            price: price,
            quantity: cartCount,
          },
        ])
      );
    }
    alert.success("Product Added to Wish List");
  };

  return (
    <div className="min-h-screen">
      {productId ? (
        <div className="container mx-auto border shadow-lg lg:my-10 md:my-10 lg:py-20 py-2">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="lg:w-1/2 w-full">
              <img
                src={cart?.productImage}
                alt="product"
                className="w-full mx-auto"
              />
            </div>
            <div className="lg:w-4/5 w-full lg:text-left text-center">
              <h3 className="font-bold lg:text-3xl text-xl">{cart?.name}</h3>
              <h3 className="font-semibold text-lg mb-3 text-gray-500">
                {cart?.category}
              </h3>
              <h3 className="font-bold text-2xl mb-1">
                Price:
                <span className="text-[#2563eb]">${price || cart?.price}</span>
              </h3>
              <h3 className="font-bold lg:text-base text-xs text-gray-500 flex items-center gap-x-2 lg:justify-start md:justify-start justify-center">
                <Rating
                  readonly
                  className="text-[16px]"
                  emptySymbol={<BsStar className="mx-0.5 text-gray-400" />}
                  fullSymbol={<BsStarFill className="mx-0.5 text-[#FFB627]" />}
                  initialRating={cart?.rating}
                />
                (125 Customeer Review)
              </h3>
              <p className="mt-5 text-gray-600 tracking-wider lg:block hidden">
                <span className="font-bold text-[#2563eb]">{cart?.name} </span>
                allows you to fully express your vibrant personality with three
                grayscale options. Feeling adventurous? Put on a heather gray
                tee. Want to be a trendsetter? Try our exclusive colorway.
                "Black". Need to add an extra pop of color to your outfit? Our
                white tee has you covered.
              </p>
              <p className="text-md font-bold lg:mb-10 mb-2 lg:mt-4 mt-1">
                SKU: <span className="text-[#2563eb]">{cart?.SKU}</span>
              </p>
              <h3 className="font-bold text-xl mb-8">
                Quantity:
                {/* Quantity Plus Button */}
                <button
                  onClick={() =>
                    cartCount > 1
                      ? setCartCount(cartCount - 1)
                      : setCartCount(1)
                  }
                  className="text-white text-sm ml-1 px-5 py-2 bg-[#2563eb] border border-[#2563eb]"
                >
                  <FaMinus />
                </button>
                {/* Cart State */}
                <span className="text-md px-5 border border-[#2563eb] pb-[2px]">
                  {cartCount}
                </span>
                {/* Quantity Plus Button */}
                <button
                  onClick={() => setCartCount(cartCount + 1)}
                  className="text-white text-sm px-5 py-2 bg-[#2563eb] border border-[#2563eb]"
                >
                  <FaPlus />
                </button>
              </h3>
              <div className="lg:flex md:flex block items-center gap-x-4 w-full mx-auto">
                <button
                  onClick={() => addLocalStorage(cart?._id)}
                  className="bg-[#2563eb] border border-[#2563eb] text-white hover:text-[#2563eb] px-3 py-2 text-md rounded-md hover:bg-transparent hover:[#2563eb] duration-300 flex items-center gap-x-2 lg:mx-0 md:mx-0 mx-auto my-2"
                >
                  Add To Cart
                  <BsCart />
                </button>
                <button
                  onClick={() => addWishList(cart?._id)}
                  className="bg-gray-500 border border-gray-500 text-white hover:text-gray-600 px-3 py-2 text-md rounded-md hover:bg-transparent hover:[#2563eb] duration-300 flex items-center gap-x-2 lg:mx-0 md:mx-0 mx-auto  my-2"
                >
                  Add To Wishlist
                  <BsHeart />
                </button>
                <button className="bg-[#2563eb] border border-[#2563eb] text-white px-3 py-2 text-md rounded-md hover:bg-transparent hover:text-[#2563eb] duration-300 flex items-center gap-x-2 lg:mx-0 md:mx-0 mx-auto my-2">
                  <Link to="/cart">Place Order</Link>
                  <MdPayment />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default ProductDetails;
