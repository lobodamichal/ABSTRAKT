import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import OptionQuantity from "../../elements/OptionQuantity";
import Image from "../Image";

const GalleryCart = (props) => {
  const dispatch = useDispatch();

  const gallery = props.data.map((el, index) => {
    const dimensions = `${el.variant.dimensions[0]}" x ${el.variant.dimensions[1]}"`;

    const getQuantity = (val) => val;
    const onRemove = () => {
      dispatch(cartActions.removeFromCart(index));
    };

    return (
      <div className="gallery--cart__item" key={`${el.id}.${el.variant.id}`}>
        <Image id={el.id} type="main"  className="cart__item__image"/>
        <h2 className="txt txt--header txt--header--normal">{el.name}</h2>
        <span className="txt txt--description txt--description--small">
          size: {dimensions}
        </span>
        <OptionQuantity
          type={"cart"}
          changeQuantity={getQuantity}
          index={index}
          initValue={el.quantity}
        />
        <span className="txt txt--description txt--description--small">
          price:{" "}
          <span className="txt txt--description txt--description--small txt--price">
            ${el.variant.price}
          </span>
        </span>
        <button className="txt txt--description txt--description--normal button--underline" onClick={onRemove}>remove</button>
      </div>
    );
  });

  return <div className="gallery--cart">{gallery}</div>;
};

export default GalleryCart;
