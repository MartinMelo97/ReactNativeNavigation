import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Item, Label, Input, Button } from 'native-base';
import Header from './Header';
import Footer from './Footer';

class Quantity extends Component {

    constructor(props){
        super(props);
        const aquiPagar = 0;
        const aquiCantidad = 0;
    }

    static navigationOptions = {
            header:null
        };


    render() {
        return (
            <View>
            <Header/>
            <ScrollView>
                <Text>Color: {this.props.navigation.state.params.color.toString()}</Text>
                <Text>Talla: {this.props.navigation.state.params.size.toString()}</Text>
                
                <Item>
                    <Label floatingLabel>Cantidad de playeras</Label>
                    <Input
                    keyboardType = {'numeric'}
                    onChangeText = {(cantidad) => {this.props.navigation.state.params.getQuantity(cantidad); 
                        this.aquiCantidad = this.props.navigation.state.params.traerCantidad();
                        this.props.navigation.state.params.calcularTotal();
                        this.aquiPagar = this.props.navigation.state.params.traerTotal();}}
                    />
                </Item>
                <Button onPress = {()=>this.props.navigation.navigate('Total',
                {color: this.props.navigation.state.params.color.toString(),
                talla: this.props.navigation.state.params.size.toString(),
                cantidad: this.aquiCantidad,
                total: this.aquiPagar    
                })}
                >
                        <Text>Finalizar</Text>
                    </Button>
            </ScrollView>
            <Footer/>
            </View>
        );
    }
}

export default Quantity;