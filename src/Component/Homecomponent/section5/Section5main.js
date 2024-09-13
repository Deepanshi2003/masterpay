import React from 'react'
import Section5 from './Section5'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'

const Section5main = () => {
    var settingssection5 = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1424,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
        <div className="section-5">
        <div className="services">
          <div className="container">
            <div
              className="servicetitle "
              data-aos="fade-up"
              data-aos-once="true"
            >
              <span className="left-line">
                <i></i>
                <i></i>
              </span>
              <h2>OUR SERVICES</h2>
              <span className="right-line">
                <i></i>
                <i></i>
              </span>
            </div>
            <div
              className="servicetitle2"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <h1>
                One App - Multiple Services, Superior Margins, More Earnings
              </h1>
              <p>
                At MasterPay, we give not just the Best but Legendary
                satisfaction to our Customers, <br /> through Service
                Excellence.
              </p>
            </div>
            <div className="servicetitlebtn">
              <button>VIEW ALL SERVICES</button>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <div className="service-content">
            <div className="serviceslide">
              <Slider {...settingssection5}>
                <div className="section-5tile1">
                  <Section5
                    image="\Images\section-5\adhar-banking.svg"
                    head="Aadhaar Banking (AEPS)"
                    text="                      Help your Customers withdraw cash, DBT and Government
                      relief funds from their bank accounts by fingerprints."
                  />
                </div>

                <div className="section-5tile2">
                  <Section5
                    image="\Images\section-5\m-atm.svg"
                    head="MICRO ATMs"
                    text="                      Help your Customers withdraw cash, DBT and Government
                      relief funds from their bank accounts"
                  />
                </div>
                <div className="section-5tile3">
                  <Section5
                    image="\Images\section-5\CMS.svg"
                    head="Cash Management Services (CMS)"
                    text="                      Offer Cash Collection Services of EMIs, cash drops of
                      E-commerce companies, Hyperlocal delivery companies, etc."
                  />
                </div>
                <div className="section-5tile4">
                  <Section5
                    image="\Images\section-5\mobile-recharge.svg"
                    text="                      Offer your Customers to recharge Mobile, DTH services and
                      Data cards of all the Operators in India."
                    head="Mobile / DTH Recharge"
                  />
                </div>
                <div className="section-5tile5">
                  <Section5
                    image="\Images\section-5\bill-payment.svg"
                    text="                      Offer your Customers to pay Electricity, Gas and Water
                      bills of all the Operators in India without any hassles."
                    head="Utility Bills Payment"
                  />
                </div>
                <div className="section-5tile6">
                  <Section5
                    image="\Images\section-5\bus-booking.svg"
                    text="                      Help your Customers to book Bus tickets by offering
                      comprehensive range of Bus Operators across India."
                    head="Bus Ticket Booking"
                  />
                </div>
                <div className="section-5tile7">
                  <Section5
                    image="\Images\section-5\flight-booking.svg"
                    text="                      Help your Customers to book Flight tickets at competitive
                      rates and great commissions"
                    head="Flight Ticket Booking"
                  />
                </div>
                <div className="section-5tile8">
                  <Section5
                    image="\Images\section-5\wholesale-market.svg"
                    text="Become a Vendor, start selling on MasterPay – your next
                      big sales channel"
                    head="Wholesale Market"
                  />
                </div>
                <div className="section-5tile9">
                  <Section5
                    image="\Images\section-5\insurance.svg"
                    text="                      Offer your Customers Insurance with a variety of
                      budget-friendly general insurance plans."
                    head="Insurance"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5main