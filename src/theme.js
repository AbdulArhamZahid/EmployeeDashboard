import { createTheme } from '@mui/material/styles';

import { colors } from './colors';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: colors.employees },
        secondary: { main: colors.tasks },
        background: {
            default: '#17140F',
            paper: '#2B2620',
        },
        text: {
            primary: '#F5EFE3',
            secondary: '#B8AF9E',
        },
    },
    shape: { borderRadius: 14 },
})

export default theme;