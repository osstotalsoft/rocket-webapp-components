import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '../IconButton';
import paginationStyle from './paginationStyle';

const useStyles = makeStyles(paginationStyle);

function TablePaginationActions({ count, page, rowsPerPage, onPageChange }) {
    const classes = useStyles();

    const handleBackButtonClick = useCallback(event => {
        onPageChange(event, page - 1, 0);
    }, [onPageChange, page])

    const handleNextButtonClick = useCallback(event => {
        onPageChange(event, page + 1, 1);
    }, [onPageChange, page])

    return (
        <div className={classes.paginationActions}>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="Previous Page"
                size="small"
                color="defaultNoBackground"
            >
                <KeyboardArrowLeft />
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="Next Page"
                size="small"
                color="defaultNoBackground"
            >
                <KeyboardArrowRight />
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired
};

export default TablePaginationActions;