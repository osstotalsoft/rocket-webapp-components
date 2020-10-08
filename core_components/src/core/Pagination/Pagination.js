import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { TablePagination, makeStyles } from '@material-ui/core';
import paginationStyle from './paginationStyle';
import TablePaginationActions from './PaginationActions';
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from '../IconButton';

const useStyles = makeStyles(paginationStyle);

export const Pagination = ({ loading, totalCount, pageSize, page, rowsPerPageOptions, onRefresh,
  onChangePage, onChangeRowsPerPage, rowsPerPageText, rowsOfText }) => {
  const classes = useStyles();

  const displayedRows = useCallback(({ from, to, count }) => {
    return `${from}-${to} ${rowsOfText} ${count}`;
  }, [t])

  const internalChangePage = useCallback((_event, newPage, direction) => {
    onChangePage(newPage, direction);
  }, [onChangePage])

  const internalChangePageSize = useCallback(event => {
    onChangeRowsPerPage(event.target.value);
  }, [onChangeRowsPerPage])

  const actualRowsPerPage = rowsPerPageOptions ? rowsPerPageOptions : [10, 25, 50, 100];

  const handleRefresh = useCallback(() => onRefresh(), [onRefresh])

  return !loading && (
    <div>
      <div className={classes.floatRight}>
        <TablePagination
          ActionsComponent={TablePaginationActions}
          component="div"
          count={totalCount}
          rowsPerPage={pageSize}
          page={page}
          onChangePage={internalChangePage}
          onChangeRowsPerPage={internalChangePageSize}
          labelRowsPerPage={rowsPerPageText}
          labelDisplayedRows={displayedRows}
          SelectProps={{
            inputProps: { 'aria-label': 'Rows per page' },
            native: true
          }}
          rowsPerPageOptions={actualRowsPerPage}
        />
      </div>
      <div className={classes.refreshButton}>
        <IconButton onClick={handleRefresh} color="defaultNoBackground">
          <RefreshIcon />
        </IconButton >
      </div>
    </div>
  );
}

Pagination.defaultProps = {
  onRefresh: () => { },
  rowsOfText: "of",
  rowsPerPageText: "Rows per page",
}

Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChangeRowsPerPage: PropTypes.func,
  onChangePage: PropTypes.func,
  onRefresh: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  rowsPerPageOptions: PropTypes.array,
  rowsOfText: PropTypes.string,
  rowsPerPageText: PropTypes.string
};

export default Pagination;