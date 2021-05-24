import styles from '../../assets/jss/styles';

const customDialogStyle = (theme) => {
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
            ...defaultFont
        },
        visible: {
            overflowY: 'visible'
        },
        auto: {
            overflowY: 'auto'
        },
        hidden: {
            overflowY: 'hidden'
        },
        scroll: {
            overflowY: 'scroll'
        }
    }
}

export default customDialogStyle;