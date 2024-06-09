import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import useAppContext from '../AppContext';
import signupform from '../assets/signupform.jpeg'

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .required('Firstname is required')
    .min(3, 'Firstname must be at least 3 characters')
    .max(15, 'Firstname must be at most 15 characters'),
  lastname: Yup.string()
    .required('Lastname is required')
    .min(5, 'Lastname must be at least 5 characters')
    .max(15, 'Lastname must be at most 15 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(15, 'Password must be at most 15 characters')
});

const Signup = () => {

  const {setLoggedIn, setCurrentUser} = useAppContext();

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:5000/user/add",{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
          "Content-Type":"application/json"
        }
      });
      console.log(res.status);
      if(res.status === 200){
        enqueueSnackbar("user registered successfully", {variant:"success"})
        setLoggedIn(true);
        const data = await res.json();
        
        if(data.role === "admin"){
          sessionStorage.setItem("admin", JSON.stringify(data));
          navigate("/admin/dashboard")
        }else{
          sessionStorage.setItem("user", JSON.stringify(data));
          navigate("/user/ProductListing")
        }
      }
      else if(res.status === 400){
        enqueueSnackbar("something went wrong", {variant:"error"})
      }
    }

   
   
  });

  return (
    <div>
      <Navbar />
      <section className="h-100" style={{ backgroundColor: "lightblue" }}>
        <div className="container py-5 " style={{ marginLeft: "200px" }}>
          <div className="row d-flex justify-content-center align-items-center h-100 gx-0">
            <div className="col-md-6 ">
              <div className="card card-registration "  >
                <form onSubmit={signupForm.handleSubmit}>
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase fw-bold" style={{ fontSize: "40px", fontFamily: "sans-serif" }}>Signup Form</h3>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init="" className="form-outline">
                          <label className="form-label" htmlFor="firstname">
                            First name
                          </label>
                          <span style={{ color: 'red', fontSize: '10' }}>{signupForm.touched.firstname && signupForm.errors.firstname}</span>
                          <input type="text" className="form-control mb-4"
                            id="firstname"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.firstname} />

                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init="" className="form-outline">
                          <label className="form-label" htmlFor="lastname">
                            Last name
                          </label>
                          <span style={{ color: 'red', fontSize: '10' }}>{signupForm.touched.lastname && signupForm.errors.lastname}</span>
                          <input type="text" className="form-control mb-4"
                            id="lastname"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.lastname} />

                        </div>
                      </div>
                    </div>
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">
                        Email ID
                      </label>
                      <span style={{ color: 'red', fontSize: '10' }}>{signupForm.touched.email && signupForm.errors.email}</span>
                      <input type="text" className="form-control mb-4"
                        id="email"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.email} />

                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <div data-mdb-input-init="" className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <span style={{ color: 'red', fontSize: '10' }}>{signupForm.touched.password && signupForm.errors.password}</span>
                        <input type="password" className="form-control mb-4"
                          id="password"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.password} />

                      </div>
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                      <button
                        type='submit'
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-warning btn-lg ms-2" >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 ">
              <img
                src= {signupform}
                alt="Sample photo"
                className="img-fluid  "
                style={{borderRadius: "0rem 1rem 1rem 0rem",height:"590px",width:"400px"
                  
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
