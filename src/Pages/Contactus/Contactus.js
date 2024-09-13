import React, { useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Map from "../../Component/Map";
import Partner from "../../Component/Partner";
import Footer from "../../Component/Footer";
import Aos from "aos";
import { useFormik } from "formik";
import { contactSchema } from "../../Component/Schema/Contactusschema";

const initialValues = {
  fullname: "",
  mobilenumber: "",
  email: "",
  message: "",
};
const Contactus = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactSchema,
      onSubmit: (values, action) => {
        alert("Message Submitted");
        action.resetForm();
      },
    });
    console.log(errors.message && touched.message)

  return (
    <div>
      <Navbar />
      <section className="contactus">
        <div className="contactbanner">
          <div
            className="contactbannertext"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <h2>Contact Us</h2>
            <p>Become a business partner!!</p>
            <p>We’re here.</p>
            <div
              className="contactsocial-icon"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <ul className="socialicon-contact">
                <li>
                  <FontAwesomeIcon
                    className="social-iconli"
                    icon={faFacebook}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="social-iconli"
                    icon={faInstagram}
                  />
                </li>
                <li>
                  <FontAwesomeIcon className="social-iconli" icon={faTwitter} />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="social-iconli"
                    icon={faLinkedin}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="form-section">
          <div className="row">
            <div className="col-md-5">
              <div
                className="form-left-section"
                data-aos="fade-right"
                data-aos-once="true"
              >
                <div className="leftsec-head">
                  <h1>We want to hear from you</h1>
                  <h3>
                    Come be a part of Growth... <br />
                    as <br />
                    “Growth Drives Everyone”
                  </h3>
                </div>
                <div className="left-content">
                  <ul className="leftul">
                    <li className="leftli">
                      <FontAwesomeIcon className="lefticon" icon={faCircle} />
                      <div className="lefttext">
                        <h3>Regd. Office:</h3>
                        <p>
                          351-52-36-37-22, Iscon Mall, 150Ft. Ring Road, Rajkot,
                          Gujarat - 360005
                        </p>
                      </div>
                    </li>
                    <li className="leftli">
                      <FontAwesomeIcon className="lefticon" icon={faCircle} />
                      <div className="lefttext">
                        <h3>Customer Care:</h3>
                        <p>+91 8459 006 006</p>
                      </div>
                    </li>
                    <li className="leftli">
                      <FontAwesomeIcon className="lefticon" icon={faCircle} />
                      <div className="lefttext">
                        <h3>Email:</h3>
                        <p>sales@masterpay.pro</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div
                className="form-right-section"
                data-aos="fade-left"
                data-aos-once="true"
              >
                <div className="form-box">
                  <div className="formhead">
                    <img src="\Images\Contactus\notes-svgrepo-com.svg" alt="" />
                    <h3>Send us your inquiry</h3>
                  </div>
                  <div className="form-inner">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-12 col-xl-6 form-group">
                          <input
                            type="text"
                            placeholder="Full Name"
                            name="fullname"
                            value={values.fullname}
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.fullname && touched.fullname ? (<p className="formerror">{errors.fullname}</p>):null}
                        </div>
                        <div className="col-lg-12 col-xl-6 form-group">
                          <input
                            type="text"
                            placeholder="Mobile Number"
                            name="mobilenumber"
                            // maxLength={10}
                            value={values.mobilenumber}
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.mobilenumber && touched.mobilenumber ? (<p className="formerror">{errors.mobilenumber}</p>):null}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-xl-6 form-group">
                          <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={values.email}
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.email && touched.email ? (<p className="formerror">{errors.email}</p>):null}
                        </div>
                        <div className="col-lg-12 col-xl-6 form-group">
                          <select name="Your Identity" id="">
                            <option value selected>
                              Your Identity
                            </option>
                            <option value="Distributor">Distributor</option>
                            <option value="Retailer">Retailer</option>
                            <option value="Alliance">Alliance</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12  form-group">
                          <textarea
                            id=""
                            placeholder="Your Message"
                            name="message"
                            value={values.message}
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          ></textarea>
                          {errors.message && touched.message ? (<p className="formerror">{errors.message}</p>):null}
                        </div>
                      </div>
                      <div className="con-button">
                        <button type="submit">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-loaction">
          <div className="conlocation-head">
            <div
              className="servicetitle"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <span className="left-line">
                <i></i>
                <i></i>
              </span>
              <h2>OUR BRANCHES</h2>
              <span className="right-line">
                <i></i>
                <i></i>
              </span>
            </div>
            <h1 data-aos="fade-up" data-aos-once="true">
              We are Located here
            </h1>
            <p data-aos="fade-up" data-aos-once="true">
              MasterPay is a growth oriented, forward looking and fast paced
              technology and marketing solution provider.
            </p>
          </div>
          <div className="map1" data-aos="fade-up" data-aos-once="true">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8128820663082!2d77.32448607495463!3d28.57538108667473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44de4079aaf%3A0x90bdc69b12f688c9!2s154%2C%20Sector%2019%20St%2C%20Block%20D%2C%20Pocket%20D%2C%20Sector%2027%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1721905798913!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="b154"
            ></iframe>
            <h1>Head Office - Rajkot</h1>
            <p>Champion Software Technologies Ltd.,</p>
            <p>351-52-36-37-22, Iskon Mall, Near Big Bazar,</p>
            <p>150 Feet Ring Road, Rajkot, Gujarat - 360005</p>
          </div>
          <div className="map2" data-aos="fade-up" data-aos-once="true">
            <div className="row">
              <Map
                name="Noida Branch"
                add1="E-178, Sector-63,"
                add2="Noida, Uttar Pradesh-201301."
              />
              <Map
                name="Mumbai Branch"
                add1="605 - Sunrise Business Park,"
                add2="S. G. Barve Rd Road No. 16, Nehru Nagar,
                Wagle Industrial Estate, Thane, Maharashtra 400604"
              />
              <Map
                name="Bangalore Branch"
                add1="Near Yelhanka 5th Phase Bus Stand,"
                add2="Landmark - Miranda College, Yelhanka,
                Bangalore - 560 064"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="partnercon">
        <Partner />
      </div>
      <Footer />
    </div>
  );
};

export default Contactus;
