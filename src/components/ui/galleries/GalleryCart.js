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
        <div className="gallery--cart__item__image">
          <Image id={el.id} type="main" />
          <button
            className="txt txt--description txt--description--big button--remove gallery--cart__item__image__remove"
            onClick={onRemove}
          >
            x
          </button>
        </div>

        <div className="gallery--cart__item__details">
          <h2 className="txt txt--header txt--header--big">{el.name}</h2>

          <span className="txt txt--description txt--description--small gallery--cart__item__details__name">
            price:
          </span>
          <span className="txt txt--description txt--description--small txt--price gallery--cart__item__details__value">
            ${el.variant.price}
          </span>

          <span className="txt txt--description txt--description--small gallery--cart__item__details__name">
            size:
          </span>
          <span className="txt txt--description txt--description--small txt--price gallery--cart__item__details__value">
            {dimensions}
          </span>

          <OptionQuantity
            classNameContainer="gallery--cart__item__details__option"
            classNameName="gallery--cart__item__details__name"
            classNameButton="gallery--cart__item__details__value"
            type={"cart"}
            changeQuantity={getQuantity}
            index={index}
            initValue={el.quantity}
          />
        </div>
      </div>
    );
  });

  return <div className="gallery--cart">{gallery}</div>;
};

export default GalleryCart;
