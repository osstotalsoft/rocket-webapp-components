import React from 'react';
import { Card } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Warning from '@material-ui/icons/Warning';
import Typography from '@material-ui/core/Typography';

const Forbidden = () => {
    const { t } = useTranslation();
    return (
        <Card style={{ backgroundColor: "#ffa000", padding: "6px 16px", textAlign: "center" }}>
            <Warning style={{ color: "#fff" }} />
            <Typography style={{ color: "#fff" }}>{t('Forbidden')}</Typography>
        </Card>
    )
}

export default Forbidden;