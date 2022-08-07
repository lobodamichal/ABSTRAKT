import { useSelector } from "react-redux";
import GalleryScroll from "../ui/galleries/GalleryScroll";
import OptionElement from "../elements/OptionElement";

const AllProductsContainer = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);

  return (
    <div className="allProductsContainer">
      <OptionElement />
      <GalleryScroll elements={products} />
    </div>
  );
};

export default AllProductsContainer;
