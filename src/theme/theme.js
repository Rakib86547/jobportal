const { createTheme } = require("@mui/material");
// let theme = createTheme ( {})

const theme = createTheme({
    palette: {
        primary: {
            main: '#202124',
            secondary: '#696969',
            base: '#1DBF73',
            transparent: '#e3f8e2'
        },
        typography: {
                fontSize: '50px',
                // '@media (max-width:768px)': {
                //     fontSize: '40px',
                // },
                // '@media (max-width:425px)': {
                //     fontSize: '26px',
                // },
        },
        breakpoints: {
            values: {
                xs: '0px',
                sm: '425px',
                md: '768px',
                lg: "1300px",
                xl: '1536px',
            },
        },
    }
});
theme.typography.h3 = {
    fontSize: '50px',
    '@media (max-width:768px)': {
        fontSize: '40px',
      },
    '@media (max-width:425px)': {
        fontSize: '26px',
      },
}
export default theme;