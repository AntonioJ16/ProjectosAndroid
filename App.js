import * as React from 'react';
import { Button, Text, View , FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function DetailsScreen({item}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{item.name}</Text>
      <Text>{item.surname}</Text>
      <Text>{item.edad}</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  const DATA = 
[
  {id:'1', name: 'Antonio Jose', surname:'Diaz', edad:'24'},
  {id:'2', name: 'Rocio ',surname:'Mendez',edad:'25'},
  {id:'3', name: 'Manuel Carlos ',surname:'Maqueda', edad:'24'},
  {id:'4', name: 'Vicente ',surname:'Maroto', edad:'65'}

]

const renderItem = ({item}) =>(
  <View style={{margin:10}}>
    <Button
        title= {item.name}
        onPress={() =>  navigation.navigate('Detalles',{item})}
      />
  </View>
);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Ver Detalles"
        onPress={() => navigation.navigate('Detalles')}
      />
      <FlatList
      data = {DATA}
      renderItem ={renderItem}
      keyExtractor={item => item.id}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>¡Esta aplicacion es muy sencilla para conocer personas!</Text>
      
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Todos los usuarios" component={HomeScreen} />
      <HomeStack.Screen name="Detalles" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Informacion" component={SettingsScreen} />
      <SettingsStack.Screen name="Detalles" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Usuario" component={HomeStackScreen} />
        <Tab.Screen name="Informacion" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
