import React, { useEffect } from "react";
import "./Services.css";
import Navbar from "../../Component/Navbar/Navbar";
import Contactsec from "../../Component/Contactsec";
import Footer from "../../Component/Footer";
import Partner from "../../Component/Partner";
import Aos from "aos";

const Services = () => {
  useEffect(()=>{
    Aos.init()
  })
    const data=[
        {
            class:"service1",
          image:"/Images/section-5/adhar-banking.svg",
          head1:"Aadhaar Banking (AEPS)",
          head2:"Banking Services made easy – anytime, anywhere",
          text1:"Now, withdrawing cash from your bank account has become safe and easier than never before. The Customers do not need to visit Bank branches or ATMs for basic banking functions like cash withdrawal or balance enquiry. They just need to visit their nearest MasterPay Retail store! MasterPay Retailer can provide their customers with Aadhaar Banking service through AEPS(Aadhaar Enabled Payment System) powered digital banking service.",
          text2:"Through MasterPay’s Aadhaar Banking Service, the Retailers can help their Customers to conduct banking transactions with their Aadhaar number and finger authentication."
        },
        {
            class:"service2",
            image:"/Images/section-5/m-atm.svg",
            head1:"MICRO ATMs",
            head2:" Help your Customers withdraw cash, DBT and Government relief funds from their bank accounts",
            text1:"Now, withdrawing cash from your bank account has become safe and easier than never before. The Customers do not need to visit Bank branches or ATMs for basic banking functions like cash withdrawal or balance enquiry. They just need to visit their nearest MasterPay Retail store! MasterPay Retailers can provide their customers with Micro ATM Services at his Store with ease and convenience",
            text2:"Through MasterPay’s MATM Service, the Retailers can help their Customers to conduct banking transactions."
          },
          {
            class:"service3",
            image:"/Images/section-5/CMS.svg",
            head1:"Cash Management Services (CMS)",
            head2:"Cash Management Services made simple and easy",
            text1:"Now, payments of EMIs, cash drops of E-commerce companies, Hyperlocal delivery companies, etc. have been made easy, convenient and simpler. MasterPay retailer can provide these services to their customers without any hassles.",
            text2:"Customers do not need to search any bank or the company’s branches, Customers just need to visit their nearest MasterPay Retail store! MasterPay Retailer can provide their customers with CMS facility anytime of the day."
          },
          {
            class:"service4",
            image:"/Images/section-5/mobile-recharge.svg",
            head1:"Mobile / DTH Recharge",
            head2:"Recharges made simple and easy",
            text1:"Mobile and DTH Recharges being a day to day requirement, a MasterPay retailer can provide Mobile and DTH recharge services of all the Operators in India to their customers without any hassles.",
            text2:"Customers can just walk in and get their mobiles/DTH recharged easily in a secure way using the service provided at MasterPay Retail store. While MasterPay retailers get to provide their customers with more services; they also earn an extra income by rendering these services."
          },
          {
            class:"service5",
            image:"/Images/section-5/bill-payment.svg",
            head1:"Bill Payments",
            head2:"Bill Payments made simple and easy",
            text1:"Utility Bill Payments being a day to day requirement, a MasterPay retailer can provide Utility Bill Payment services of all the Operators in India to their customers without any hassles.",
            text2:"Customers can just walk in and get their electricity, water, gas, mobile, etc. bills paid easily in a secure way using the services provided at MasterPay Retail store. While MasterPay retailers get to provide their customers with more services; they also earn an extra income by rendering these services."
          },
          {
            class:"service6",
            image:"/Images/section-5/bus-booking.svg",
            head1:"Bus Ticket Booking",
            head2:"Bus Bookings made simple and easy",
            text1:"Bus Ticket Booking Bus Bookings made simple and easy Travel bookings being a basic requirement, a MasterPay retailer can provide Bus Booking services of the comprehensive range of Bus Operators in India to their customers without any hassles.",
            text2:"Customers can just walk in and get their travel bookings done easily in a secure way using the services provided at MasterPay Retail store. While MasterPay retailers get to provide their customers with more services; they also earn an extra income by rendering these services."
          },
          {
            class:"service7",
            image:"/Images/section-5/flight-booking.svg",
            head1:"Flight Ticket Booking",
            head2:"Flight Bookings made simple and easy",
            text1:"MasterPay retailer can provide Flight Booking services to their customers at competitive rates and great commissions without any hassles.",
            text2:"Customers can just walk in and get their travel bookings done easily in a secure way using the services provided at MasterPay Retail store. While MasterPay retailers get to provide their customers with more services; they also earn an extra income by rendering these services."
          },
          {
            class:"service8",
            image:"/Images/section-5/wholesale-market.svg",
            head1:"Wholesale Market",
            head2:"Selling made simple and easy",
            text1:"Become a Vendor, start selling on MasterPay – your next big sales channel. Multiply your customers, increase your income with MasterPay.",
            text2:""
          },
          {
            class:"service9",
            image:"/Images/section-5/insurance.svg",
            head1:"Insurance",
            head2:"Best Plans from Leading Insurers",
            text1:"With less than 3% of India currently insured, you have the opportunity to make a real difference while also enjoying financial rewards. Earn respect and financial success by becoming a part of our mission to provide reliable insurance coverage for all.",
            text2:"Introducing a variety of budget-friendly general insurance plans, tailored to your needs. Among our offerings is comprehensive bike and motor insurance, ensuring that you and your vehicle stay protected without breaking the bank. Take a step towards safeguarding your valuable assets and enjoy peace of mind while you're on the road. Explore our range today!"
          },
    ]
  return (
    <div>
      <Navbar />
      <section>
        <div className="Services">
          <div className="servicebanner" >
            <div className="serviceheading" data-aos="fade-up" data-aos-once="true">
              <h1>DIGITAL TRANSFORMATION</h1>
              <h5>Live Your Idea With Digital Innovation</h5>
            </div>
          </div>
          <div className="services-content">
          <div className="container">
            <div className="servicetitle" data-aos="fade-up" data-aos-once="true">
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
            <div className="servicetitle2" data-aos="fade-up" data-aos-once="true">
              <h1>
                One App - Multiple Services, Superior Margins, More Earnings
              </h1>
              <p>
                At MasterPay, we give not just the Best but Legendary
                satisfaction to our Customers, <br /> through Service
                Excellence.
              </p>
            </div>

          </div>
          <div className="s-content">
              {
                data.map((item,id)=>{
                 return <div className={`${item.class}`} key={id} data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
                 <div className="row">
                 <div className="col-md-4 img-ani">
                  <img src={item.image} alt="" />
                 </div>
                 <div className="col-md-8">
                   <div className="service-heading">
                     <h3>{item.head1}          </h3>
                     <p>{item.head2}</p>
                     <div className="line"></div>
                   </div>
                   <div className="service-text">
                     <p>{item.text1}</p>
                     <p>{item.text2}</p>
                   </div>
                 </div>
                 </div>
             </div>
                })
              }

          </div>
          </div>
        </div>
      </section>
      <Partner/>
      <Contactsec/>
      <Footer/>
    </div>
  );
};

export default Services;
