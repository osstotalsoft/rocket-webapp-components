import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { TablePagination, makeStyles } from '@material-ui/core';
import paginationStyle from './paginationStyle';
import TablePaginationActions from './PaginationActions';
import RefreshIcon from "@material-ui/icons/Refresh";
import { IconButton } from '@bit/totalsoft_oss.react-mui.kit.core';

const useStyles = makeStyles(paginationStyle);

const displayedRows = rowsOfText => ({ from, to, count }) => {
  return `${from}-${to} ${rowsOfText} ${count}`;
}

export const Pagination = ({ loading, totalCount, pageSize, page, rowsPerPageOptions, onRefresh,
  onPageChange, onRowsPerPageChange, rowsPerPageText, rowsOfText }) => {
  const classes = useStyles();

  const internalChangePage = useCallback((_event, newPage, direction) => {
    onPageChange(newPage, direction);
  }, [onPageChange])

  const internalChangePageSize = useCallback(event => {
    onRowsPerPageChange(event.target.value);
  }, [onRowsPerPageChange])

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
          onPageChange={internalChangePage}
          onRowsPerPageChange={internalChangePageSize}
          labelRowsPerPage={rowsPerPageText}
          labelDisplayedRows={displayedRows(rowsOfText)}
          SelectProps={{
            inputProps: { 'aria-label': 'Rows per page' },
            native: true
          }}
          rowsPerPageOptions={actualRowsPerPage}
        />
      </div>
      <div className={classes.refreshButton}>
        {onRefresh && <IconButton onClick={handleRefresh} color="defaultNoBackground" size='small'>
          <RefreshIcon />
        </IconButton >
        }
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
  /**
  * The total number of pages. This property is required
  */
  totalCount: PropTypes.number.isRequired,

  /**
  * The number of items to be displayed in one page. This property is required
  */
  pageSize: PropTypes.number.isRequired,
  /**
  * The current page. This property is required
  */
  page: PropTypes.number.isRequired,
  /**
  * This function is called when the number of rows per page is changed
  * @param {object} event The event source of the callback.
  */
  onRowsPerPageChange: PropTypes.func,
  /**
  * This function is called when the page is changed
  * @param {object} event The event source of the callback.
  * @param {number} newPage The page you want to navigate
  * @param {number} direction 0 => navigate to a previous page and 1 => navigate to a next page
  */
  onPageChange: PropTypes.func,
  /**
  * The function called on refresh. Thi property is required 
  */
  onRefresh: PropTypes.func.isRequired,
  /**
  * If the pages are loading, thi property is set to true
  */
  loading: PropTypes.bool,
  /**
  * Array of values to choose how many rows should be displayed in a page
  */
  rowsPerPageOptions: PropTypes.array,
  /**
  * The text to be displayed between the number of rows per page and total count
  */
  rowsOfText: PropTypes.string,
  /**
  * The text to be displayed for the number of rows per page
  */
  rowsPerPageText: PropTypes.string
};

export default Pagination;