import * as Yup from "yup";

export const contactSchema=Yup.object({
    fullname:Yup.string().min(4).required("Please enter your name"),
    mobilenumber:Yup.string().max(10).required("Please enter your mobile number"),
    email:Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/,"Please enter valid email").required("Please enter your email"),
    message:Yup.string().min(30).max(100).required("Please enter message")
});