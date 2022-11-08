import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import ButtonLove from "../buttons/ButtonLove";
import Image from "../Image";

const GalleryScroll = (props) => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.ui.isLogged);

  const gallery = props.data.map((product) => {
    const addToCartAction = (event) => {
      event.preventDefault();
      isLogged
        ? dispatch(
            cartActions.addToCart({
              name: product.name,
              id: product.id,
              variant: product.variant,
              quantity: 1,
            })
          )
        : dispatch(uiActions.setShowModal());
    };

    return (
      <Link to={`/product/${product.id}`} key={product.id}>
        <Image id={product.id} type="main" />
        <h2>{product.name}</h2>
        <ButtonLove id={product.id}>like</ButtonLove>
        <button onClick={addToCartAction}>to cart</button>
        <p>by {product.author}</p>
        <p>${product.variant.price}</p>
      </Link>
    );
  });

  return <>{gallery}</>;
};

export default GalleryScroll;
