import { TablePaginationProps } from '@material-ui/core/TablePagination'

export interface Props {

    /**
     * The total number of pages. This property is required
     */
    totalCount: number;

    /**
     * The number of items to be displayed in one page. This property is required
     */
    pageSize: number;

    /**
     * The current page. This property is required
     */
    page: number;

    /**
     * This function is called when the number of rows per page is changed
     * @param {object} event The event source of the callback.
     */
    onChangeRowsPerPage?: (event: React.SyntheticEvent) => void;

    /**
     * This function is called when the page is changed
     * @param {object} event The event source of the callback.
     * @param {number} newPage The page you want to navigate
     * @param {number} direction 0 => navigate to a previous page and 1 => navigate to a next page
     */
    onChangePage?: (event: React.SyntheticEvent, newPage: number, direction: 0 | 1) => void;

    /**
     * The function called on refresh. Thi property is required
     * @default () => { }
     */
    onRefresh: () => void;

    /**
     * If the pages are loading, thi property is set to true
     */
    loading?: boolean;

    /**
     * Array of values to choose how many rows should be displayed in a page
     * @default [10, 25, 50, 100]
     */
    rowsPerPageOptions?: number[];

    /**
     * The text to be displayed between the number of rows per page and total count
     * @default "of"
     */
    rowsOfText?: string;

    /**
     * The text to be displayed for the number of rows per page
     * @default "Rows per page"
     */
    rowsPerPageText?: string;

    /**
     * Demos:
     * 
     * - https://bit.dev/totalsoft_oss/react-mui/pagination
     * 
     *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/develop/components/Pagination/Pagination.js
     */

}

export type PaginationProps = Props | TablePaginationProps

export default function Pagination(props: PaginationProps): JSX.Element;