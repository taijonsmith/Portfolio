import React from 'react';
import './App.css';
import './custom_components/css/custom_styles.css';
import AppToolbar from './custom_components/app_toolbar';
import Fabs from './custom_components/fabs';
import ScrollToTop from './custom_components/scroll_to_top';
import DialogBox from './custom_components/dialog_box';
import AppContent from './custom_components/app_content';
import { useSelector } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#21b366'
            },
            secondary: {
                main: '#2f2f2f'
            }
        },
        typography: {
            fontFamily: 'inherit'
        }
    });
    const current_prototype = useSelector(state => state.current_prototype);

    React.useEffect(() => {
        window.scrollTo({top: 0});
    }, [current_prototype]);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <section id="header_area">
                    <AppToolbar />
                </section>
                <section id="content_area">
                    <AppContent />
                    <DialogBox />
                </section>
                <section id="action_buttons">
                    <Fabs />
                    <ScrollToTop />
                </section>
            </div>
        </ThemeProvider>
    );
}

export default App;