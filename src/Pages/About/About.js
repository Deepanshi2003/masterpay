import React, { useEffect } from 'react'
import './About.css'
import Navbar from '../../Component/Navbar/Navbar'
import Contactsec from '../../Component/Contactsec'
import Footer from '../../Component/Footer'
// import { Chrono } from "react-chrono";
// import data from './Chronodata'

import Aos from 'aos'
const About = () => {
    useEffect(()=>{
        Aos.init()
    },[])

// const [count, setCount] = useState(0)

// useEffect(()=>{
//   const interval= setInterval(() => {
//         setCount(prev=>prev+1)
//    }, 1000);
//    return () => clearInterval(interval)
// },[])
// console.log(count)

  return (
    <div>
        <Navbar/>
        <section className='aboutpage'>
            <div className="aboutbanner" >
                <div className="bannertext" data-aos="fade-up" data-aos-once="true" >
                    <h1>Who We are</h1>
                    <h3>Leverage Possibilities And Opportunities</h3>
                </div>
            </div>
            <div className="about-content container">
                <div className="ab-heading" data-aos="fade-up" data-aos-once="true" >
                    <h1>About Us</h1>
                </div>
                <p data-aos="fade-up" data-aos-once="true">Champion Software Technologies Ltd. is a Fintech Company setup in 2013 by a team of Professionals having deep insight in Technology and Finance.</p>
                <p data-aos="fade-up" data-aos-once="true">We operate on B2B2C model, where we partner with retail stores who can offer Assisted Digital Financial Services like Aadhar Enabled Payments(Aadhar ATMs), Utility Bill Payments, Mobile & DTH Recharges, Insurance, Cash Management Services (EMI/Cash drops of Finance Companies, E-Commerce Companies, Hyper Local Delivery Companies, etc.), Payment services like Bharat QR, Indo-Nepal Money Remittances, Travel Bookings, etc. by using the one comprehensive MasterPay Platform. MasterPay – a brand of Champion Software Technologies Ltd. has over the years emerged as one of the most Favorite and User-friendly App. It is our continuous endeavor to provide an unmatched user experience, through our simple products and services that can be accessed anytime, anywhere.</p>
                <p data-aos="fade-up" data-aos-once="true">We, at MasterPay, aspire to empower every Retail Store in Tier I, II, III and Rural areas in India. We are a Window of Opportunity for the Retail stores, to leverage state-of-the-art technology and transform the MasterPay Retail outlets into Fintech Marts.</p>
                <p className='lastp' data-aos="fade-up" data-aos-once="true"><i>Let’s together “move ahead towards Atmanirbhar भारत through Digitalisation by ‘Being Digital’ now, now, now”</i></p>
            </div>
            <div className="about-purpose">
                <div className="row">
                    <div className="col-md-6 left-item" data-aos="fade-left"  data-aos-once="true">
                     <img src="\Images\aboutus\teamwork.png" alt="" />
                     <div className="ab-purpose-content">
                        <h3>Our Values</h3>
                        <p>Champion has always been a values-driven organization. These values continue to direct our growth, development and business. The five core Champion values that are the foundation of the way we do business are:</p>
                        <ul>
                            <li>Integrity</li>
                            <li>Pioneering
                            </li>
                            <li>Agility
                            </li>
                            <li>Excellence
                            </li>
                            <li>Unity</li>
                        </ul>
                     </div>
                    </div>
                    <div className="col-md-6 right-item" data-aos="fade-right" data-aos-once="true">
                     <img src="\Images\aboutus\target.png" alt="" />
                     <div className="ab-purpose-content">
                        <h3>Our Purpose</h3>
                        <p>Build and Develop the Largest Hyperlocal Fintech Network by empowering every Retail stores through state-of-the-art Technology.</p>
                     </div>
                    </div>
                </div>
            </div>
            {/* <div className="journey-img">
                <img src="\Images\aboutus\building-about.svg" alt="" />
            </div> */}
            {/* <div className="journey"> */}
                {/* <div className="journey-heading">
                <div className="servicetitle" data-aos="fade-up" data-aos-once="true">
              <span className="left-line">
                <i></i>
                <i></i>
              </span>
              <h2>OUR GROWTH STORY</h2>
              <span className="right-line">
                <i></i>
                <i></i>
              </span>
            </div>
                </div> */}
                {/* <div className="journey-title" data-aos="fade-up" data-aos-once="true">
                <h1>Our Journey</h1>
                <h4>MasterPay the Visionary Pioneers in IT Networking Across India.</h4>
                </div>

                <div className="chrono">
                    <Chrono mode="HORIZONTAL" 
                     cardWidth={650}
                     cardHeight={240}
                     disableToolbar={true}
                     slideShow
                     slideItemDuration={1500}
//   slideShowType="slide_in"
  cardPositionHorizontal="TOP"
  titlePosition="BOTTOM"
                     
                     contentDetailsHeight={240}
                     items={data}
                     />
                </div> */}
            {/* </div> */}
            <div className="score">
                <h1 data-aos="fade-up"             data-aos-once="true"
                >Our Score Card</h1>
                <div className="row d-flex">
                    <div className="col-sm-2 score-content"  data-aos="fade-up" data-aos-once="true">
                    <img src="\Images\aboutus\shop-store-svgrepo-com.svg" alt="" />
                    <h2>400000+</h2>
                    <h6>Retailers</h6>
                    </div>
                    <div className="col-sm-2 score-content"  data-aos="fade-up" data-aos-once="true">
                        <img src="\Images\aboutus\application_13493463.png" alt="" />
                        <h2>650000+</h2>
                        <h6>Daily Transactions</h6>
                    </div>
                    <div className="col-sm-2 score-content"  data-aos="fade-up" data-aos-once="true">
                        <img src="\Images\aboutus\award_1734682.png" alt="" />
                        <h2>99.9%</h2>
                        <h6>Success Rate</h6>
                    </div>
                    <div className="col-sm-2 score-content"  data-aos="fade-up" data-aos-once="true">
                        <img src="\Images\aboutus\people_15113982.png" alt="" />
                        <h2>22 CR.+</h2>
                        <h6>No. of Customers served</h6>
                    </div>
                    <div className="col-sm-2 score-content"  data-aos="fade-up" data-aos-once="true">
                        <img src="\Images\aboutus\india_2160162.png" alt="" />
                        <h2>28</h2>
                        <h6>States</h6>
                    </div>
                    <div className="col-sm-2 score-content"  data-aos="fade-up" data-aos-once="true">
                        <img src="\Images\aboutus\gate-india_2146413.png" alt="" />
                        <h2>8</h2>
                        <h6>Union Territories</h6>
                    </div>
                </div>
            </div>

        </section>
        <Contactsec/>
        <Footer/>
    </div>
  )
}

export default About