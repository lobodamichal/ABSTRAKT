import GalleryScroll from "../ui/galleries/GalleryScroll";
import OptionSort from "../elements/OptionSort";
import { useSelector } from "react-redux";

const AllProductsContainer = () => {
  const productsData = useSelector((state) => state.allProducts.products);

  return (
    <section className="section">
      <div className="section__header section__header--products">
        <h1 className="txt--header txt--header--big">
          All products
        </h1>
        <OptionSort className="section__header__sort" />
      </div>

      <GalleryScroll data={productsData} />
    </section>
  );
};

export default AllProductsContainer;
