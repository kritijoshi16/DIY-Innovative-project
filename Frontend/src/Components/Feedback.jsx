import React from 'react'

const Feedback = () => {
  return (
    <div><div className="mx-0 mx-sm-auto">
    <div className="card">
      <div className="card-body">
        <form className="px-2" action="">
          <p className="text-center">
            <strong>How do you rate customer support:</strong>
          </p>
          <ul
            className="h2 rating justify-content-center pb-3"
            data-mdb-rating-init=""
            data-mdb-toggle="rating"
          >
            <li>
              <i className="far fa-star fa-sm text-primary" title="Bad" />
            </li>
            <li>
              <i className="far fa-star fa-sm text-primary" title="Poor" />
            </li>
            <li>
              <i className="far fa-star fa-sm text-primary" title="OK" />
            </li>
            <li>
              <i className="far fa-star fa-sm text-primary" title="Good" />
            </li>
            <li>
              <i className="far fa-star fa-sm text-primary" title="Excellent" />
            </li>
          </ul>
          <p className="text-center">
            <strong>What could we improve?</strong>
          </p>
          {/* Message input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <textarea
              className="form-control"
              id="form4Example6"
              rows={4}
              defaultValue={""}
            />
            <label className="form-label" htmlFor="form4Example6">
              Your feedback
            </label>
          </div>
        </form>
      </div>
      <div className="card-footer text-end">
        <button
          type="button"
          data-mdb-button-init=""
          data-mdb-ripple-init=""
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Feedback