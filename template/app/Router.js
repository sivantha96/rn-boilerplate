import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler, View } from 'react-native';
import { connect } from 'react-redux';
import { handleAndroidBackButton } from './helpers/androidBackHandler';
import { MAIN_STACK_SCREENS } from './navigation/constants';
import { setI18nConfig } from './config/i18n';
import NavigationServices from './navigation/NavigationServices';
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
        setI18nConfig(this.props.language);
    };

    // initial navigation logic
    startNavigation = () => {
        NavigationHelpers.navigateToHome();
    };

    // global android back handler
    onPressBackHandler = () => {
        const currentRoute = NavigationServices.getCurrentRoute();
        if (!currentRoute) {
            return;
        }

        switch (currentRoute?.name) {
            case MAIN_STACK_SCREENS.ROUTER:
                BackHandler.exitApp();
                break;

            default:
                NavigationServices.goBack();
                break;
        }
    };

    render() {
        return <View />;
    }
}

Router.propTypes = {
    language: PropTypes.string,
};

const mapStateToProps = state => {
    return {
        language: state.appReducer.language,
    };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
