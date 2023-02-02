import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddFruits from '../PrimerProyecto/AddFruits.js';
import MarketScreen from '../PrimerProyecto/MarketScreen.js';

const BTAB = createBottomTabNavigator();

export default function Api(){

    return(
        <NavigationContainer>
            <BTAB.Navigator
            screenOptions={({route})=> ({
                tabBarIcon : ({focused, color, size}) => {
                    let iconName;

                    if(route.name === 'Market'){
                        iconName = focused
                        ? 'cart'
                        : 'cart-outline';
                    } else if (route.name === 'Fruits') {
                        iconName = focused 
                        ? 'nutrition'
                        : 'nutrition-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'black',
            })}
            >
                
                <BTAB.Screen name="Market" component={MarketScreen} />
                <BTAB.Screen name="Fruits" component={AddFruits} />
                
            </BTAB.Navigator>
        </NavigationContainer>
    );
}