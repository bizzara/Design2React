import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { COLORS, FONTS, SIZES, images } from "../constants"
import Button from '../components/Button'
import { StatusBar } from "expo-status-bar"

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.background
    }}>
      <StatusBar hidden={true} />
      <View style={{
        flex: 1,
        marginHorizontal: 22,
        alignItems: "center",
      }}>
        <Image
          source={images.cover}
          resizeMode='contain'
          style={{
            height: SIZES.width * 0.8,
            width: SIZES.width * 0.8,
            marginTop: 22
          }}
        />
        <Text style={{
          fontSize: 24,
          fontFamily: "medium",
          color: COLORS.white,
          textAlign: "center"
        }}>Escape the ordinary life</Text>
        <Text style={{
          fontFamily: "regular",
          fontSize: 14,
          color: COLORS.secondary,
          textAlign: "center",
          marginVertical: 12
        }}>Discover great experiences around you
          and make you live interesting!</Text>

        <View style={{
          position: 'absolute',
          bottom: 22,
          left: 0,
          right: 0
        }}>
          <Button
            title="Get Started"
            filled
            textColor={COLORS.background}
            onPress={()=>navigation.navigate("Main")}
          />
          <Button
            title="Login"
            textColor={COLORS.primary}
            style={{
              backgroundColor: "transparent",
              marginTop: 12
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Welcome