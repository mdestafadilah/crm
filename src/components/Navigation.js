import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

// create object function
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

// Buat Menu Navigasi Bawah
const createBottomTabs = () => {
  return (
    <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen name="People List" component={PeopleList} />
      <MaterialBottomTabs.Screen name="Company List" component={CompanyList} />
      <MaterialBottomTabs.Screen name="Add Person" component={AddPerson} />
    </MaterialBottomTabs.Navigator>
  );
};

const TabNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="bottomtabs" children={createBottomTabs} />
  </Stack.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Screen
        name="crm"
        children={TabNavigator}
        Options={{
          activeTintColor: 'white',
          inactiveTintColor: '#80cbc4',
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: '#26a68a',
          },
        }}
      />
    </NavigationContainer>
  );
};

export default Navigation;
