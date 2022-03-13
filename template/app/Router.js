import React, { Component } from 'react';
import { View } from 'react-native';
import { handleAndroidBackButton } from './helpers/androidBackHandler';
import * as NavigationHelpers from './navigation/NavigationHelpers';

export class Router extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.initialize();
            this.startNavigation();
        }, 1000);
    }

    // initial setup
    initialize = () => {
        handleAndroidBackButton(this.onPressBackHandler);
    };

    // initial navigation logic
    startNavigation = () => {
        NavigationHelpers.navigateToHome();
    };

    // global android back handler
    onPressBackHandler = () => {};

    render() {
        return <View />;
    }
}

export default Router;
