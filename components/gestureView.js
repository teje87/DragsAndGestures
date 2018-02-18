import React, { Component } from 'react';
import {  View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Gestures from 'react-native-easy-gestures';

export default class GestureView extends Component {
    render() {
        return (
            <Gestures
                editable = {this.props.editable}
                draggable={this.props.editable}
                onChange={(event, styles) => {
                    this.setState({styles:this.props.data})
                }}
            >

                <TouchableOpacity disabled={this.props.editable}>
                    <View style={styles.green}></View>
                </TouchableOpacity>
        
            </Gestures>
        );
    }
}

const styles = StyleSheet.create({
    green: {
        height: 75,
        width:200,
        backgroundColor: '#5894f3',
        alignItems: 'center',
        zIndex: 1001
    }
});