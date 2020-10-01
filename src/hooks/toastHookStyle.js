import styles from '@bit/totalsoft.react-mui.utils.styles';

export const tostHookStyle = theme => {
    const {
        snackDangerBgColor,
        snackWarningBgColor,
        snackSuccessBgColor,
        snackSuccessColor,
        snackWarningColor,
        snackDangerColor
    } = styles(theme);

    return {
        default: { borderRadius: '6px', padding: '6px 20px' },
        success: { backgroundColor: snackSuccessBgColor, color: snackSuccessColor },
        error: { backgroundColor: snackDangerBgColor, color: snackDangerColor },
        warning: { backgroundColor: snackWarningBgColor, color: snackWarningColor },
    }
}