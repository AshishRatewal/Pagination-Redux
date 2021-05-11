import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUpdatedData } from '../Redux/Action/Actions';
const Edit = (props) => {
  const dispatch = useDispatch();
  const getEditId = useSelector((state) => state.allEntry.getEditId);
  let mainData, emptyObj;
  if (getEditId !== "") {
    mainData = props.dataObj[getEditId];
    emptyObj = {
      name: mainData.name,
      airline: {
        country: mainData.airline.country,
        established: mainData.airline.established,
        head_quaters: mainData.airline.head_quaters,
        logo: mainData.airline.logo,
        slogan: mainData.airline.slogan,
        website: mainData.airline.website,
      },
    };
  } else {
    mainData = {
      name: "",
      airline: {
        country: "",
        established: "",
        head_quaters: "",
        logo: "",
        slogan: "",
        website: "",
      },
    };
  }
  const [inputUpdate, setInputUpdate] = useState(emptyObj);
  const { airline, name } = mainData;
  const { country, established, head_quaters, logo, slogan, website } = airline;
  const updateEntry = (e) => {
    const { name, value } = e.target;
    if (inputUpdate == undefined) {
      setInputUpdate(emptyObj);
    } else {
      setInputUpdate((prevState) => ({
        ...prevState,
        [name]: value,
        airline: {
          ...prevState.airline,
          [name]: value,
        },
      }));
    }
  };
  const getUpdatData = () => {
    alert("Data Updated");
    dispatch(getUpdatedData(inputUpdate))
  };
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
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      defaultValue={name}
                      onChange={updateEntry}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      name={"country"}
                      defaultValue={country}
                      onChange={updateEntry}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="imgLink" className="form-label">
                      Image Link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="imgLink"
                      name={"logo"}
                      placeholder="Image Link"
                      defaultValue={logo}
                      onChange={updateEntry}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="slogan" className="form-label">
                      Slogan
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="slogan"
                      name={"slogan"}
                      placeholder="Slogan"
                      defaultValue={slogan}
                      onChange={updateEntry}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="head_quater" className="form-label">
                      Head Quater
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="head_quater"
                      name={"head_quaters"}
                      defaultValue={head_quaters}
                      onChange={updateEntry}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="website" className="form-label">
                      Wesite Link
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="website"
                      name={"website"}
                      defaultValue={website}
                      onChange={updateEntry}
                    />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="established" className="form-label">
                      Established
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name={"established"}
                      id="established"
                      defaultValue={established}
                      onChange={updateEntry}
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
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={getUpdatData}
                  data-bs-dismiss="modal"
                >
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
