import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            // padding: '5px',
          },
        }
      },
      defaultProps: {
        size: "small",
        // sx={height:"20px"}
      }
    }
  }
});

export default theme;