import ButtonImage from "../buttons/ButtonImage";
import { useDispatch } from "react-redux";
import { allProductsActions } from "../../../store/all-products-slice";

const GalleryScrollElement = (props) => {
  const dispatch = useDispatch();

  const el = props.el;
  const likeAction = (event) => {
    event.preventDefault();
    dispatch(allProductsActions.likeProduct(el.id))
  };

  return (
    <>
      <div></div>
      <h2>{el.name}</h2>
      <ButtonImage onClickHandler={likeAction}>like</ButtonImage>
      <p>by {el.author}</p>
      <p>{el.variant.medium.price}</p>
    </>
  );
};

export default GalleryScrollElement;
