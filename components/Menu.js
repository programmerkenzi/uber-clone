import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";


const Menu = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={tw`bg-gray-200 absolute top-10 left-5 z-50 p-3 rounded-full shadow-lg`}
            onPress={() => navigation.navigate("HomeScreen")}
        >
            <Icon name="menu" />
        </TouchableOpacity>
    )
}

export default Menu

const styles = StyleSheet.create({})