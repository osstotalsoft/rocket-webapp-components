import styles from '@bit/totalsoft_oss.react-mui.styles';

const paginationStyle = theme => {
    const { defaultFont } = styles(theme);

    return {
        floatRight: {
            float: "right"
        },
        refreshButton: {
            lineHeight: "50px",
            float: "right"
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