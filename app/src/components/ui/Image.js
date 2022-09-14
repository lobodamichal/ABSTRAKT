import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import Error from "./Error";

const Image = (props) => {
  const [imageURL, setImageURL] = useState();

  const firebaseStorage = getStorage();
  const imageRef = ref(firebaseStorage, `product_images/product${props.id}-${props.type}.png`);

  useEffect(() => {
    getDownloadURL(imageRef).then(url => setImageURL(url))
  }, []);

  return (
    <>
      <img src={imageURL} alt={`${props.id}`} />
    </>
  );
};

export default Image;
