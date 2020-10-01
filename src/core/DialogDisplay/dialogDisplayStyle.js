import styles from '@bit/totalsoft.react-mui.utils.styles';

const dialogDisplayStyle = (theme) => {
    const { defaultFont } = styles(theme);

    return {
        paper: {
            overflowY: 'visible'
        },
        modalCloseButton: {
            float: "right",
        },
        modalTitle: {
            ...defaultFont,
            display: "inline-block"
        },
        text: {
            ...defaultFont
        },
        content: {
            ...defaultFont,
            overflowY: "visible"
        }
    }
}

export default dialogDisplayStyle;