import React from 'react';
import PropTypes from 'prop-types';

function GalleryImage({ imageUrl, title, description }) {
  return (
    <article>
      {title}
      {description}
      <img alt="cute animal" url={imageUrl} />
    </article>
  );
}

GalleryImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default GalleryImage;
