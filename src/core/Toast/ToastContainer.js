import React from 'react';
import PropTypes from "prop-types";
import { ToastContainer as Container, Slide } from 'react-toastify';
import { toastStyle } from './toastStyle';
import { makeStyles } from "@material-ui/core";
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles(toastStyle);

const ToastContainer = ({ position, autoClose, hideProgressBar, rtl, ...other }) => {
    const classes = useStyles();
    return <Container
        position={position}
        transition={Slide}
        autoClose={autoClose}
        hideProgressBar={hideProgressBar}
        closeOnClick
        rtl={rtl}
        pauseOnFocusLoss
        newestOnTop
        draggable
        pauseOnHover
        limit={5}
        className={classes.toastWrapper}
        {...other}
    />
}

ToastContainer.defaultProps = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    rtl: false,
    limit: 5
}

ToastContainer.propTypes = {
    position: PropTypes.string.isRequired,
    autoClose: PropTypes.number.isRequired,
    hideProgressBar: PropTypes.bool.isRequired,
    rtl: PropTypes.bool.isRequired,
    limit: PropTypes.number.isRequired
}

export default ToastContainer;
