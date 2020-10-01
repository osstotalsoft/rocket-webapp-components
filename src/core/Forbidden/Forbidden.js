import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import forbiddenStyle from './forbiddenStyle';

const useStyles = makeStyles(forbiddenStyle);

const Forbidden = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Card className={classes.cardStyle}>
            <Typography align={"center"} variant={"h6"} className={classes.textStyle}>{t('Forbidden')}</Typography>
        </Card>
    )
}

export default Forbidden;