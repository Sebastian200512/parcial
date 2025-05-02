import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalculatorScreen from '../screens/calculadora';
import InfographicScreen from '../screens/infografia';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calculadora" component={CalculatorScreen} />
      <Tab.Screen name="Infografia" component={InfographicScreen} />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeTabs" component={TabsNavigator} options={{ headerShown: false }} />
      {/* Additional screens can be added here */}
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={StackNavigator} />
        {/* Additional drawer screens can be added here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
