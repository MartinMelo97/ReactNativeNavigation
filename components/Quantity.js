import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Item, Label, Input, Button } from 'native-base';
import Header from './Header';
import Footer from './Footer';

class Quantity extends Component {
    render() {
        return (
            <View>
            <Header/>
            <ScrollView>
                <Text>Color: {this.props.navigation.state.params.color.toString()}</Text>
                
                <Item>
                    <Label floatingLabel>Cantidad de playeras</Label>
                    <Input
                    />
                </Item>
                <Button>
                        <Text>Finalizar</Text>
                    </Button>
            </ScrollView>
            <Footer/>
            </View>
        );
    }
}

export default Quantity;