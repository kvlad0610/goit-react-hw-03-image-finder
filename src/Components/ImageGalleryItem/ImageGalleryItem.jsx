import propTypes from 'prop-types';

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  onClickImg,
}) {
  ImageGalleryItem.propTypes = {
    webformatURL: propTypes.string,
    largeImageURL: propTypes.string,
    onClickImg: propTypes.func.isRequired,
  };

  function clickImg(e) {
    console.log(e.currentTarget.dataset.url);
    onClickImg(e.currentTarget.dataset.url);
  }
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        data-url={largeImageURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={clickImg}
      />
    </li>
  );
}
