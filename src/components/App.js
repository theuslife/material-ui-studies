import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../routes/Routes';
import { Provider } from 'react-redux'
import createStore from '../store/store'

const App = (props) => {

    const store = createStore()

    return (
        <Provider store={store}>
            <Router>
                <Routes />
            </Router>
        </Provider>
    )

}

export default App