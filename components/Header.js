import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Header, Body, Left, Right, Button, Icon, Title } from 'native-base';

class Cabeza extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Image
                        source={{uri: 'https://pbs.twimg.com/profile_images/783388139591270400/zsOyJO_c.jpg'}}
                        style={{width:50, height: 50}}
                    >
                    </Image>
                </Left>
                <Body>
                    <Title>GeekShop</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name="menu"/>
                    </Button>
                </Right>
            </Header>      
        );
    }
}

export default Cabeza;