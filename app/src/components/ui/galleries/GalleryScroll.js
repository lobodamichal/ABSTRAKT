const GalleryScroll = (props) => {
    const output = props.elements.map(el => (
        <div className="gallery__element" key={el.id}>
            <div className="gallery__element__pic"></div>
            <h2 className="gallery__element__name">{el.name}</h2>
            <p className="gallery__element__price">{el.sizes.medium.price}</p>
        </div>
    ))
    return <div className="gallery">{output}</div>;
};

export default GalleryScroll;
