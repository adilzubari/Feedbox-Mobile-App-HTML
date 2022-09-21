import React from 'react'

import PropTypes from 'prop-types'

import './section-two.css'

const SectionTwo = (props) => {
  return (
    <div className="section-two-section-two section-container">
      <div className="section-two-max-width max-content-container">
        <div className="section-two-image-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="section-two-image"
          />
        </div>
        <div className="section-two-content-container">
          <h1 className="section-two-text heading2">
            <span>
              Your favorite articles at your fingertips.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="section-two-text2">Always.</span>
          </h1>
          <span className="section-two-text3 content-Light">
            <span>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. Velit
              officia consequat duis enim velit mollit.
            </span>
            <br></br>
            <span>Lorem ipsum dolor sit amet.</span>
          </span>
        </div>
      </div>
    </div>
  )
}

SectionTwo.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/section-image1-1200w.png',
}

SectionTwo.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default SectionTwo
