import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import i18n from 'i18n-js';
import Icon from 'react-native-vector-icons/FontAwesome';

export class HomeContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{i18n.t('general.welcome')}</Text>
                <Text>{i18n.t('home.title')} Container Works</Text>
                <Text>
                    From {i18n.t('home.title')} Reducer - {this.props.test}
                </Text>
                <Icon name="rocket" size={30} color="#900" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mapStatesToProps = state => ({
    test: state.homeReducer.test,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStatesToProps, mapDispatchToProps)(HomeContainer);
