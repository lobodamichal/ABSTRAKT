import { Link } from "react-router-dom";
import GalleryScrollElement from "./GalleryScrollElement";

const GalleryScroll = (props) => {
  const output = props.data.map((el) => (
    <Link
      to={`/product/${el.id}`}
      key={el.id}
    ><GalleryScrollElement el={el} /></Link>
  ));

  return <>{output}</>;
};

export default GalleryScroll;
