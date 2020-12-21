import React, {Component} from 'react';
import './css/design_one.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import ScrollToTop from './scroll_to_top';


class DesignOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile_mode: props.mobile_mode,
            show_menu: false
        };
        this.selected = props.selected;
        this.drawer = React.createRef();
        this.theme = createMuiTheme({
            palette: {
                primary: {
                main: '#18d06f'
                }
            },
            typography: {}
        });
    }

    componentDidMount() {
        //
    }

    componentDidUpdate(prevProps, prevState) {
        //
    }

    debouncer = (func, wait) => { //callback func must be passed in
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
            clearTimeout(timeout);
            func(...args);
            };
        
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    toggle_menu(e) {
        if (e) {
          this.setState({show_menu: !this.state.show_menu});
        }
      }

    


    render() {
        return (
            <ThemeProvider theme={this.theme}>
                <section id="header_area">
                    <AppBar>
                        <Toolbar className="toolbar">
                            <div id="toolbar_content">
                                <IconButton id="menu_button" edge="start" color="inherit" aria-label="menu" onClick={(e) => this.toggle_menu(e)}>
                                    <MenuIcon />
                                </IconButton>
                                <div id="name_container">
                                    <Typography id="name" variant="h6">Prototype 1</Typography>
                                </div>
                                <div className="user_buttons">
                                    <div className="notifications">
                                        <IconButton color="inherit" aria-label="notifications">
                                            <Badge badgeContent={2} color="secondary">
                                            <NotificationsIcon></NotificationsIcon>
                                            </Badge>
                                        </IconButton>
                                    </div>
                                    <div className="messages">
                                        <IconButton color="inherit" aria-label="messages">
                                            <Badge badgeContent={1} color="secondary">
                                                <EmailIcon></EmailIcon>
                                            </Badge>
                                        </IconButton>
                                    </div>
                                    <div className="account">
                                        <IconButton color="inherit" aria-label="account">
                                            <AccountCircle></AccountCircle>
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </section>
                

                <Drawer ref={this.drawer} id="left_drawer" className="side_drawer" open={this.state.show_menu} variant="persistent">
                    <List id="drawer_list">
                        <ListItem button className="flex-container list_item">
                            <ListItemIcon className="menu_icon">
                            <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>
                        <ListItem button className="flex-container list_item">
                            <ListItemIcon className="menu_icon">
                            <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItem>
                    </List>
                </Drawer>

            
                <section id="content_area">
                    <div id="content">
                        <Paper elevation={3}>
                            <h3>Example 1</h3>
                        </Paper>
                        <Paper elevation={3}>
                        <h3>Example 2</h3>
                        </Paper>
                        <Paper elevation={3}>
                        <h3>Example 3</h3>
                        </Paper>
                        
                    </div>
                    <ScrollToTop></ScrollToTop>
                    <Fade in>
                        <div id="main_fabs">
                            <Fab className="fabs" color="primary">
                                <EditIcon />
                            </Fab>
                            <Fab className="fabs" color="primary">
                                <SearchIcon />
                            </Fab>
                        </div>
                    </Fade>
                </section>

                {/*<TabContext value={this.selected}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={this.selected}
                        aria-label="Vertical tabs example"
                    >
                        <Tab label="Item One" value="1"/>
                    </Tabs>
                    <TabPanel value="1" index={1}>
                        Item One
                    </TabPanel>
                </TabContext>*/}
                <section id="footer">
                    <footer><a id="github_link" href="https://github.com/taijonsmith">Visit My GitHub Page!</a></footer>
                </section>
            </ThemeProvider>
        );
    }
}

export default DesignOne;