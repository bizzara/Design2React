import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, icons } from '../constants';
import { Chat, Explore, Home, Profile } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
     <Tab.Navigator
       screenOptions={{
         tabBarShowLabel: false,
         headerShown: false,
         tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 60,
            backgroundColor: COLORS.tertiary,
            borderWidth: 1,
            borderColor: COLORS.tertiary,
            borderTopLeftRadius: 22,
            borderTopRightRadius: 22,
         }
       }}
     >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused })=>{
                return (
                    <Image
                      source={icons.home}
                      resizeMode='contain'
                      style={{
                        height: 24,
                        width: 24,
                        tintColor: focused ? COLORS.primary : COLORS.white
                      }}
                    />
                )
            }
          }}
        />
          <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({ focused })=>{
                return (
                    <Image
                      source={icons.direction}
                      resizeMode='contain'
                      style={{
                        height: 24,
                        width: 24,
                        tintColor: focused ? COLORS.primary : COLORS.white
                      }}
                    />
                )
            }
          }}
        />
          <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ focused })=>{
                return (
                    <Image
                      source={icons.messenger}
                      resizeMode='contain'
                      style={{
                        height: 24,
                        width: 24,
                        tintColor: focused ? COLORS.primary : COLORS.white
                      }}
                    />
                )
            }
          }}
        />
          <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused })=>{
                return (
                    <Image
                      source={icons.user}
                      resizeMode='contain'
                      style={{
                        height: 24,
                        width: 24,
                        tintColor: focused ? COLORS.primary : COLORS.white
                      }}
                    />
                )
            }
          }}
        />
     </Tab.Navigator>
  )
}

export default BottomTabNavigation