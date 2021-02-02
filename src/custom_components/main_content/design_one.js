import React from 'react';
import '../css/design_one.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppCard from '../app_card';


export default function DesignOne() {
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
            <div id="design_one">
                <Typography variant="h6">Subheader 1</Typography>
                <AppCard />
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
        </ThemeProvider>
    );
}