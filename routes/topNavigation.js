import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import colors from "../styles/colors";
import Categorys from "../pages/Categorys";
import NoAlcoholic from "../pages/NoAlcoholic";
import BottonsNavigate from "./bottonsNavigate";

const Tabs = createMaterialTopTabNavigator();

export default function topNavigation() {
  return (
    <Tabs.Navigator
      initialRouteName="Categorys"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.gray,
          elevation: 0,
          shadowColor: "transparent",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          textTransform: "none",
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Tabs.Screen
        name="Categorys"
        component={Categorys}
        options={{
          tabBarLabel: "Categorias",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Delivery"
        component={BottonsNavigate}
        options={{
          tabBarLabel: "Delivery",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="NoAlcoholic"
        component={NoAlcoholic}
        options={{
          tabBarLabel: "Sem Álcool",
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}
