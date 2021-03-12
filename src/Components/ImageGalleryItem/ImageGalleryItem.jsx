export default function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        src={webformatURL}
        data-url={largeImageURL}
        alt=""
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
