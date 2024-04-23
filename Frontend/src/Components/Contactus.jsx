import React from 'react'
import DIY from "../assets/DIY.jpg"

const Contactus = () => {
  return (
    <div><>
    {/* Contact 4 - Bootstrap Brain Component */}
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h3 className="fs-6 text-secondary mb-2 text-uppercase text-center">
              Get in Touch
            </h3>
            <h2 className="display-5 mb-4 mb-md-5 text-center">
              We're always on the lookout to work with new clients.
            </h2>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-xl-center">
          <div className="col-12 col-lg-6" style={{}}>
          <img src={DIY}alt="diy" />
            <img
              className="img-fluid rounded"
              loading="lazy"
              src="./assets/img/contact-img-1.jpg"
              alt=""
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <div className="bg-white border rounded shadow-sm overflow-hidden">
                  <form action="#!">
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
                        />
                      </div>
                      <div className="col-12 col-md-6">
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
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
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
                          />
                        </div>
                      </div>
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
                        />
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className="btn btn-primary btn-lg"
                            type="submit"
                          >
                            Send Message
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
    </section>
  </>  
  </div>
  )
}

export default Contactus