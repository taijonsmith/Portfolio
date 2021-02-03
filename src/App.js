import React from 'react';
import './App.css';
import './custom_components/css/custom_styles.css';
import AppToolbar from './custom_components/toolbar';
import MenuDrawer from './custom_components/menu_drawer';
import Fabs from './custom_components/fabs';
import ScrollToTop from './custom_components/scroll_to_top';
import DialogBox from './custom_components/dialog_box';
import DesignOne from './custom_components/main_content/design_one';
import DesignTwo from './custom_components/main_content/design_one';
import { useSelector } from 'react-redux';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


function App() {
  const current_prototype = useSelector(state => state.current_prototype);
  const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#21b366'
        },
        secondary: {
            main: '#3b3e42'
        }
    },
    typography: {
        fontFamily: 'inherit'
    }
  });

  return (
  <ThemeProvider theme={theme}>
    <div className="App">
      <section id="header_area">
        <AppToolbar />
        <MenuDrawer />
      </section>
      <section id="content">
        <DialogBox />
        <DesignOne hidden={current_prototype !== 1} /> {/* add transitions */}
        <DesignTwo hidden={current_prototype !== 2} />
      </section>
      <section id="action_buttons">
        <Fabs />
        <ScrollToTop />
      </section>
    </div></ThemeProvider>
  );
}

export default App;