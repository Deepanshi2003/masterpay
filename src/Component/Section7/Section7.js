import React from 'react'
import Advantage from './Advantage'

const Section7 = () => {
  return (
    <div>
        <div className="section-7">
        <div className="sec7title" data-aos="fade-up"             data-aos-once="true"
        >
          <h1>Advantage of Making MasterPay - Your Digital Dost</h1>
        </div>
        <div className="sec7-content ">
          <div className="row">
            <div className="col-md-3" data-aos="fade-up" data-aos-once="true">
              <img src="\Images\section-7\distributor-img.png" alt="" />
              <div className="titleimg"></div>
            </div>
            <div className="col-md-9  col-lg-8 col-sm-12 col-12">
              <div className="row">
                <Advantage
                  image="\Images\section-7\investment_9300258.png"
                  text="Operate from anywhere at your comfort, by setting up Digital distribution business with MasterPay"
                />
                <Advantage
                  image="\Images\section-7\investment_9300258.png"
                  text="Offer Multiple Services on a single Platform"
                />
                <Advantage
                  image="\Images\section-7\investment_9300258.png"
                  text="Earn Commission on every transaction executed by your Retailer"
                />
              </div>
              <div className="row">
                <Advantage
                  image="\Images\section-7\investment_9300258.png"
                  text="Benefits of increased income by connecting to multiple Retailers in your area"
                />
                <Advantage
                  image="\Images\section-7\investment_9300258.png"
                  text="Easy access to your Relationship Managers at all times"
                />
                <Advantage
                  image="\Images\section-7\investment_9300258.png"
                  text="Earn Lifetime Income by setting up your Retailer network in your locality"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sec8-content ">
          <div className="row">
            <div className="col-md-3" data-aos="fade-up" data-aos-once="true">
              <img src="\Images\section-7\retailer-img.png" alt="" />
              <div className="titleimg"></div>
            </div>
            <div className="col-md-9 col-lg-8 col-sm-4 col-12">
              <div className="row">
                <Advantage
                  image="\Images\section-7\investment_9300258.png"
                  text="Operate from anywhere at your comfort, by setting up Digital distribution business with MasterPay"
                />
                <Advantage
                  image="\Images\section-7\investment_9300258.png"
                  text="Offer Multiple Services on a single Platform"
                />
                <Advantage
                  image="\Images\section-7\investment_9300258.png"
                  text="Earn Commission on every transaction executed by your Retailer"
                />
              </div>
              <div className="row">
                <Advantage
                  image="\Images\section-7\investment_9300258.png"
                  text="Benefits of increased income by connecting to multiple Retailers in your area"
                />
                <Advantage
                  image="\Images\section-7\investment_9300258.png"
                  text="Easy access to your Relationship Managers at all times"
                />
                <Advantage
                  image="\Images\section-7\investment_9300258.png"
                  text="Earn Lifetime Income by setting up your Retailer network in your locality"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7