import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, StyleSheet, Button, FlatList, Text, View, TextInput } from 'react-native';

import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';




export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
 
  const buttonPressed = () => {
    setData([...data, {key: text}]);
    Alert.alert("You typed: " + text);
  }
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route}) => ({
        tabBarIcon: ({focused, color, size}) =>{
          let iconName;
          if (route.name ==='Home') {
            iconName ='md-home';
          } else if (route.name ==='Settings'){
            iconName = 'md-settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />

        }
      })}>
        <Tab.Screen name="Home" component ={HomeScreen}/>
        <Tab.Screen name="Settings" component ={SettingScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});

