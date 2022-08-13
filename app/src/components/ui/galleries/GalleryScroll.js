import { Link } from "react-router-dom";
import ButtonImage from "../buttons/ButtonImage";

const GalleryScroll = (props) => {
  const output = props.data.map((el, index, array) => (
    <Link to={"/product"} className="gallery__element" key={el.id}>
      <div className="gallery__element__pic"></div>
      <ButtonImage type="heart" className="gallery__element__button" />
      <h2 className="gallery__element__name">{el.name}</h2>
      <p className="gallery__element__author">by {el.author}</p>
      <p className="gallery__element__price">{el.variant.medium.price}</p>
    </Link>
  ));
  return <div className="gallery">{output}</div>;
};

export default GalleryScroll;
