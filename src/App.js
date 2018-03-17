/**
 * Created by shuaiwang on 3/15/18.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LogInForm from './components/LogInForm';
import Router from './Router';

class App extends Component {

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyDGOydr-DCM93aSpJaJ5jGlFLcPDTTrj3U",
            authDomain: "manager-a3f5a.firebaseapp.com",
            databaseURL: "https://manager-a3f5a.firebaseio.com",
            projectId: "manager-a3f5a",
            storageBucket: "manager-a3f5a.appspot.com",
            messagingSenderId: "486198216397"
        };
        firebase.initializeApp(config);
    }



    render(){
        const store  = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={ store }>
                <Router />
            </Provider>
        );
    }
}

export default App;