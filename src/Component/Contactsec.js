import { useFormik } from "formik";
import React from "react";
import { signupSchema } from "./Schema/Signupschema";

const initialValues = {
  firstname: "",
  lastname: "",
  mobilenumber: "",
  email: "",
  address: "",
  state: "",
  city: "",
  pincode: "",
};
const Contactsec = () => {
  const { values, handleSubmit, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        alert("Account Created");
        action.resetForm();
      },
    });
  return (
    <div className="contactScroll">
      <div className="contact">
        <div className="contacttitle">
          <div className="con-title" data-aos="fade-up" data-aos-once="true">
            <span className="conleft-line">
              <i></i>
              <i></i>
            </span>
            <h2>SIGN UP WITH US</h2>
            <span className="conright-line">
              <i></i>
              <i></i>
            </span>
          </div>
          <div className="titlecon" data-aos="fade-up" data-aos-once="true">
            <p className="maincon">Apply to make MasterPay your Digital Dost</p>
            <h6>
              At MasterPay, we give not just the Best but Legendary satisfaction
              to our Customers, <br />
              through Service Excellence.
            </h6>
          </div>
          <div className="con-btn" data-aos="fade-up" data-aos-once="true">
            <div className="button1">
              <button>As a distributor</button>
            </div>
            <div className="or">
              {" "}
              <h4>OR</h4>
            </div>
            <div className="button2">
              <button>As a Retailer</button>
            </div>
          </div>
        </div>
        <div className="con-data">
          <form action="" onSubmit={handleSubmit}>
          <div className="row">
            <div
              className="col-md-3 inputcss"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-once="true"
            >
              <input
                type="text"
                placeholder="First Name*"
                name="firstname"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
              />
              {errors.firstname && touched.firstname ? (<p className="formerror">{errors.firstname}</p>):null}
            </div>
            <div
              className="col-md-3 inputcss"
              data-aos="fade-up"
              data-aos-delay="90"
              data-aos-once="true"
            >
              <input
                type="text"
                placeholder="Last Name*"
                name="lastname"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
              />
                  {errors.lastname && touched.lastname ? (<p className="formerror">{errors.lastname}</p>):null}
            </div>
            <div
              className="col-md-3 inputcss"
              data-aos="fade-up"
              data-aos-delay="110"
              data-aos-once="true"
            >
              <input
                type="text"
                placeholder="Mobile Number*"
                name="mobilenumber"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobilenumber}
              />
              {errors.mobilenumber && touched.mobilenumber ? (<p className="formerror">{errors.mobilenumber}</p>):null}
            </div>
            <div
              className="col-md-3 inputcss"
              data-aos="fade-up"
              data-aos-delay="140"
              data-aos-once="true"
            >
              <input
                type="text"
                placeholder="Email Address*"
                name="email"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (<p className="formerror">{errors.email}</p>):null}
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-3 inputcss"
              data-aos="fade-up"
              data-aos-delay="170"
              data-aos-once="true"
            >
              <input
                type="text"
                placeholder="Address*"
                name="address"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
              {errors.address && touched.address ? (<p className="formerror">{errors.address}</p>):null}
            </div>
            <div
              className="col-md-3 inputcss"
              data-aos="fade-up"
              data-aos-delay="180"
              data-aos-once="true"
            >
              <input
                type="text"
                placeholder="State*"
                name="state"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.state}
              />
              {errors.state && touched.state ? (<p className="formerror">{errors.state}</p>):null}
            </div>
            <div
              className="col-md-3 inputcss"
              data-aos="fade-up"
              data-aos-delay="210"
              data-aos-once="true"
            >
              <input
                type="text"
                placeholder="City*"
                name="city"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
              {errors.city && touched.city ? (<p className="formerror">{errors.city}</p>):null}
            </div>
            <div
              className="col-md-3 inputcss"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-once="true"
            >
              <input
                type="text"
                placeholder="PinCode*"
                name="pincode"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pincode}
              />
              {errors.pincode && touched.pincode ? (<p className="formerror">{errors.pincode}</p>):null}
            </div>
          </div>
        
        <div
          className="contactregisterbtn"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <button type="submit">Register now!</button>
        </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contactsec;
