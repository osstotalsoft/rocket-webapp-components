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
        nextButton: {
            lineHeight: "50px",
            float: "right",
            marginRight: "10px",
            marginLeft: "10px"
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