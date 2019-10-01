// import HUE from '@material-ui/core/colors/HUE';
/*eslint no-unused-vars: ["error", { "args": "none" }]*/
/** colours */
import purple from '@material-ui/core/colors/purple';
import cyan from '@material-ui/core/colors/cyan';
import grey from '@material-ui/core/colors/grey';
import { createMuiTheme } from '@material-ui/core/styles';

export const palette = {
  primary: {
    light: '#757ce8',
    main: '#3f50b5',
    dark: '#002884',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff7961',
    main: '#f44336',
    dark: '#ba000d',
    contrastText: '#000',
  },
  cyan: {
    light: cyan[200],
    main: cyan[500],
    dark: cyan[800]
  },
  grey: {
    light: grey[50],
    main: grey[500],
    dark: grey[900],
  },
  purple: {
    light: purple[50],
    main: purple[500],
    dark: purple[900],
  },
  // senary
  // septenary
  // octonary
  // nonary
  // denary
};
const themeName = 'Bay Area';

export default createMuiTheme({ palette, themeName });