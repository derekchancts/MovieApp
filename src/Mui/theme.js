
import { createTheme } from '@mui/material/styles';
import { purple, green, red, yellow, orange, blue, pink } from '@mui/material/colors';



const theme = createTheme({
  palette: {
    // primary: green,
    secondary: red,
    // mode: toggleMode ? 'dark' : 'light',

    // primary: {
      // main: '#fffeee'
      // main: purple[300]
      // main: '#000'
    // }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  // status: {
  //   danger: 'orange'
  // },
  
  // typography: {
  //   h2: {
  //     fontSize: '3rem'
  //   }
  // },
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          // backgroundColor: 'yellow'
          // color: 'white'
        },
        defaultProps: {
         
        }  
      },
    }
  }

})


export const darkTheme = createTheme({
  palette: {
    primary: {
      // main: "#fff",
      main: '#c51162',
      // main: "hsl(223, 70%, 80%);",
    },
    // secondary: yellow,
    mode: 'dark'
  } 
});


export const searchTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      // main: '#c51162',
      // main: "hsl(223, 70%, 80%);",
    },
    secondary: {
      main: "#fff"
    },
    mode: 'dark'
  } 
});


// export const darkThemeSearch = createTheme({
//   palette: {
//     primary: {
//       main: "#fff",
//     },
//     mode: 'dark'
//   }
// });


export const singletonTheme = createTheme({
  palette: {
    // primary: {
    //   main: blue[300],
    // },
    // secondary: {
    //   main: red[300]
    // }
    primary: blue,
    secondary: pink
  }
})


export default theme;