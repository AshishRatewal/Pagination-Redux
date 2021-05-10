import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEntry } from "../Redux/Action/Actions";
import Edit from "./Edit";
const PaginationEntry = () => {
  const dispatch = useDispatch();
  const [getCloneArray, setCloneArray] = useState([]);
  const data = useSelector((state) => state.allEntry.setEntry.data);
  const pageNumber = useSelector((state) => state.allEntry.setPageNumber);
  const searchData = useSelector((state) => state.allEntry.searchData);
  const howMuchEntry = useSelector((state) => state.allEntry.howMuchEntry);
  // get data from api
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
  // showing the data from redux store;
  // clonning array from data

  let cloneArray = [];
  if (getCloneArray && getCloneArray !== "") {
    for (let i = 0; i < getCloneArray.length; i++) {
      cloneArray.push(getCloneArray[i]);
    }
  }

  // delete entry section
  const deleteEntry = (e) => {
    const {id} = e.target;
    cloneArray.splice(id, 1);
    setCloneArray(cloneArray);
  };
  // end

  const renderList = getCloneArray
    .filter((vlue) => {
      if (searchData == "") {
        return vlue;
      } else if (vlue.name.toLowerCase().includes(searchData.toLowerCase())) {
        return vlue;
      }
    })
    .map((val, index) => {
      const { airline, name, id } = val;
      const {
        country,
        established,
        head_quaters,
        logo,
        slogan,
        website,
      } = airline;
      return (
        <tr key={id}>
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
              className="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              name={index}
              onClick={(e) => {
                console.log(e.target.name);
              }}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              id={index}
              onClick={deleteEntry}
            >
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
          <table class="table table-hover">
            <tbody>{renderList}</tbody>
          </table>
        </div>
      </div>
      <Edit />
    </>
  );
};
export default PaginationEntry;
