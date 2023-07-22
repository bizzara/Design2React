import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { FONTS } from './constants/fonts';
import { useCallback } from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Chat, Detail, Welcome } from "./screens";
import BottomTabNavigation from "./navigations/BottomTabNavigation";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);
  const onLayoutRootView = useCallback(async ()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync()
    }
  },[fontsLoaded]);
  if(!fontsLoaded){
    return null
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen
             name="Welcome"
             component={Welcome}
             options={{
              headerShown: false
             }}
           />
            <Stack.Screen
             name="Detail"
             component={Detail}
             options={{
              headerShown: false
             }}
           />
           <Stack.Screen
             name="Main"
             component={BottomTabNavigation}
             options={{
              headerShown: false
             }}
           />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
