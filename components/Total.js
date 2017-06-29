import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';

class Total extends Component {
    render() {
        return (
            <View>
                <Header />
                <ScrollView>
                    <Text>Color: {this.props.navigation.state.params.color.toString()}</Text>
                    <Text>Talla: {this.props.navigation.state.params.talla.toString()}</Text>
                    <Text>Cantidad: {this.props.navigation.state.params.cantidad.toString()}</Text>
                    <Text>Total a pagar: {this.props.navigation.state.params.total.toString()}</Text>
                </ScrollView>
                <Footer />
            </View>
        );
    }
}

export default Total;