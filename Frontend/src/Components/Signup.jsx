import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .required('Firstname is required')
    .min(3, 'Firstname must be at least 3 characters')
    .max(15, 'Firstname must be at most 15 characters'),
  lastname: Yup.string()
    .required('lastname is required')
    .min(5, 'lastname must be at least 5 characters')
    .max(15, 'lastname must be at most 15 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(15, 'Password must be at most 15 characters')
})

const Signup = () => {  // step 1: formik initialization
  const signupForm = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    },
    // validation schema
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200) {
        enqueueSnackbar('Signup successful', { varient: 'success' })
      } else {
        enqueueSnackbar('Signup failed', { varient: 'error' })

      }
    },
    validationSchema: SignupSchema
  })

  return (
    <div>
      {/*link rel="stylesheet" href="style.css" />*/}
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col ">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-5 d-none d-xl-block">
                    <img
                      src="https://img.freepik.com/free-photo/young-child-making-diy-project-from-upcycled-materials_23-2149391054.jpg"
                      alt="Sample photo"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                        objectFit: 'cover',
                        objectPosition: "right",
                      }}
                    />
                  </div>
                  <form onSubmit={signupForm.handleSubmit}>
                    <div className="col-xl-6">
                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase"> Signup Form
                        </h3>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init="" className="form-outline">
                              {/*<input
                          type="text"
                          id="form3Example1m"
                          className="form-control form-control-lg"
                />*/}

                              <span style={{ color: 'red', fontSize: '10' }}>{signupForm.touchedfirstname && signupForm.errors.firstname}</span>
                              <input type="text" className="form-control mb-4"
                                id="firstname"
                                onChange={signupForm.handleChange}
                                value={signupForm.values.firstname} />
                              <label className="form-label" htmlFor="form3Example1m">
                                First name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init="" className="form-outline">
                              {/* <input
                          type="text"
                          id="form3Example1n"
                          className="form-control form-control-lg"
              />*/}

                              <span style={{ color: 'red', fontSize: '10' }}>{signupForm.touchedlastname && signupForm.errors.lastname}</span>
                              <input type="text" className="form-control mb-4"
                                id="lastname"
                                onChange={signupForm.handleChange}
                                value={signupForm.values.lastname} />
                              <label className="form-label" htmlFor="form3Example1n">
                                Last name
                              </label>
                            </div>
                          </div>
                        </div>
                        <div data-mdb-input-init="" className="form-outline mb-4">
                          {/*<input
                      type="text"
                      id="form3Example97"
                      className="form-control form-control-lg"
            />*/}

                          <span style={{ color: 'red', fontSize: '10' }}>{signupForm.touched.email && signupForm.errors.email}</span>
                          <input type="text" className="form-control mb-4"
                            id="email"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.email} />
                          <label className="form-label" htmlFor="form3Example97">
                            Email ID
                          </label>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            {/*} <input
                          type="password"
                          id="form3Example97"
                          className="form-control"
          />*/}
                            <span style={{ color: 'red', fontSize: '10' }}>{signupForm.touched.password && signupForm.errors.password}</span>
                            <input type="text" className="form-control mb-4"
                              id="password"
                              onChange={signupForm.handleChange}
                              value={signupForm.values.password} />
                            <label className="form-label" htmlFor="form3Example97">
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end pt-3">
                          <button
                            type="button"
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-warning btn-lg"
                          >
                            Reset all
                          </button>
                          <button
                            type='submit'
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-warning btn-lg ms-2" >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup