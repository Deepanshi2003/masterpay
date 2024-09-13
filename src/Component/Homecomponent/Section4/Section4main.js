import React from 'react'
import Section4 from './Section4'

const Section4main = () => {
  return (
    <div>
        <div className="section-4 ">
        <div className="row section4-content">
          <div
            className="col-md-3 svganimation"
            data-aos="fade-up"
            data-aos-delay="110"
            data-aos-once="true"
          >
            <Section4
              image="\Images\section-4\piggy-bank-money-svgrepo-com.svg"
              head="High Profit"
              text="Masterpay gives Opportunity to Earn Highest Profit in Industry"
            />
          </div>
          <div
            className="col-md-3 svganimation"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-once="true"
          >
            <Section4
              image="\Images\section-4\rocket-svgrepo-com.svg"
              text="Masterpay provides Super Fast Service with Highest Success Ratio
 "
              head="Super Fast"
            />
          </div>
          <div
            className="col-md-3 svganimation"
            data-aos="fade-up"
            data-aos-delay="190"
            data-aos-once="true"
          >
            <Section4
              image="\Images\section-4\mobile-phone-electronics-svgrepo-com.svg"
              text="Masterpay is Very Easy and Simple to Use with Smooth Interface "
              head="Simple UI"
            />
          </div>
          <div
            className="col-md-3 svganimation"
            data-aos="fade-up"
            data-aos-delay="210"
            data-aos-once="true"
          >
            <Section4
              image="\Images\section-4\handshake-svgrepo-com.svg"
              text="                Masterpay is 100% Trustable with Mutual Cooperation &
                Transperancy "
              head="Trusted"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4main