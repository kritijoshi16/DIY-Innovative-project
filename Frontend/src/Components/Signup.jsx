import React from 'react'

const Signup = () => {
  return (
    <div><section className="h-100 bg-dark">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-5 d-none d-xl-block">
                <img
                  src="https://img.freepik.com/free-photo/young-child-making-diy-project-from-upcycled-materials_23-2149391054.jpg"
                  alt="Sample photo"
                  className="img-fluid"
                  style={{
                    borderTopLeftRadius: ".25rem",
                    borderBottomLeftRadius: ".25rem"
                  }}
                />
              </div>
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase"> Signup Form
                  </h3>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init="" className="form-outline">
                        <input
                          type="text"
                          id="form3Example1m"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1m">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init="" className="form-outline">
                        <input
                          type="text"
                          id="form3Example1n"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1n">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example97"
                      className="form-control form-control-lg"
                    />
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
                        <input
                          type="password"
                          id="form3Example97"
                          className="form-control"
                        />
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
                      className="btn btn-light btn-lg"
                    >
                      Reset all
                    </button>
                    <button
                      type="button"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-warning btn-lg ms-2"
                    >
                      Submit form
                    </button>
                  </div>
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

export default Signup