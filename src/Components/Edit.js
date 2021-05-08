import React from "react";
const Edit = () => {
  return (
    <>
      <div className="container my-4">
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Form
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="name" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="col-md-6">
                    <label for="country" className="form-label">
                      Country
                    </label>
                    <input type="text" className="form-control" id="country" />
                  </div>
                  <div className="col-12">
                    <label for="imgLink" className="form-label">
                      Image Link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="imgLink"
                      placeholder="Image Link"
                    />
                  </div>
                  <div className="col-12">
                    <label for="slogan" className="form-label">
                      Sloga
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="slogan"
                      placeholder="Slogan"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="head_quater" className="form-label">
                      Head Quater
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="head_quater"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="website" className="form-label">
                      Wesite Link
                    </label>
                    <input type="text" className="form-control" id="website" />
                  </div>
                  <div className="col-md-2">
                    <label for="established" className="form-label">
                      Established
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="established"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
