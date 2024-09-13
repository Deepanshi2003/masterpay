import * as Yup from 'yup'

export const Loginschema=Yup.object({
    username:Yup.string().required("Please enter your username"),
    password:Yup.string().required("Please enter your password")
})