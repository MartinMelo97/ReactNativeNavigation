/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './components/App';
import Quantity from './components/Quantity';
import Total from './components/Total';

const Navigation = StackNavigator({
    Home: { screen: App},
    Cantidad: { screen: Quantity},
    Total: { screen: Total}
});

AppRegistry.registerComponent('Navigation', () => Navigation);
