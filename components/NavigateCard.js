/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-06 10:35:24
 * @LastEditTime: 2021-08-06 12:44:37
 * @LastEditors: Kenzi
 */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { setDestination } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import NavFavorites from "./NavFavorites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, name</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={toInputBoxStyles}
            returnKeyType="search"
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
            }}
            fetchDetails={true}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            query={{ key: GOOGLE_MAPS_API_KEY, language: "en" }}
            enablePoweredByContainer={false}
          />
        </View>
        <NavFavorites />
        <View
          style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
        >
          <TouchableOpacity
            style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full  justify-between`}
            onPress={() => navigation.navigate("RideOptionsCard")}
          >
            <Icon name="car" type="font-awesome" color="white" size={16} />
            <Text style={tw`text-white text-center`}>Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex flex-row bg-gray-100 w-24 px-4 py-3 rounded-full justify-between`}
          >
            <Icon
              name="hamburger"
              type="font-awesome-5"
              color="black"
              size={16}
            />
            <Text style={tw`text-black text-center`}>Eats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "white",
    paddingTop: 20,
  },

  textInput: {
    backgroundColor: "#c0c0c0",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
