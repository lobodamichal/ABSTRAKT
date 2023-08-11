import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import Error from "./Error";

const Image = (props) => {
  const [imageURL, setImageURL] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const firebaseStorage = getStorage();
  const imageRef = ref(
    firebaseStorage,
    `product_images/product${props.id}-${props.type}.png`
  );

  useEffect(() => {
    const fetchImage = async () => {
      setIsLoading(true);
      try {
        
        const response = await getDownloadURL(imageRef);

        setImageURL(response);
      } catch (e) {
        setError("Can't load image");
      }
      setIsLoading(false);
    };

    fetchImage();
  }, []);

  return (
    <div className={props.className}>
      {isLoading && <div>loading...</div>}
      {error && <Error>{error}</Error>}
      {!isLoading && !error && <img src={imageURL} alt={`${props.id}`}  className="image"/>}
    </div>
  );
};

export default Image;
