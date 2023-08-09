import { useSelector } from "react-redux";
import useDetails from "../../hooks/use-details";
import GalleryCart from "../ui/galleries/GalleryCart";
import ButtonMain from "../ui/buttons/ButtonMain";

const CartContainer = () => {
  const { placeOrder } = useDetails();
  const cart = useSelector((state) => state.cart);
  const empty = cart.length === 0;
  const total = cart.reduce(
    (prevVal, nextVal) => prevVal + nextVal.variant.price * nextVal.quantity,
    0
  );
  const quantity = cart.reduce(
    (prevVal, nextVal) => prevVal + nextVal.quantity,
    0
  );

  const checkoutHandler = () => {
    placeOrder();
  };

  return (
    <section className="section layout--cart">
      <p className="txt txt--description txt--description--normal">
        {!empty
          ? quantity == 1
            ? `${quantity} item in your cart.`
            : `${quantity} items in your cart.`
          : "There are no items in your cart."}
      </p>
      <GalleryCart data={cart} />
      {!empty && (
        <span className="txt txt--description txt--description--normal">
          total:{" "}
          <span className="txt txt--description txt--description--normal txt--price">
            ${total}
          </span>
        </span>
      )}
      <ButtonMain onClickHandler={checkoutHandler}>check out</ButtonMain>
      <ButtonMain>continue shopping</ButtonMain>
    </section>
  );
};

export default CartContainer;
