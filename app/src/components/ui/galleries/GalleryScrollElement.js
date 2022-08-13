import ButtonImage from "../buttons/ButtonImage";

const GalleryScrollElement = (props) => {
  const el = props.el;
  const likeAction = (event) => {
    event.preventDefault();
    console.log(`id:${el.id} liked`);
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
