import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import firstVariant from "../../../helpers/firstVariant";
import ButtonLove from "../buttons/ButtonLove";
import Image from "../Image";

const GalleryScroll = (props) => {
  const dispatch = useDispatch();

  const gallery = props.data.map((el) => {
    const product = el;
    const variant = firstVariant(el.variants, "price");
    const price = variant.price;

    const addToCartAction = (event) => {
      event.preventDefault();
      dispatch(cartActions.addToCart({ ...product, variant, quantity: 1 }));
    };

    return (
      <Link to={`/product/${product.id}`} key={product.id}>
        <Image id={product.id} type='main' />
        <h2>{product.name}</h2>
        <ButtonLove id={product.id}>like</ButtonLove>
        <button onClick={addToCartAction}>to cart</button>
        <p>by {product.author}</p>
        <p>${price}</p>
      </Link>
    );
  });

  return <>{gallery}</>;
};

export default GalleryScroll;
