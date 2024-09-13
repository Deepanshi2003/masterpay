import * as Yup from 'yup'

export const signupSchema=Yup.object({
    firstname:Yup.string().min(4).max(15).required("Please enter your name"),
  lastname:Yup.string().min(3).max(15).required("Please enter your last name"),
  mobilenumber:Yup.string().max(10).required("Please enter your mobile number"),
  email:Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/,"Please enter valid email").required("Please enter your email"),
  address:Yup.string().max(30).required("Please enter your address"),
  state:Yup.string().max(15).required("Please enter your state"),
  city:Yup.string().max(15).required("Please enter your city name"),
  pincode:Yup.string().max(6).required("Please enter your pincode")
})