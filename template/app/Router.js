import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { handleAndroidBackButton } from './helpers/androidBackHandler';

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
    startNavigation = () => {};

    // global android back handler
    onPressBackHandler = () => {};

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Hi</Text>
            </View>
        );
    }
}

export default Router;
