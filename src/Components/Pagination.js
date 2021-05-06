import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function BasicPagination() {
  const totalPages = useSelector((state) => state.allEntry.setEntry.totalPages);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={totalPages && totalPages} color="primary" />
    </div>
  );
}
