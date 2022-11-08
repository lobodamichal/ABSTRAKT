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
      <div key={`${el.id}.${el.variant.id}`}>
        <Image id={el.id} type='main' />
        <h2>{el.name}</h2>
        <p>size: {dimensions}</p>
        <OptionQuantity
          type={"cart"}
          changeQuantity={getQuantity}
          index={index}
          initValue={el.quantity}
        />
        <p>price: {el.variant.price}</p>
        <button onClick={onRemove}>remove</button>
      </div>
    );
  });

  return <div>{gallery}</div>;
};

export default GalleryCart;
