import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Slide from '../components/slide'
import MaxWidth from '../components/max-width'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>EzeBytes</title>
        <meta
          name="description"
          content="EzeBytes - we provide innovative, high-quality software solutions to start-ups, SMBs and large enterprises. Partnering with us will help you obtain a competitive advantage through quality custom development services."
        />
        <meta property="og:title" content="EzeBytes" />
        <meta
          property="og:description"
          content="EzeBytes - we provide innovative, high-quality software solutions to start-ups, SMBs and large enterprises. Partnering with us will help you obtain a competitive advantage through quality custom development services."
        />
      </Helmet>
      <Navbar></Navbar>
      <main className="home-main">
        <div className="section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text heading1">
                <span className="home-text01">EzeBytes</span>
                <span>
                  {' '}
                  - One Stop For All Digital Services a
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text03">
                  Business
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Needs</span>
              </h1>
              <div className="home-input-container">
                <button className="home-button button-primary button">
                  <span>
                    <span>Let&apos;</span>
                    <span>s Get Connected</span>
                  </span>
                </button>
              </div>
              <div className="home-features-container">
                <div className="home-feature">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text08">
                    Requirements are followed as documented
                  </span>
                </div>
                <div className="home-feature1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon02"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text09">
                    Provide security to clients investment
                  </span>
                </div>
                <div className="home-feature2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text10">
                    Guarantees high quality Product delievery
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/hero%20image-3000h.png"
                className="home-image"
              />
            </div>
          </div>
        </div>
        <div className="home-section-one section-container">
          <div className="home-max-width1 max-content-container">
            <h2 className="home-text11 heading2">
              <span>
                Our Team has Expertise in
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text13">Designing, Developing &amp;</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text15">Marketing</span>
              <span>
                {' '}
                effective business solutions that suits your business need
              </span>
            </h2>
          </div>
        </div>
        <div className="home-section-four section-container">
          <div data-type="slider" className="home-slider">
            <Slide></Slide>
            <Slide
              Role="DESIGN DIRECTOR"
              Author="Bill Smith"
              image_src="/playground_assets/vector%202-700w.png"
              Testimonial='“Stunning app! I use it everyday since I discovered it and love it every since. It really makes newsreading a pleasure. I enjoy all the customization options available, super highly recommended!"'
              Testimonial2="Super highly recommended!”"
              rootClassName="slide-root-class-name"
            ></Slide>
            <Slide
              Role="FREELANCE WRITER"
              Author="Julia Xang"
              image_src="/playground_assets/vector%202%20%5B2%5D-700w.png"
              Testimonial="“Feedbox is very easy to use and flexible! I especially like the pre-made templates that are accessible; they're extraordinary for monitoring a few feed sources and various RSS Feeds together.”"
              rootClassName="slide-root-class-name1"
            ></Slide>
          </div>
        </div>
        <div id="services" className="section-container">
          <MaxWidth></MaxWidth>
        </div>
        <div className="home-section-six section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-content-container1">
              <h1 className="home-text17 heading2">
                <span>Get your Quote Now.</span>
              </h1>
              <div className="home-input-container1">
                <button className="home-button1 button-primary button">
                  Let&apos;s Get Connected
                </button>
              </div>
              <div className="home-features-container1">
                <div className="home-feature3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text19">
                    Requirements are followed as documented
                  </span>
                </div>
                <div className="home-feature4">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text20">
                    Provide security to clients investment
                  </span>
                </div>
                <div className="home-feature5">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text21">
                    Guarantees high quality Product delievery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Home
