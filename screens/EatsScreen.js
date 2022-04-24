import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Menu from '../components/Menu';

const EatsScreen = () => {
    return (
        <View style={tw`bg-white h-full flex-1 justify-center `}>
            <Menu />
            <Text style={tw`text-center`}>Coming soon...</Text>
        </View>
    )
}

export default EatsScreen

const styles = StyleSheet.create({})