import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import Navbar from './Navbar';

const FeedbackSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('FullName is required'),

  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),

  message: Yup.string()
    .required('Message is required'),

});

const Feedback = () => {
  const feedbackForm = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      message: ''
    },
    onSubmit: async (values, action) => {
      try {
        const res = await fetch('http://localhost:5000/feedback/add', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (res.status === 200) {
          enqueueSnackbar('Feedback send successful', { variant: 'success' });
          action.resetForm();
        } else {
          const data = await res.json();
          enqueueSnackbar(data.message || 'Feedback failed', { variant: 'error' });
        }
      } catch (error) {
        console.error('Feedback failed:', error);
        enqueueSnackbar('Feedback failed', { variant: 'error' });
      }
    },
    validationSchema: FeedbackSchema
  });

  return (
    <div>
      <Navbar/>
      <div className="mx-0 mx-sm-auto">
      <div className="CardS">
        <div className="card-header" style={{ backgroundColor: "lightblue" }}>
          <h5 className="card-title mt-2" style={{color: "darkblue",textAlign:"justify"}} id="exampleModalLabel">
            Feedback Request
          </h5>
        </div>
        <div className="modal-body">
          <div className="text-center">
            <i className="far fa-file-alt fa-4x mb-3 text-primary" />
            <p>
              <strong>YOUR OPINION MATTERS</strong>
            </p>
            <p>
              Have some ideas how to improve our product?
              <strong>Give us your feedback.</strong>
            </p>
          </div>
        </div>

        <div className="container">
          <div className="col-12 col-lg-6 d-block mx-auto">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <div className="bg-white border rounded shadow-sm overflow-hidden">
                  <form onSubmit={feedbackForm.handleSubmit}>
                    <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                      <div className="col-12">
                        <label htmlFor="fullname" className="form-label">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullname"
                          name="fullname"
                          defaultValue=""
                          required=""
                          onChange={feedbackForm.handleChange}
                          value={feedbackForm.values.fullname}
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text" style={{}}>
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            defaultValue=""
                            required=""
                            onChange={feedbackForm.handleChange}
                            value={feedbackForm.values.email}
                          />
                        </div>
                      </div>
                      {/*<div className="col-12 col-md-6">
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-telephone"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                          </span>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            defaultValue=""
                            onChange={contactusForm.handleChange}
                            value={contactusForm.values.phone}
                          />
                        </div>
</div>*/}
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">
                          Message <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={3}
                          required=""
                          defaultValue={""}
                          onChange={feedbackForm.handleChange}
                          value={feedbackForm.values.message}
                        />
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className="btn btn-primary btn-lg me-3"
                            type="submit"

                          >
                            Send
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

      </div>
    </div>
    </div>

  )
}

export default Feedback