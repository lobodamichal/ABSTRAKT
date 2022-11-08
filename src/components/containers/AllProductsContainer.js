import GalleryScroll from "../ui/galleries/GalleryScroll";
import OptionSort from "../elements/OptionSort";
import { useSelector } from "react-redux";

const AllProductsContainer = () => {
  const productsData = useSelector((state) => state.allProducts.products);

  return (
    <section>
      <h1>All products</h1>
      <OptionSort />
      <GalleryScroll data={productsData} />
    </section>
  );
};

export default AllProductsContainer;
