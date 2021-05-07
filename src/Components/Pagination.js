import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber } from "../Redux/Action/Actions";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function BasicPagination() {
  const totalPages = useSelector((state) => state.allEntry.setEntry.totalPages);
  const dispatach = useDispatch();
  const classes = useStyles();
  const handleChangePage = (e,page) => {
    dispatach(setPageNumber(page));
  };
  return (
    <div className={classes.root}>
      <Pagination
        count={totalPages && totalPages - 1}
        onChange={handleChangePage}
        color="primary"
      />
    </div>
  );
}
