import React, { Component } from 'react';
import { Provider } from 'react-redux'
import createStore from './src/redux'
const store = createStore()
import RootStackNavigator from './src/navigation/root.navigation'

export default class App extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Provider store={store}>
                <RootStackNavigator firstScreen={'TabHome'} />
            </Provider>
        )
    }
}