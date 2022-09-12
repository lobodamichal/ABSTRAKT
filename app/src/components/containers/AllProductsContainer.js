import { useSelector } from "react-redux";
import GalleryScroll from "../ui/galleries/GalleryScroll";
import OptionSort from "../elements/OptionSort";

const AllProductsContainer = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <div>
      <h1>All Products</h1>
      <OptionSort data={products}/>
      <GalleryScroll data={products} />
    </div>
  );
};

export default AllProductsContainer;
