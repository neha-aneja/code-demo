import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <h1 className="text-center">
        Contact Us
      </h1>
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <form>
          <div className="mb-3">
            <label
              for="exampleFormControlInput1"
              className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your Name" />
          </div>
          <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label">
            Contact No.
            </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Mobile No." />
        </div>
        <div className="mb-3">
        <label
          for="exampleFormControlInput1"
          className="form-label">
          Email
            </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label
          for="exampleFormControlTextarea1"
          className="form-label">
          Message:
            </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"></textarea>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
      </form>
    </div>
    </div>
    </div>
  )
}
export default Contact;