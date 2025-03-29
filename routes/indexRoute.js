import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottonsNavigate from "./bottonsNavigate";
import Home from "../pages/Home";
import Details from "../pages/Details";
import colors from "../styles/colors";
import FilterCategory from "../pages/FilterCategory";
import topNavigation from "./topNavigation";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, 
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Filter"
          component={FilterCategory}
          options={{
            headerShown: false,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="BottonRoutes"
          component={BottonsNavigate}
          options={{
            headerShown: false,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colors.white,
            },
          }}
        />
        <Stack.Screen
          name="TopRoutes"
          component={topNavigation}
          options={{
            headerShown: false,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
