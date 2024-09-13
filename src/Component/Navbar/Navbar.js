import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import { useFormik } from "formik";
import { Loginschema } from "../Schema/Loginschema";

const initialValues = {
  username: "",
  password: "",
};
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const Sign = () => {
    navigate("/", { state: { scrollTo: true } });
    setOpen(false);
  };

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues,
      validationSchema: Loginschema,
      onSubmit: (values, action) => {
        alert("Logged successfully");
        action.resetForm();
      },
    });

    const showSidebar=()=>{
      const sideBar= document.querySelector(".sidenavbar-ul")
      sideBar.style.display="flex"
     }
     const hideSidebar=()=>{
       const hideBar=document.querySelector(".sidenavbar-ul")
       hideBar.style.display="none"
     }
  return (
    <div>
      <div className="navbarr">
        <div className="nav-content ">
          <div className="logo">
            <img
              src="\Images\partner.digitalsevakendra.co.in-1706588676.png"
              alt=""
            />
          </div>
          <div className="nav-c">
            <ul className="navul">
              <li className='hideOnMobile'>
                <Link className="linknav" to="/">
                  Home
                </Link>
              </li>
              <li className='hideOnMobile'>
                <Link className="linknav" to="/Services">
                  Services
                </Link>
              </li>
              <li className='hideOnMobile'>
                <Link className="linknav" to="/About">
                  About Us
                </Link>
              </li>
              <li className='hideOnMobile'>
                <Link className="linknav" to="/Contact">
                  Contact Us
                </Link>
              </li>
              <li className="hideOnMobile"> <button  onClick={handleOpen} className="nav-btn">
                SignIn
              </button></li>
              <li onClick={showSidebar}><svg className="menuBtn" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="signin">
                    <div className="row">
                      <div className="leftsignin col-md-6">
                        <img
                          src="\Images\partner.digitalsevakendra.co.in-1706588676.png"
                          alt=""
                        />
                        <h3>Sign into your account</h3>
                        <form action="" onSubmit={handleSubmit}>
                          <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                          />{" "}
                            {errors.username && touched.username ? (<p className="formerror">{errors.username}</p>):null}
                          
                          <input type="password" placeholder="Password"  name="password"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password} />
                            {errors.password && touched.password ? (<p className="formerror">{errors.password}</p>):null}
                          <button type="submit">Sign In</button>
                        </form>
                        <p className="signup">
                          Don't have an account?{" "}
                          <span className="leftspan" onClick={Sign}>
                            {" "}
                            Register?
                          </span>
                        </p>
                      </div>
                      <div className="rightsignin col-md-6">
                        <img src="\Images\Signin\signIn-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </Box>
              </Modal>
            </ul>
          </div>
        </div>
      </div>
      <nav className='sidenavBar' id='scroll-container'>
            <ul className="sidenavbar-ul">
              <li onClick={hideSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000" className='svg-close'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
                <li className='hide'><Link className='sidelink' to="/">Home</Link></li>
                <li className='hide'><Link className='sidelink' to="/About">About</Link></li>
                <li className='hide'><Link className='sidelink' to="/Services">Services</Link></li>
                <li className='hide'><Link className='sidelink' to="/Contact">Contact</Link></li>
                <li className='hide'><Link className='sidelink'  onClick={handleOpen}>SignIn/SignUp</Link></li>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar;
