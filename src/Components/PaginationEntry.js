import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEntry } from "../Redux/Action/Actions";
const PaginationEntry = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allEntry.setEntry.data);
  let pageNumber = useSelector((state) => state.allEntry.setPageNumber);
  let searchData = useSelector((state) => state.allEntry.searchData);
  // get data from api
  const fetchEntry = async (pageNum) => {
    console.log("page number   ", pageNum);
    const response = await axios
      .get(
        `https://api.instantwebtools.net/v1/passenger?page=${pageNum}&size=20`
      )
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setEntry(response.data));
  };
  useEffect(() => {
    fetchEntry(pageNumber);
  }, [pageNumber]);
  // showing the data from redux store;
  const renderList = data && data
    .filter((vlue) => {
      if (searchData == "") {
        return vlue;
      } else if (vlue.name.toLowerCase().includes(searchData.toLowerCase())) {
        return vlue;
      }
    })
    .map((val, index) => {
      const { airline, name, trips, id } = val;
      const {
        country,
        established,
        head_quaters,
        logo,
        slogan,
        website,
      } = airline;
      return (
        <tr>
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
    </>
  );
};
export default PaginationEntry;
