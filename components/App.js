import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import SizeandColor from './SizeandColor';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            talla: '',
            color: '',
            cantidad: 0,
            precio_unitario: 150,
            total: 0
        };
    }

    static navigationOptions = {
        header: null
    }

    saveSize = (size) => {
        this.setState({
            talla: size
        });
       // alert(this.state.talla)
    };

    saveColor = (color) => {
       this.setState({
           color: color
       });
       //alert(this.state.color)
    };

    getQuantity = (cantidad) => {
        this.setState({
            cantidad: cantidad
        });
        //alert(this.state.cantidad)
    };

    getCantidad = () => {
        return this.state.cantidad;
    };

    calculateTotal = () =>
    {
        const total = this.state.cantidad * this.state.precio_unitario;
        this.setState({
            total: total
        });
    };

    getTotal = () => {
        return this.state.total;
    }

    render() {
        return (
            <View>
                <Header />
                <SizeandColor 
                linkto = {()=>this.props.navigation.navigate('Cantidad', {color: this.state.color, size: this.state.talla,
                getQuantity: this.getQuantity, cantidad: this.state.cantidad, total_pagar:this.state.total,
                traerCantidad: this.getCantidad, calcularTotal: this.calculateTotal, traerTotal: this.getTotal})}
                addSize = {this.saveSize}
                addColor = {this.saveColor}
                />
                <Footer />
            </View>
        );  
    }
}

export default App;