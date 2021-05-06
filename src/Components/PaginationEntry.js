import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setEntry } from "../Redux/Action/Actions";
const PaginationEntry = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allEntry.setEntry.data);
  // get data from api
  useEffect(() => {
    const fetchEntry = async () => {
      const response = await axios
        .get("https://api.instantwebtools.net/v1/passenger?page=10&size=20")
        .catch((err) => {
          console.log("Error", err);
        });
      dispatch(setEntry(response.data));
    };
    fetchEntry();
  }, []);
  // showing the data from redux store;
  const renderList = data && data.map((val, index) => {
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
          <img src={logo} alt={name} />
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
