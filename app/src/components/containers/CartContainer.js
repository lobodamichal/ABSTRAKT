import { useSelector } from "react-redux";
import GalleryCart from "../ui/galleries/GalleryCart";

const CartContainer = () => {
  const cart = useSelector((state) => state.cart);
  const empty = cart.length === 0;
  const total = cart.reduce(
    (prevVal, nextVal) => prevVal + nextVal.variant.price * nextVal.quantity,
    0
  );

  return (
    <section>
      <p>
        {!empty
          ? `${cart.reduce(
              (prevVal, nextVal) => prevVal + nextVal.quantity,
              0
            )} items in your shopping bag`
          : "there are no items in your shopping bag"}
      </p>
      <GalleryCart data={cart} />
      {!empty && <p>total: {total}</p>}
      <button>check out</button>
      <button>continue shopping</button>
    </section>
  );
};

export default CartContainer;
