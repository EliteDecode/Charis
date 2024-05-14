import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .trim()
    .required("Email is required"),
  password: yup.string().trim().required("Password is required"),
});

export const sendMessageSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .trim()
    .required("Email is required"),
  name: yup.string().trim().required("Name is required"),
  message: yup.string().trim().required("Message is required"),
});

export const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone number is required"),
  country: yup.string().required("Country is required"),
});

export const billingSchema = yup.object({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  company_name: yup.string().required("Company name is required"),
  street_address: yup.string().required("Street address is required"),
  town_city: yup.string().required("Town/City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  zip_code: yup.string().required("Zip code is required"),
});
