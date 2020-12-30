import * as React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image } from 'react-native';
import DonateScreen from '../screens/DonateScreen';
import RequestScreen from '../screens/RequestScreen';

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{screen:DonateScreen,
    navigationOptions:{
        tabBarIcon:<Image
        source={
            require("../assets/request-list.png")
        }
        style={{width:20,height:20}}
        />,
        tabBarLabel:"DonateBooks"
        
        
    }
    },
    RequestBook:{screen:RequestScreen,
        navigationOptions:{
            tabBarIcon:<Image
            source={
                require("../assets/request-book.png")
            }
            style={{width:20,height:20}}
            />,
            tabBarLabel:"RequestBooks"
            
            
        }
    }
})