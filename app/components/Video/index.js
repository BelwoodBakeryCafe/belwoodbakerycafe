/**
 *
 * Video.react.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React, { PropTypes } from 'react';

function Video(props) {
  return (
    <div className="youtubePlayer">
      <iframe className={props.className} src={props.src} alt={props.alt} frameBorder={props.frame} allowFullScreen width={props.width}>
      </iframe>
    </div>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Video.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  frame: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default Video;
