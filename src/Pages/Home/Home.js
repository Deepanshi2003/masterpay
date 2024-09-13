import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Contactsec from "../../Component/Contactsec";
import Footer from "../../Component/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import Partner from "../../Component/Partner";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Section6 from "../../Component/Homecomponent/Section6/Section6";
import Section5main from "../../Component/Homecomponent/section5/Section5main";
import Section7 from "../../Component/Section7/Section7";
import Section4main from "../../Component/Homecomponent/Section4/Section4main";
import { useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  
  useEffect(() => {
    Aos.init();
    if(location.state && location.state.scrollTo) {
      const element = document.getElementsByClassName("contactScroll")
      element[0].scrollIntoView()
    }
  }, [location]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };


  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="slider-content">
        <Slider {...settings}>
          <div className="slide-img">
            <img
              src="\Images\Banner\partner.digitalsevakendra.co.in-1706589118.png"
              alt=""
            />
          </div>
          <div className="slide-img">
            <img
              src="\Images\Banner\partner.digitalsevakendra.co.in-1706589138.png"
              alt=""
            />{" "}
          </div>
          <div className="slide-img">
            <img
              src="\Images\Banner\partner.digitalsevakendra.co.in-1706589169.png"
              alt=""
            />
          </div>
          <div className="slide-img">
            <img
              src="\Images\Banner\partner.digitalsevakendra.co.in-1706589192.png"
              alt=""
            />
          </div>
          <div className="slide-img">
            <img
              src="\Images\Banner\partner.digitalsevakendra.co.in-1706589210.png"
              alt=""
            />
          </div>
          <div className="slide-img">
            <img
              src="\Images\Banner\partner.digitalsevakendra.co.in-1706589227.png"
              alt=""
            />
          </div>
          <div className="slide-img">
            <img
              src="\Images\Banner\partner.digitalsevakendra.co.in-1706589258.png"
              alt=""
            />
          </div>
          <div className="slide-img">
            <img
              src="\Images\Banner\partner.digitalsevakendra.co.in-1706589267.png"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div className="section-3 ">
        <div className="section-3content">
          <h2>Let’s together “move ahead towards Atmanirbhar भारत</h2>
          <h4>through Digitalisation by ‘Being Digital’ now, now, now”</h4>
        </div>
        <div className="buttonsign">
          <button>Sign up Now!</button>
        </div>
      </div>
      <Section4main/>
      <Section5main/>
      <Section6/>
      <Section7/>
      <Partner />
      <Contactsec />
      <Footer />
    </div>
  );
};

export default Home;
