import React from 'react';
import PropTypes from 'prop-types';

function GalleryImage({ imageUrl, title, description }) {
  <article>
    {title}
    {description}
    <img url={imageUrl}/>
  </article>
}

export default GalleryImage;
