import DefaultLogo from '@bit/totalsoft_oss.react-mui.default-logo'

const defaultFont = {
  fontFamily: 'Source Sans Pro',
  fontSize: 14,
  lineHeight: '1.5em'
}

const palette = {
  primary: {
    main: '#00529f'
  },
  secondary: {
    main: '#005B94'
  },
  text: {
    dark: 'rgb(3, 19, 3)',
    white: 'rgb(255, 255, 255)',
    darkGrey: 'rgb(169,169,169)',
    highlight: 'rgb(36, 76, 140)',
    primary: '#343434'
  },
  sideMenu: {
    bkColor: 'white',
    activeLinkColor: '#fff',
    activeBkColor:'#00529f', 
    activeBk: 'linear-gradient(60deg, #00529f, #00aeef)' ,
    hoverBgColor: '#DFF2FD',
    hoverTextColor: '#00529f',
    color: '#00529f',
    bkOpacity: '1',
    focusBgColor: '#2273ab'
  },
  topBar: {
    bkColor: '#FFFF'
  },
  timColors: {
    primary: '#00529f',
    primaryRGBA: 'rgba(0, 73, 123, 0.28)',
    warningColor: '#FF7900',
    dangerColor: '#f55',
    successColor: '#01B25A',
    infoColor: '#005B94',
    lightBackground: '#BCE4FA',
    blueColor: '#26C6DA',
    themeColor: '#00529f',
    themeColorGradient:['#00529f', '#00aeef'],
    themeColorRGBA: 'rgba(0, 91, 148, 0.4)',
    themeShadowColor: '#26C6DA',
    themeShadowColorRGBA: 'rgb(188 228 250)',
    roseColor: '#e91e63',
    grayColor: '#999999',
    blackColor: '#000',

  },
  snackbar: {
    infoBgColor: '#ccf1ff',
    infoColor: '#555555',
    dangerBgColor: '#f44336',
    dangerColor: '#ffffff',
    successBgColor: '#36b37e',
    successColor: '#ffffff',
    warningBgColor: '#ff9800',
    warningColor: '#ffffff'
  },
  card: {
    gray500: '#D7D7D7',
    orange800: '#B35500',
    orange500: '#FF7900',
    orange400: '#FF861A',
    green500: '#01B25A',
    green400: '#1ABA6B',
    blue500: '#0065AC',
    blue400: '#1A74B4',
    red400: '#FF6666',
    red500: '#FF5555'
  },
  amount: {
    positive: '#01b25a',
    negative: '#f55',
    faded: '#60768f',
    active: '#00a8ff'
  },
  bg: {
    main: '#efeff8' 
  },
  activeColor: '#00529f',
  button: {
    theme: '#00529f',
    themeHoverBk: 'transparent',
    themeHoverColor: '#00497b',
    themeHoverShadow:
      '0 2px 2px 0 rgba(188, 228, 250, 0.42), 0 3px 1px -2px rgba(188, 228, 250, 0.12), 0 1px 5px 0 rgba(188, 228, 250, 0.2)',
    themeShadow: '0 2px 2px 0 rgba(188, 228, 250, 0.14), 0 3px 1px -2px rgba(188, 228, 250, 0.2), 0 1px 5px 0 rgba(188, 228, 250, 0.12)'
  }
}

export const theme = {
  logo: DefaultLogo,
  input: {
    height: '1.1875em'
  },
  defaultFont,
  palette,
  typography: {
    ...defaultFont,
    useNextVariants: true,
    htmlFontSize: 14,
    fontWeightMedium: 300,
    button: {
      ...defaultFont,
      textAlign: 'center',
      fontStretch: 'normal',
      fontStyle: 'normal'
    },
    body: {
      ...defaultFont,
      fontSize: 14
    }
  },
  overrides: {
    MuiCollapse: {
      entered: {
        height: 'auto',
        overflow: 'visible'
      }
    },
    MuiCardHeader: {
      content: {
        width: '100%'
      }
    },
    MuiDivider: {
      root: {
        height: '2px'
      }
    },
    MuiTablePagination: {
      actions: {
        marginLeft: 0
      },
      toolbar: {
        paddingLeft: 0
      }
    }
  },
  table: {
    main: {
      marginTop: '15px',
      marginBottom: '15px',
      borderSpacing: 0
    },
    tableHeader: {
      textAlign: 'left',
      backgroundColor: 'white',
      padding: '10px',
      borderBottom: '1px solid #ddd',
      color: '#00529f'
    },
    tableContent: {
      textAlign: 'left',
      padding: '10px ',
      borderBottom: '1px solid #eee'
    },
    itemSelected: {
      background: '#c1c1c1',
      color: 'white'
    }
  },
  autoComplete: {
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
      paddingBottom: '5px'
    },
    input: {
      fontFamily: 'Source Sans Pro !important',
      fontSize: '14px !important',
      fontWeight: 'normal !important',
      fontStretch: 'normal !important',
      fontStyle: 'normal !important',
      lineHeight: '1.29 !important',
      color: '#a8a8a8 !important'
    },
    selectedInputColor: '#000',
    hoverBgColor: 'rgba(0, 0, 0, 0.08)',
    hoverTextColor: palette.text.primary,
    selectedBgColor: 'rgba(0, 0, 0, 0.14)',
    selectedTextColor: palette.text.primary
  },
  card: {
    height: 'auto',
    width: 'auto',
    borderRadius: '5px',
    boxShadow: '0 2px 9px 0 rgba(0, 0, 0, 0.14)',
    backgroundColor: '#ffffff'
  },
  header: {
    title: {
      borderRadius: '3px',
      textTransform: 'none',
      fontWeight: 'bold',
      color: palette.primary.main,
      '&:hover,&:focus': {
        background: 'transparent'
      }
    },
    titleMobile: {
      borderRadius: '3px',
      textTransform: 'none',
      fontWeight: 'bold',
      color: palette.primary.main,
      '&:hover,&:focus': {
        background: 'transparent'
      }
    }
  }
}
