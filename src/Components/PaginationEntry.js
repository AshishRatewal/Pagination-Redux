import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEntry } from "../Redux/Action/Actions";
const PaginationEntry = () => {
  const dispatch = useDispatch();
  const [getCloneArray, setCloneArray] = useState([]);
  const pageNumber = useSelector((state) => state.allEntry.setPageNumber);
  const searchData = useSelector((state) => state.allEntry.searchData);
  const howMuchEntry = useSelector((state) => state.allEntry.howMuchEntry);
  const [updateId, setUpdateId] = useState("");
  let emptyObj = {
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
  const [inputUpdate, setInputUpdate] = useState(emptyObj);

  // get data from api*************************************************
  const fetchEntry = async (pageNum, noOfEntry) => {
    const response = await axios
      .get(
        `https://api.instantwebtools.net/v1/passenger?page=${pageNum}&size=${noOfEntry}`
      )
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setEntry(response.data));
    setCloneArray(response.data.data);
  };
  useEffect(() => {
    fetchEntry(pageNumber, howMuchEntry);
  }, [pageNumber, howMuchEntry]);

  /****************************** */

  let cloneArray = [];
  if (getCloneArray && getCloneArray !== "") {
    for (let i = 0; i < getCloneArray.length; i++) {
      cloneArray.push(getCloneArray[i]);
    }
  }

  // delete entry section
  const deleteEntry = (e) => {
    const { id } = e.target;
    cloneArray.splice(id, 1);
    setCloneArray(cloneArray);
  };
  // end

  // edit entry
  const editEntry = (e) => {
    const { name } = e.target;
    setUpdateId(name);
    let setData = cloneArray[name];
    emptyObj = {
      name: setData.name,
      airline: {
        country: setData.airline.country,
        established: setData.airline.established,
        head_quaters: setData.airline.head_quaters,
        logo: setData.airline.logo,
        slogan: setData.airline.slogan,
        website: setData.airline.website,
      },
    };
    setInputUpdate(emptyObj);
  };

  const updateStateObject = (e) => {
    const { name, value } = e.target;
    setInputUpdate((prevState) => ({
      ...prevState,
      [name]: value,
      airline: {
        ...prevState.airline,
        [name]: value,
      },
    }));
  };

  const updateFun = () => {
    console.log("update data from ", updateId);
    cloneArray.splice(updateId, 1, inputUpdate);
    setCloneArray(cloneArray);
    let blankObj = {
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
    setInputUpdate(blankObj);
    alert("Data Updated");
  };

  // end
  const renderList = getCloneArray
    .filter((vlue) => {
      if (searchData === "") {
        return vlue;
      } else if (vlue.name.toLowerCase().includes(searchData.toLowerCase())) {
        return vlue;
      }
      return 0;
    })
    .map((val, index) => {
      const { airline, name } = val;
      const { country, established, head_quaters, logo, slogan, website } =
        airline;
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{name}</td>
          <td>{country}</td>
          <td>
            <img src={logo} alt={name} className="images" />
          </td>
          <td>{slogan}</td>
          <td>{head_quaters}</td>
          <td>
            <a href={website}>{website}</a>
          </td>
          <td>{established}</td>
          <td>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className={`btn btn-warning`}
              name={index}
              onClick={editEntry}
            >
              Edit
            </button>
          </td>
          <td>
            <button className="btn btn-danger" id={index} onClick={deleteEntry}>
              Delete
            </button>
          </td>
        </tr>
      );
    });

  return (
    <>
      <div className="container-fluid">
        <div className="row overflow-auto w-100">
          <table className="table table-hover">
            <tbody>{renderList}</tbody>
          </table>
        </div>
      </div>

      {/**edit area**/}
      <div className="container my-4">
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <form>
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
                        value={inputUpdate.name}
                        defaultValue={inputUpdate.name}
                        onChange={updateStateObject}
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
                        value={inputUpdate.airline.country}
                        defaultValue={inputUpdate.airline.country}
                        onChange={updateStateObject}
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
                        value={inputUpdate.airline.logo}
                        defaultValue={inputUpdate.airline.logo}
                        onChange={updateStateObject}
                        placeholder="Image Link"
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
                        value={inputUpdate.airline.slogan}
                        defaultValue={inputUpdate.airline.slogan}
                        onChange={updateStateObject}
                        placeholder="Slogan"
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
                        value={inputUpdate.airline.head_quaters}
                        defaultValue={inputUpdate.airline.head_quaters}
                        onChange={updateStateObject}
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
                        value={inputUpdate.airline.website}
                        defaultValue={inputUpdate.airline.website}
                        onChange={updateStateObject}
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
                        value={inputUpdate.airline.established}
                        defaultValue={inputUpdate.airline.established}
                        onChange={updateStateObject}
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
                    data-bs-dismiss="modal"
                    onClick={updateFun}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default PaginationEntry;
