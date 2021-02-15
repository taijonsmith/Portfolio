import React from 'react';
import './App.css';
import './custom_components/css/custom_styles.css';
import AppToolbar from './custom_components/toolbar';
import MenuDrawer from './custom_components/menu_drawer';
import Fabs from './custom_components/fabs';
import ScrollToTop from './custom_components/scroll_to_top';
import DialogBox from './custom_components/dialog_box';
import PersonIcon from '@material-ui/icons/Person';
import TvIcon from '@material-ui/icons/Tv';
import DesignOne from './custom_components/main_content/design_one';
import DesignTwo from './custom_components/main_content/design_two';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


function App() {
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

  const tabs = [
    {label: 'Actors', icon: <PersonIcon />},
    {label: 'Placeholder 1', icon: <TvIcon />},
    {label: 'Placeholder 2', icon: <TvIcon />},
    {label: 'Placeholder 3', icon: <TvIcon />},
    {label: 'Placeholder 4', icon: <TvIcon />},
    {label: 'Placeholder 5', icon: <TvIcon />},
    {label: 'Placeholder 6', icon: <TvIcon />},
    {label: 'Placeholder 7', icon: <TvIcon />}
  ];

  return (
  <ThemeProvider theme={theme}>
    <div className="App">
      <section id="header_area">
        <AppToolbar className="main_toolbar"/>
        <MenuDrawer />
      </section>
      <section id="content_area">
        <DialogBox />
        <DesignOne tabs={tabs} />
      </section>
      <section id="action_buttons">
        <Fabs />
        <ScrollToTop />
      </section>
    </div></ThemeProvider>
  );
}

export default App;