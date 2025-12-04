import { useFormik } from "formik";
import React from "react";
import * as yup from "yup"

//get data from users, store data in variables, submit form, validate the user form, give feedbacks and errors.

const FomikForm = () => {
  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema : yup.object({
      firstname: yup.string().required("This is a required field").min(3, "Name is Too short"),
      lastname: yup.string().required("This is a required field").min(3, "Name is Too short"),
      email: yup.string().required("This is a required field").email('Invalid email'),
      password: yup.string().required("This is a required field").min(3, "Name is Too short"),

    })

    // validate: (value) => {
    //   let errors = {};
    //   let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    //   let passwordRegex =
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    //   if (value.firstname == "") {
    //     errors.firstname = "This input cannnot be empty";
    //   } else if (value.firstname.length < 3) {
    //     errors.firstname = "Name is too Short";
    //   }

    //   if (value.lastname == "") {
    //     errors.lastname = "This input cannnot be empty";
    //   }

    //   if (value.email == "") {
    //     errors.email = "This email cannnot be empty";
    //   } else if (!emailRegex.test(value.email)) {
    //     errors.email = "Invaild email";
    //   }

    //   if (value.password == "") {
    //     errors.password = "This password cannnot be empty";
    //   } else if (!passwordRegex.test(value.password)) {
    //     errors.password = "Invalid Password";
    //   }
    //   return errors;
    // },
  });

  // console.log(formik.touched);
  console.log(formik.errors);
  return (
    <>
      <div className="mx-auto col-7 rounded-4 border p-3 my-4 shadow-lg text-center">
        <h1>Sign Up</h1>
        <form action="" onSubmit={formik.handleSubmit}>
          <input
            className={formik.touched.firstname && formik.errors.firstname ? "form-control  is-invalid" : "form-control mb-3"}
            type="text"
            placeholder="First name"
            name="firstname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="text-danger">
            {formik.touched.firstname ? formik.errors.firstname : ""}
          </small>
          <input
             className={formik.touched.lastname && formik.errors.lastname ? "form-control  is-invalid" : "form-control mb-3"}
            type="text"
            placeholder="Last name"
            name="lastname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="text-danger">
            {formik.touched.lastname ? formik.errors.lastname : ""}
          </small>
          <input
             className={formik.touched.email && formik.errors.email ? "form-control  is-invalid" : "form-control mb-3"}
            type="text"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="text-danger">
            {formik.touched.email ? formik.errors.email : ""}
          </small>
          <input
             className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control mb-3"}
            type="text"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="text-danger">
            {formik.touched.password ? formik.errors.password : ""}
          </small>
          <button className="btn btn-success w-100" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default FomikForm;
