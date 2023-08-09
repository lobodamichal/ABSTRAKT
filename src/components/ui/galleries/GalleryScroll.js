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
        <div className="gallery--products__item">
          <Image id={product.id} type="main" />
          <div className="gallery--products__item__buttons">
            <ButtonLove id={product.id} />
            <button
              onClick={addToCartAction}
              className="button button--icon button--icon--bag button--icon--bag--image"
            />
          </div>

          <h2 className="txt txt--header txt--header--normal">
            {product.name}
          </h2>
          <p className="txt txt--description txt--description--small">
            by {product.author}
          </p>
          <p className="txt txt--price txt--description txt--description--small">
            ${product.variant.price}
          </p>
        </div>
      </Link>
    );
  });

  return <div className="gallery--products">{gallery}</div>;
};

export default GalleryScroll;
