import React from 'react'

import PropTypes from 'prop-types'

import './section-three.css'

const SectionThree = (props) => {
  return (
    <div className="section-three-section-three section-container">
      <div className="section-three-max-width max-content-container">
        <div className="section-three-content-container">
          <h1 className="section-three-text heading2">
            <span>
              The best content, handpicked for you.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="section-three-text2">In the morning.</span>
          </h1>
          <span className="section-three-text3 content-Light">
            <span>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. Velit
              officia consequat duis enim velit mollit.
            </span>
            <br></br>
            <span>Lorem ipsum dolor sit amet.</span>
          </span>
        </div>
        <div className="section-three-image-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="section-three-image"
          />
        </div>
      </div>
    </div>
  )
}

SectionThree.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/section-image2-1200w.png',
}

SectionThree.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default SectionThree
