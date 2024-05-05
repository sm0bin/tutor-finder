import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Ubuntu',
            'sans-serif'
        ].join(','),
        body1: {
            fontSize: '1.25rem',
            lineHeight: '1.75'
        },
    },

});

export default theme;

