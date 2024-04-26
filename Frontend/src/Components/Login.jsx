import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const LoginSchema =Yup.object().shape({
  name: Yup.string()
  .required('Name is required')
  .min(3, 'Name must be at least 3 characters')
  .max(15, 'Name must be at most 15 characters'),
  password: Yup.string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters')
  .max(15, 'Password must be at most 15 characters')
})

const Login = () => {

    // step 1: formik initialization
    const loginForm = useFormik({
      initialValues: {
        name: '',
        email: '',
        password: ''
      },
      onSubmit: async(values,action) => {
        console.log(values);
        const res=await fetch('http://localhost:5000/user/authenticate',{
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(res.status)
        action.resetForm()
  
        if (res.status === 200){
          enqueueSnackbar('Login successful', {varient: 'success'});
        }setLOggedIn(true);
        const data = await res.json();
        console.log(data);
        sessionStorage.SetItem('User',JSON.stringify(data))
      },
      
      validationSchema: LoginSchema
    })
  return (
    <div><section className="vh-100" style={{ backgroundColor:"#eee" }}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: 25 }}>
            <div className="card-body p-md-7" style={{ backgroundColor:"darkgrey"}}> 
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Login Form
                  </p>
                  <form className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div
                        data-mdb-input-init=""
                        className="form-outline flex-fill mb-0"
                      >
                        {/*<input
                          type="text"
                          id="form3Example1c"
                          className="form-control"
  />*/}

                        <span style={{color: 'red', fontSize: '10'}}>{loginForm.touched.name && loginForm.errors.name}</span>
                            <input type="text" className="form-control mb-4" 
                            id="name"
                            onChange={loginForm.handleChange}
                            value={loginForm.values.name}/>
                        <label className="form-label" htmlFor="form3Example1c">
                           Name
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div
                        data-mdb-input-init=""
                        className="form-outline flex-fill mb-0"
                      >
                        {/*<input
                          type="email"
                          id="form3Example3c"
                          className="form-control"
/>*/}

                        <span style={{color: 'red', fontSize: '10'}}>{loginForm.touched.email && loginForm.errors.email}</span>
                            <input type="text" className="form-control mb-4"
                            id="email"
                            onChange={loginForm.handleChange}
                            value={loginForm.values.email} />
                        <label className="form-label" htmlFor="form3Example3c">
                           Email
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                      <div
                        data-mdb-input-init=""
                        className="form-outline flex-fill mb-0"
                      >
                       {/* <input
                          type="password"
                          id="form3Example4c"
                          className="form-control"
  />*/}

                        <span style={{color: 'red', fontSize: '10'}}>{loginForm.touched.password && loginForm.errors.password}</span>
                            <input type="text" className="form-control mb-4"
                            id="password"
                            onChange={loginForm.handleChange}
                            value={loginForm.values.password} />
                        <label className="form-label" htmlFor="form3Example4c">
                          Password
                        </label>    
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div
                        data-mdb-input-init=""
                        className="form-outline flex-fill mb-0"
                      >
                       {/*} <input
                          type="password"
                          id="form3Example4cd"
                          className="form-control"
/>*/}
                        <span style={{color: 'red', fontSize: '10'}}>{loginForm.touched.password && loginForm.errors.password}</span>
                            <input type="text" className="form-control mb-4"
                            id="password"
                            onChange={loginForm.handleChange}
                            value={loginForm.values.password} />
                        <label className="form-label" htmlFor="form3Example4cd">
                          Repeat your password
                        </label>
                      </div>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example3c"
                      />
                      <label className="form-check-label" htmlFor="form2Example3">
                        I agree all statements in{" "}
                        <a href="#!">Terms of service</a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-primary btn-lg"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://www.cratejoy.com/cdn/shop/products/Gd7vY9ccT3CANDxfnXte.jpg?crop=center&height=800&v=1698451038&width=1200"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Login 