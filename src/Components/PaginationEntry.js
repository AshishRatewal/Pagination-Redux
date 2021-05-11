import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEntry } from "../Redux/Action/Actions";
import Edit from "./Edit";
import { getEditId } from '../Redux/Action/Actions';
const PaginationEntry = () => {
  const dispatch = useDispatch();
  const [getCloneArray, setCloneArray] = useState([]);
  // const data = useSelector((state) => state.allEntry.setEntry.data);
  const pageNumber = useSelector((state) => state.allEntry.setPageNumber);
  const searchData = useSelector((state) => state.allEntry.searchData);
  const howMuchEntry = useSelector((state) => state.allEntry.howMuchEntry);
  const updateData = useSelector((state) => state.allEntry.updateData);
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
    const { id } = e.target;
    cloneArray.splice(id, 1);
    setCloneArray(cloneArray);
  };
  // end

  // edit entry
  const editEntry = (e) => {
    const { id } = e.target;
    dispatch(getEditId(id));
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
              className="btn btn-warning"
              id={index}
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
      <Edit dataObj={getCloneArray} />
    </>
  );
};
export default PaginationEntry;
