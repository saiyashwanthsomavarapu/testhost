import { createTheme, responsiveFontSizes } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
    }
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
    }
    interface Palette {
        teal: Palette['primary'];
    }
    interface PaletteOptions {
        teal: PaletteOptions['primary'];
    }
}

let theme = createTheme({
    palette: {
        background: {
            default: '#ffffff',
            paper: '#f7f7f7'
        },
        primary: {
            main: '#005f9e',
            dark: '#002d72'
        },
        secondary: {
            main: '#00aea9',
            dark: '#004c46'
        },
        info: {
            main: '#009cdc',
            light: '#d9f0fa'
        },
        success: {
            main: '#00965e'
        },
        error: {
            main: '#d91943',
            light: '#fadde3',
            dark: '#b42573'
        },
        neutral: {
            main: '#aca39a',
            light: '#f2f2f2'
        },
        teal: {
            main: '#2dccd3'
        },
        text: {
            primary: '#030303',
            secondary: '#7f7f7f',
            disabled: '#e2e2e2'
        }
    },
    typography: {
        fontFamily: 'AvenirNextLTCom',
        body2: {
            fontSize: '0.9rem',
        },
    },
    components: {
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    borderColor: '#005f9e',
                    color: 'black',
                    '&.Mui-selected': {
                        backgroundColor: '#005f9e',
                        color: 'white'
                    },
                    "&.Mui-selected:hover": {
                        backgroundColor: '#005f9e'
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: '1.7rem',
                    fontFamily: 'AvenirNextLTCom',
                    fontWeight: 800,
                    textTransform: 'none',
                    minWidth: 'fit-content',
                    '&.Mui-selected': {
                        color: '#030303'
                    }
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#009cdc'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white'
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: '30px',
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    backgroundColor: '#009cdc',
                    color: 'white',
                    position: 'fixed',
                    bottom: '50px',
                    right: '50px', 
                    margin: 0,
                    width: '75px',
                    height: '75px',
                    top: 'auto',
                    left: 'auto',
                    "&:hover": {
                        backgroundColor: '#009cdc'
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: "1rem",
                    padding: '15px',
                    color: 'black',
                    backgroundColor: 'white',
                    border: "1.5px solid #e2e2e2",
                    boxShadow: '1px 1px 1px 1px #e2e2e2',
                    lineHeight: 1.5
                },
                arrow: {
                    "&:before": {
                      border: "1px solid #e2e2e2"
                    },
                    color: 'white',
                },
            },
        },
    }
});
theme = responsiveFontSizes(theme);

export default theme;
