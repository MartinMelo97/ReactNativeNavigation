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
    };

    saveColor = (color) => {
       this.setState({
           color: color
       });
       alert(this.state.color)
    };

    render() {
        return (
            <View>
                <Header />
                <SizeandColor 
                linkto = {()=>this.props.navigation.navigate('Cantidad', {color: this.state.color})}
                addSize = {this.saveSize}
                addColor = {this.saveColor}
                />
                <Footer />
            </View>
        );  
    }
}

export default App;