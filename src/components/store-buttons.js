import React from 'react'

import PropTypes from 'prop-types'

import './store-buttons.css'

const StoreButtons = (props) => {
  return (
    <div className="store-buttons-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="store-buttons-image"
      />
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="store-buttons-image1"
      />
    </div>
  )
}

StoreButtons.defaultProps = {
  image_alt1: 'image',
  image_alt: 'image',
  image_src: '/playground_assets/frame-200h.png',
  image_src1: '/playground_assets/frame%2034-200h.png',
}

StoreButtons.propTypes = {
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
}

export default StoreButtons
