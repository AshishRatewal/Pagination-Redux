import React from "react";
const Edit = () => {
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Edit Form</h1>
          </div>
        </div>
        {/**  The form  **/}
        <form class="row g-3">
          <div class="col-md-6">
            <label for="name" class="form-label">
              Name
            </label>
            <input type="text" class="form-control" id="name" />
          </div>
          <div class="col-md-6">
            <label for="country" class="form-label">
              Country
            </label>
            <input type="text" class="form-control" id="country" />
          </div>
          <div class="col-12">
            <label for="imgLink" class="form-label">
              Image Link
            </label>
            <input
              type="text"
              class="form-control"
              id="imgLink"
              placeholder="Image Link"
            />
          </div>
          <div class="col-12">
            <label for="slogan" class="form-label">
              Sloga
            </label>
            <input
              type="text"
              class="form-control"
              id="slogan"
              placeholder="Slogan"
            />
          </div>
          <div class="col-md-6">
            <label for="head_quater" class="form-label">
              Head Quater
            </label>
            <input type="text" class="form-control" id="head_quater" />
          </div>
          <div class="col-md-4">
            <label for="website" class="form-label">
              Wesite Link
            </label>
            <input type="text" class="form-control" id="website" />
          </div>
          <div class="col-md-2">
            <label for="established" class="form-label">
              Established
            </label>
            <input type="text" class="form-control" id="established" />
          </div>
          <div class="col-12">
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
