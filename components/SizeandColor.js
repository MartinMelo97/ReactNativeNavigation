import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Item, Input, Label, Button } from 'native-base';

class SizeandColor extends Component {
    render() {
        return (
            <ScrollView>
                <Text>La tienda de la esquina</Text>
                <Item floatingLabel>
                    <Label>Talla de playera</Label>
                    <Input 
                    onChangeText = {(size)=>this.props.addSize(size)}
                    />
                </Item>
                <Item floatingLabel>
                    <Label>Color de playera</Label>
                    <Input
                    
                    onChangeText = {(col)=>this.props.addColor(col)}
                    />
                </Item>
                <Button
                onPress = {this.props.linkto}
                ><Text>Siguiente</Text></Button>
            </ScrollView>
        );
    }
}
export default SizeandColor;