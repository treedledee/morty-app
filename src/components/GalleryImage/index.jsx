import React from 'react';
// import PropTypes from 'prop-types';

function GalleryImage({ imageUrl, title, description }) {
  return (
    <article>
      {title}
      {description}
      <img alt="cute animal" url={imageUrl} />
    </article>
  );
}

export default GalleryImage;
