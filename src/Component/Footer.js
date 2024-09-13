import React from 'react'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
        <div className="footer-main">
      <div className="footer">
        <div className="row">
          <div className="footer1 col-md-3">
            <div className="footerlogo">
              <img
                src="\Images\partner.digitalsevakendra.co.in-1706588676.png"
                alt=""
              />
            </div>
            <div className="footeraddress">
              <h3>Champion Software Technologies Ltd.</h3>
              <p>
                336-337-351-352, Iskon Mall,
                <br /> 150 Feet Ring Road, <br />
                 Rajkot, Gujarat- 360005
              </p>
            </div>
            <h6>
              <span className="callEmail">Call: </span>+91 9315969524
            </h6>
            <h6>
              <span className="callEmail">Email: </span>{" "}
              Servicestrishakti3@gmail.com
            </h6>
          </div>
          <div className="footer2 col-md-3">
            <div className="footer-heading">
              <h4>NAVIGATION</h4>
            </div>
            <ul className="navigationul">
              <li>
                <FontAwesomeIcon className="footericon" icon={faAngleRight} />
                Home
              </li>
              <li>
                <FontAwesomeIcon className="footericon" icon={faAngleRight} />
                Services
              </li>
              <li>
                <FontAwesomeIcon className="footericon" icon={faAngleRight} />
                About Us
              </li>
              <li>
                <FontAwesomeIcon className="footericon" icon={faAngleRight} />
                Contact Us
              </li>
            </ul>
          </div>
          <div className="footer3 col-md-3">
            <div className="footer-heading">
              <h4>OTHER LINKS</h4>
            </div>
            <ul className="navigationul">
              <li>
                <FontAwesomeIcon className="footericon" icon={faAngleRight} />
                Make MasterPay your Digital Dost
              </li>
              <li>
                <FontAwesomeIcon className="footericon" icon={faAngleRight} />
                Privacy Policy
              </li>
              <li>
                <FontAwesomeIcon className="footericon" icon={faAngleRight} />
                Terms & Conditions
              </li>
              <li>
                <FontAwesomeIcon className="footericon" icon={faAngleRight} />
                Grievance Redressal Policy
              </li>
              <li>
                <FontAwesomeIcon className="footericon" icon={faAngleRight} />
                Refund & Cancellation Policy
              </li>
            </ul>
          </div>
          <div className="footer4 col-md-3">
          <div className="footer-heading">
              <h4>CONNECT WITH US</h4>
            </div>
            <div className="footersocial-icon">
              <ul className="socialiconul">
                <li><FontAwesomeIcon className="social-iconli" icon={faFacebook}/></li>
                <li><FontAwesomeIcon className="social-iconli" icon={faInstagram}/></li>
                <li><FontAwesomeIcon className="social-iconli" icon={faTwitter}/></li>
                <li><FontAwesomeIcon className="social-iconli" icon={faLinkedin}/></li>
              </ul>
            </div>
            <div className="footer-heading">
              <h4>DOWNLOAD MOBILE APP</h4>
            </div>
            
            <div className="googleplay">
            <img src="\Images\section-6\playstore.svg" alt="" />
            </div>
          </div>
        </div>
        </div>
        <div className="footer-text">
          <p>© 2020 Digital seva Kendra. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer