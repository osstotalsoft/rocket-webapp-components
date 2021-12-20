import styles from '../../assets/jss/styles.js';

const paginationStyle = theme => {
    const { defaultFont } = styles(theme);

    return {
        floatRight: {
            float: "right"
        },
        refreshButton: {
            lineHeight: "50px",
            float: "right",
            marginRight: "10px"
        },
        paginationActions: {
            lineHeight: "50px",
            float: "right",
            margin: "0px 10px",
            display: "flex"
        },
        selectRoot: {
            margin: "0!important"
        },
        actions: {
            margin: "0px"
        },
        root: {
            margin: "10px"
        },
        select: {
            ...defaultFont
        }
    };
}

export default paginationStyle;