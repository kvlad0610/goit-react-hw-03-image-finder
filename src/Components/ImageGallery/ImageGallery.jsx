import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';

export default function ImageGallery({ gallery, imgModal }) {
  ImageGallery.propTypes = {
    gallery: propTypes.array,
    imgModal: propTypes.func.isRequired,
  };

  return (
    <ul className="ImageGallery">
      {gallery &&
        gallery.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClickImg={imgModal}
          />
        ))}
    </ul>
  );
}
