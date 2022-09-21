import React from 'react'

import GridCard from './grid-card'
import './max-width.css'

const MaxWidth = (props) => {
  return (
    <div className="max-width-max-width max-content-container">
      <div className="max-width-heading-container">
        <h2 className="max-width-text heading2">
          <span>
            Grow Your Business with
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="max-width-text2">ezeBytes.</span>
        </h2>
        <span className="content-Light">
          <span>
            If your business getting ready to go online or facing difficulty,
            get in touch to us and get your quote now.
          </span>
        </span>
      </div>
      <div className="max-width-cards-container">
        <GridCard
          text="Digital Marketing"
          text1="Take your business online and generate more Lead."
          image_src="/playground_assets/digital-marketing-200w.png"
        ></GridCard>
        <GridCard
          text="Softwares"
          text1="Get your business automated with custom softwares designed for your business"
          image_src="/playground_assets/software-icon-200h.png"
        ></GridCard>
        <GridCard
          text="LiveChat Assistant"
          text1="Get a human chat assistant for your business to answer queries of your clients and also to generate lead"
          image_src="/playground_assets/live-chat-200h.png"
        ></GridCard>
        <GridCard
          text="Mobile &amp; Web"
          text1="Get website or mobile app for your business in Android, iOS or both."
          image_src="/playground_assets/web-mobile-200h.png"
        ></GridCard>
      </div>
    </div>
  )
}

export default MaxWidth
