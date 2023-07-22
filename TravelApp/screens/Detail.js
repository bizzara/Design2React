import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, icons, images } from '../constants'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'

const Detail = ({ navigation }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const description = "Mount Bromo, is an active volcano and part of the Tengger massif, in East Java, Indonesia. At 2,329 meters it is not the highest peak of the massif, but is the best known...";
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background
      }}>
      <StatusBar hidden={true} />
      <View
        style={{
          flex: 1
        }}>
      
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: 42, width: 42,
              borderRadius: 6,
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              alignItems: 'center',
              justifyContent: 'center',
              position: "absolute",
              left: 16, top: 16 }}>
            <Image
              source={icons.arrowLeft}
              resizeMode='contain'
              style={{
                height: 24, width: 24, tintColor: COLORS.white
              }} />
          </TouchableOpacity>
          <Image
            source={images.place4}
            resizeMode='cover'
            style={{
              width: SIZES.width,
              height: 340,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              zIndex: -9
            }}
          />
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 16,
            position: 'absolute',
            bottom: 22,
            width: SIZES.width - 32,
            left: 0}}>
            <View>
              <Text style={{
                fontSize: 24,
                fontFamily: "semiBold",
                color: COLORS.white
              }}>Mount Bromo</Text>
            </View>
            <View style={{ flexDirection: "row"}}>
              <Text style={{
                fontSize: 20,
                color: COLORS.white,
                fontFamily: "medium"
              }}>4.7</Text>
              <Image
                source={icons.star}
                style={{
                  height: 24, width: 24, tintColor: "#E58F3F" }}/>
            </View>
          </View>
        </View>
        <ScrollView>
        <View style={{
          marginHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 16
        }}>
          <View style={{
            flexDirection: "column",
            alignItems: 'center'
          }}>
            <View style={styles.featureIcon}>
              <Image
                source={icons.directional}
                style={styles.featureIconImg}
              />
            </View>
            <Text style={styles.featureTitle}>Dificulty</Text>
            <Text style={styles.featureSubtitle}>Easy</Text>
          </View>

          <View style={{
            flexDirection: "column",
            alignItems: 'center'
          }}>
            <View style={styles.featureIcon}>
              <Image
                source={icons.alarm}
                style={styles.featureIconImg}
              />
            </View>
            <Text style={styles.featureTitle}>Time Needed</Text>
            <Text style={styles.featureSubtitle}>30-60 min</Text>
          </View>

          <View style={{
            flexDirection: "column",
            alignItems: 'center'
          }}>
            <View style={styles.featureIcon}>
              <Image
                source={icons.ticket}
                style={styles.featureIconImg} />
            </View>
            <Text style={styles.featureTitle}>Ticket</Text>
            <Text style={styles.featureSubtitle}>50K</Text>
          </View>
        </View>

        <View style={{ marginHorizontal: 16 , marginBottom: 64}}>
          <Text style={{
            fontSize: 18,
            color: COLORS.white,
            fontFamily: 'medium',
            marginVertical: 6
          }}>About</Text>
          <Text style={{
            fontSize: 14,
            color: COLORS.secondary,
            fontFamily: 'regular'
          }}>
            {showFullDescription ? description : `${description.slice(0, 100)}...`}
          </Text>
          {description.length > 100 && (
            <TouchableOpacity onPress={toggleDescription}>
              <Text style={{
                color: COLORS.primary,
                fontSize: 14,
                fontFamily: 'semiBold'
              }}>
                {showFullDescription ? 'Read Less' : 'Read More'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        </ScrollView>
        <View style={{
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: SIZES.width,
          paddingHorizontal: 16,
          paddingVertical: 16,
          backgroundColor: COLORS.background,
          zIndex: 999
        }}>
          <TouchableOpacity
            style={{
              ...styles.btn,
              borderColor: COLORS.primary,
            }}>
            <Image
              source={icons.map}
              resizeMode="contain"
              style={{
                height: 18, width: 18,
                tintColor: COLORS.primary }} />
            <Text
              style={{
                fontSize: 14,fontFamily: 'regular',
                color: COLORS.primary, marginLeft: 12}}
            >Site Map</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.btn,
              backgroundColor: COLORS.primary
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'regular',
                color: COLORS.background,
                marginLeft: 12
              }}
            >Site Map</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  featureIcon: {
    height: 48,
    width: 48,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,.1)'
  },
  featureIconImg: {
    height: 32,
    width: 32,
    tintColor: COLORS.white
  },
  featureTitle: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: 'light',
    marginTop: 8
  },
  featureSubtitle: {
    fontSize: 14,
    fontFamily: 'regular',
    color: COLORS.white
  },
  btn: {
    height: 38,
    alignItems: "center",
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'row',
    width: (SIZES.width - 32) / 2 - 16,
  }
})

export default Detail