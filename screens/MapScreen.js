/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-03 08:11:56
 * @LastEditTime: 2021-08-06 15:05:46
 * @LastEditors: Kenzi
 */

import React from "react";
import { StyleSheet, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "./../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "./../components/NavigateCard";
import RideOptionsCard from "./../components/RideOptionsCard";
import Menu from "../components/Menu";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();


  return (
    <View>
      <Menu />
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
