import styles from '../../assets/jss/styles';

export const toastStyle = theme => {
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
        toastWrapper: { borderRadius: '6px', width: '500px', overflowWrap: 'anywhere' }
    }
}