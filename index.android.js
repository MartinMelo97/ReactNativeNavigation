/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './components/App';
import Quantity from './components/Quantity';

const Navigation = StackNavigator({
    Home: { screen: App},
    Cantidad: { screen: Quantity}
});

AppRegistry.registerComponent('Navigation', () => Navigation);
