import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Delivery from '../pages/Delivery';
import Alcoholic from '../pages/Alcoholic';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();

const BottonsNavigate = () => {
  return (
    <Tab.Navigator
      initialRouteName="DeliveryList"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.darkLight,
        },
      }}
    >
      <Tab.Screen
        name="DeliveryList"
        component={Delivery}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="list-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AlcoholicList"
        component={Alcoholic}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="list-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottonsNavigate;