import React, { Component } from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

class Pie extends Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical>
                        <Icon name="chatboxes"></Icon>
                        <Text>Chats</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="calculator"></Icon>
                        <Text>Calculadora</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default Pie;