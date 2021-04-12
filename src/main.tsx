import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {CssBaseline} from "@material-ui/core";
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '@/store'
import 'fontsource-roboto';
import {ThemeProvider} from '@material-ui/core'
import theme from '@/theme'

ReactDOM.render(<>
        <Router>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <App/>
                </ThemeProvider>
            </Provider>
        </Router>
    </>,
    document.getElementById('root')
)
