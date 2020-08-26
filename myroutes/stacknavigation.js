import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeComponent from "../components/home/Home";
import { NavigationContainer } from "@react-navigation/native";
import ProductsComponent from "../components/products/allproducts/Products";
import PdpComponent from "../components/products/pdp/pdp";
import AddProductComponent from "../components/products/proactions/addproduct/addproduct";
import UpdateProductComponent from "../components/products/proactions/updateproduct/updateproduct";


const Stack = createStackNavigator();

function MyStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,

          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
          },

          headerStyle: {
            backgroundColor: "#00AF87",
            height: 100,
          },
        }}
        headerMode="float"
      >
        <Stack.Screen name="Home" component={HomeComponent}></Stack.Screen>
        <Stack.Screen
          name="Products"
          component={ProductsComponent}
        ></Stack.Screen>
        <Stack.Screen
          name="ProductDetail"
          component={PdpComponent}
        ></Stack.Screen>
        <Stack.Screen
          name="AddProduct"
          component={AddProductComponent}
        ></Stack.Screen>
        <Stack.Screen
          name="UpdateProduct"
          component={UpdateProductComponent}
        ></Stack.Screen>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStackNavigator;
